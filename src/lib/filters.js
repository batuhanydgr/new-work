export function normalizeQuery(raw = {}) {
  const pick = (key) => {
    const value = raw[key];
    if (Array.isArray(value)) return value[0] || "";
    return typeof value === "string" ? value : "";
  };

  return {
    status: pick("status"),
    type: pick("type"),
    city: pick("city"),
    minPrice: pick("minPrice"),
    maxPrice: pick("maxPrice"),
  };
}

export function validatePriceRange(minPrice, maxPrice) {
  if (!minPrice && !maxPrice) return "";

  const min = minPrice ? Number(minPrice) : null;
  const max = maxPrice ? Number(maxPrice) : null;

  if ((min !== null && Number.isNaN(min)) || (max !== null && Number.isNaN(max))) {
    return "Fiyat alanlarına geçerli bir sayı girin.";
  }

  if ((min !== null && min < 0) || (max !== null && max < 0)) {
    return "Fiyat negatif olamaz.";
  }

  if (min !== null && max !== null && min > max) {
    return "Minimum fiyat, maksimum fiyattan büyük olamaz.";
  }

  return "";
}

export function buildPropertySearchParams(values) {
  const params = new URLSearchParams();

  if (values.status && values.status !== "all") params.set("status", values.status);
  if (values.type) params.set("type", values.type);
  if (values.city) params.set("city", values.city);
  if (values.minPrice) params.set("minPrice", String(values.minPrice));
  if (values.maxPrice) params.set("maxPrice", String(values.maxPrice));

  return params;
}

export function filterProperties(list, query) {
  const min = query.minPrice ? Number(query.minPrice) : null;
  const max = query.maxPrice ? Number(query.maxPrice) : null;

  return list.filter((item) => {
    if (query.status && item.status !== query.status) return false;
    if (query.type && item.type !== query.type) return false;
    if (query.city && item.city !== query.city && item.district !== query.city) return false;
    if (min !== null && !Number.isNaN(min) && item.price < min) return false;
    if (max !== null && !Number.isNaN(max) && item.price > max) return false;
    return true;
  });
}

export function hasActiveFilters(query) {
  return Boolean(query.status || query.type || query.city || query.minPrice || query.maxPrice);
}
