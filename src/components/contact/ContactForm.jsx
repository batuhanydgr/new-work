"use client";

import { useState } from "react";
import { fieldClass, labelClass } from "@/components/ui/fields";
import Button from "@/components/ui/Button";
import { validateContact } from "@/lib/validate";

const initial = { name: "", email: "", phone: "", message: "" };

export default function ContactForm({ propertyTitle = "" }) {
  const [values, setValues] = useState({
    ...initial,
    message: propertyTitle ? `${propertyTitle} hakkında bilgi almak istiyorum.` : "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("sent");
    setValues(initial);
  }

  if (status === "sent") {
    return (
      <div className="border border-bronze bg-cream px-6 py-12" role="status">
        <p className="text-[11px] uppercase tracking-[0.28em] text-bronze">Talebiniz alındı</p>
        <h2 className="mt-3 font-display text-4xl text-ink">En kısa sürede dönüş yapacağız</h2>
        <p className="mt-4 max-w-md text-stone">
          Notunuz danışman ekibine iletildi. Uygun kişi, çalışma saatleri içinde sizi arayacak.
        </p>
        <Button type="button" className="mt-8" onClick={() => setStatus("idle")}>
          Yeni mesaj
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-mist bg-cream p-5 sm:p-8">
      {propertyTitle ? (
        <p className="mb-6 border border-mist bg-paper px-4 py-3 text-sm text-ink">
          İlgilendiğiniz ilan: <span className="font-medium">{propertyTitle}</span>
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Ad soyad"
          name="name"
          value={values.name}
          error={errors.name}
          onChange={update}
          autoComplete="name"
        />
        <Field
          label="E-posta"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={update}
          autoComplete="email"
        />
        <Field
          label="Telefon"
          name="phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={update}
          autoComplete="tel"
          className="sm:col-span-2"
        />
        <label className="sm:col-span-2">
          <span className={labelClass}>Mesaj</span>
          <textarea
            name="message"
            rows={6}
            value={values.message}
            onChange={update}
            aria-invalid={Boolean(errors.message)}
            className={fieldClass(Boolean(errors.message))}
          />
          {errors.message ? <ErrorText>{errors.message}</ErrorText> : null}
        </label>
      </div>

      <Button type="submit" className="mt-6" disabled={status === "sending"}>
        {status === "sending" ? "Gönderiliyor" : "Mesajı gönder"}
      </Button>
    </form>
  );
}

function Field({ label, name, error, className = "", ...props }) {
  return (
    <label className={className}>
      <span className={labelClass}>{label}</span>
      <input name={name} aria-invalid={Boolean(error)} className={fieldClass(Boolean(error))} {...props} />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </label>
  );
}

function ErrorText({ children }) {
  return (
    <p role="alert" className="mt-2 text-sm text-red-800">
      {children}
    </p>
  );
}
