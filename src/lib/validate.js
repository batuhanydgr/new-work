function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || "");
}

function isPhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

export function validateContact(values) {
  const errors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = "Ad soyad en az 2 karakter olmalı.";
  }

  if (!isEmail(values.email)) {
    errors.email = "Geçerli bir e-posta adresi girin.";
  }

  if (!isPhone(values.phone)) {
    errors.phone = "Geçerli bir telefon numarası girin.";
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = "Mesaj en az 10 karakter olmalı.";
  }

  return errors;
}
