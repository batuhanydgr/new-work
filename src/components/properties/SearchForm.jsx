"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { propertyTypes } from "@/lib/format";
import {
  buildPropertySearchParams,
  hasActiveFilters,
  validatePriceRange,
} from "@/lib/filters";
import { getCities, getDistricts } from "@/data/properties";
import { fieldClass, labelClass } from "@/components/ui/fields";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

const cities = getCities();
const districts = getDistricts().filter((district) => !cities.includes(district));

export default function SearchForm({
  initialValues = {},
  variant = "hero",
  allowAll = false,
  buttonLabel = "İlanları Keşfet",
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const statusDefault = initialValues.status || (allowAll ? "all" : "sale");
  const statusChoices = allowAll
    ? [
        { value: "all", label: "Tümü" },
        { value: "sale", label: "Satılık" },
        { value: "rent", label: "Kiralık" },
      ]
    : [
        { value: "sale", label: "Satılık" },
        { value: "rent", label: "Kiralık" },
      ];

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      status: String(data.get("status") || ""),
      type: String(data.get("type") || ""),
      city: String(data.get("city") || ""),
      minPrice: String(data.get("minPrice") || "").trim(),
      maxPrice: String(data.get("maxPrice") || "").trim(),
    };

    const priceError = validatePriceRange(values.minPrice, values.maxPrice);
    if (priceError) {
      setError(priceError);
      return;
    }

    setError("");
    const params = buildPropertySearchParams(values);
    const query = params.toString();
    router.push(query ? `/properties?${query}` : "/properties");
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-label="İlan arama"
      className={cn(
        "bg-cream p-4 shadow-[0_24px_60px_rgba(23,22,20,0.18)] sm:p-6",
        variant === "bar" && "border border-mist shadow-none",
      )}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6 xl:items-end">
        <fieldset className="min-w-0 md:col-span-2 xl:col-span-2">
          <legend className={labelClass}>Durum</legend>
          <div className="flex bg-mist p-1">
            {statusChoices.map((choice) => (
              <label key={choice.value} className="min-w-0 flex-1">
                <input
                  type="radio"
                  name="status"
                  value={choice.value}
                  defaultChecked={statusDefault === choice.value}
                  className="peer sr-only"
                />
                <span className="block cursor-pointer px-2 py-3 text-center text-[11px] uppercase tracking-[0.14em] text-stone peer-checked:bg-ink peer-checked:text-cream sm:text-[12px] sm:tracking-[0.16em]">
                  {choice.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="min-w-0 xl:col-span-2">
          <span className={labelClass}>Gayrimenkul tipi</span>
          <select name="type" defaultValue={initialValues.type || ""} className={fieldClass()}>
            <option value="">Tümü</option>
            {propertyTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </label>

        <label className="min-w-0 xl:col-span-2">
          <span className={labelClass}>Şehir / bölge</span>
          <select name="city" defaultValue={initialValues.city || ""} className={fieldClass()}>
            <option value="">Tümü</option>
            <optgroup label="Şehir">
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </optgroup>
            <optgroup label="Bölge">
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </optgroup>
          </select>
        </label>

        <label className="min-w-0 xl:col-span-2">
          <span className={labelClass}>Minimum fiyat</span>
          <input
            name="minPrice"
            type="number"
            min="0"
            inputMode="numeric"
            placeholder="Min ₺"
            defaultValue={initialValues.minPrice || ""}
            className={fieldClass()}
          />
        </label>

        <label className="min-w-0 xl:col-span-2">
          <span className={labelClass}>Maksimum fiyat</span>
          <input
            name="maxPrice"
            type="number"
            min="0"
            inputMode="numeric"
            placeholder="Max ₺"
            defaultValue={initialValues.maxPrice || ""}
            className={fieldClass()}
          />
        </label>

        <div className="min-w-0 md:col-span-2 xl:col-span-2">
          <Button type="submit" className="w-full">
            {buttonLabel}
          </Button>
        </div>
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-sm text-red-800">
          {error}
        </p>
      ) : null}

      {variant === "bar" && hasActiveFilters(initialValues) ? (
        <div className="mt-4">
          <Link
            href="/properties"
            className="text-[12px] uppercase tracking-[0.16em] text-stone transition-colors hover:text-ink"
          >
            Filtreleri temizle
          </Link>
        </div>
      ) : null}
    </form>
  );
}
