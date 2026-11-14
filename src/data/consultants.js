import { portrait } from "@/lib/images";

export const consultants = [
  {
    id: "ece-karahan",
    name: "Ece Karahan",
    role: "Lüks konut",
    phone: "+90 532 410 11 20",
    email: "ece.karahan@velora.com.tr",
    image: portrait("1573496359142-b8d87734a5a2"),
    bio: "Boğaz hattı ve şehir içi seçkin dairelerde on iki yıldır alıcı tarafını temsil eder.",
  },
  {
    id: "kerem-aydin",
    name: "Kerem Aydın",
    role: "Villa ve yazlık",
    phone: "+90 532 410 11 34",
    email: "kerem.aydin@velora.com.tr",
    image: portrait("1560250097-0b93528c311a"),
    bio: "Bodrum, Çeşme ve Urla’da kıyı villaları ile bağ evleri üzerine çalışır.",
  },
  {
    id: "selin-uras",
    name: "Selin Uras",
    role: "Ticari ve yatırım",
    phone: "+90 532 410 11 48",
    email: "selin.uras@velora.com.tr",
    image: portrait("1580489944761-15a19d654956"),
    bio: "Plaza, cadde üstü ticari ve arsa işlerinde sayısal tarafı sade bir dille anlatır.",
  },
  {
    id: "deniz-alkan",
    name: "Deniz Alkan",
    role: "Rezidans ve daire",
    phone: "+90 532 410 11 56",
    email: "deniz.alkan@velora.com.tr",
    image: portrait("1472099645785-5658abf4ff4e"),
    bio: "Yeni rezidanslar ve yenilenmiş apartman dairelerinde kiracı ile mal sahibi arasında durur.",
  },
];

export function getConsultant(id) {
  return consultants.find((item) => item.id === id) || consultants[0];
}
