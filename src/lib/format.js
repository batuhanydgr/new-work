const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 0,
});

const number = new Intl.NumberFormat("tr-TR");

export const propertyTypes = [
  { value: "daire", label: "Daire" },
  { value: "villa", label: "Villa" },
  { value: "rezidans", label: "Rezidans" },
  { value: "mustakil", label: "Müstakil Ev" },
  { value: "ticari", label: "Ticari Gayrimenkul" },
  { value: "arsa", label: "Arsa" },
];

export const statusOptions = [
  { value: "sale", label: "Satılık" },
  { value: "rent", label: "Kiralık" },
];

export function formatPrice(value, status) {
  const formatted = currency.format(value);
  return status === "rent" ? `${formatted} / ay` : formatted;
}

export function formatArea(area) {
  return `${number.format(area)} m²`;
}

export function getTypeLabel(value) {
  return propertyTypes.find((item) => item.value === value)?.label || value;
}

export function getStatusLabel(value) {
  return statusOptions.find((item) => item.value === value)?.label || value;
}

export function roomLabel(property) {
  if (property.rooms) return property.rooms;
  if (property.type === "arsa") return "Parselli";
  return "—";
}

export function bathLabel(property) {
  if (property.bathrooms) return String(property.bathrooms);
  if (property.type === "arsa") return "—";
  return "—";
}
