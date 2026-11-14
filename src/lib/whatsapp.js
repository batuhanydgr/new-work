export function getWhatsAppUrl(phone, message) {
  const number = phone ? String(phone).replace(/\D/g, "") : "";
  const destination = number ? `https://wa.me/${number}` : "https://wa.me/";
  return `${destination}?text=${encodeURIComponent(message)}`;
}
