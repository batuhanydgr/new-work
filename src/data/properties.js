import { photo } from "@/lib/images";

export const properties = [
  {
    slug: "bebek-bogaz-cizgisinde-villa",
    listingCode: "VL-0001",
    title: "Boğaz Çizgisinde Bahçeli Villa",
    status: "sale",
    type: "villa",
    price: 185000000,
    city: "İstanbul",
    district: "Bebek",
    area: 480,
    rooms: "6+1",
    bathrooms: 5,
    year: 2019,
    featured: true,
    agentId: "ece-karahan",
    summary:
      "Bebek sırtlarında, gün boyu Boğaz ışığı alan, özel bahçeli ve havuzlu bir köşk.",
    description: [
      "Bebek’in sakin bir çıkmazında konumlanan villa, Boğaz’ın değişen ışığını salonun tamamına taşır. Geniş saçaklar, taş zemin ve bronz doğramalar yapıyı gösterişten çok ölçülü bir kalıcılıkla tarif eder.",
      "Alt katta misafir süiti ve şarap odası, üst katta ise ebeveyn katı ve çocuk odaları birbirinden ayrılır. Bahçe, ısıtmalı havuz ve yaz mutfağı etrafında kuruludur. Kapalı otopark üç araç alır.",
    ],
    features: [
      "Isıtmalı havuz",
      "Boğaz manzarası",
      "Akıllı ev",
      "Şömine",
      "Kapalı otopark",
      "Yaz mutfağı",
    ],
    specs: [
      ["Isınma", "Yerden ısıtma"],
      ["Eşya", "Eşyasız"],
      ["Otopark", "3 araç"],
      ["Tapu", "Müstakil"],
    ],
    images: [
      photo("1613490493576-7fde63acd811"),
      photo("1600607687939-ce8a6c25118c"),
      photo("1600566753086-00f18fb6b3ea"),
    ],
  },
  {
    slug: "nisantasi-galeri-katli-rezidans",
    listingCode: "VL-0002",
    title: "Galeri Katlı Nişantaşı Rezidansı",
    status: "sale",
    type: "rezidans",
    price: 42500000,
    city: "İstanbul",
    district: "Nişantaşı",
    area: 210,
    rooms: "3+1",
    bathrooms: 2,
    year: 2022,
    featured: true,
    agentId: "deniz-alkan",
    summary:
      "Abdi İpekçi’ye yürüme mesafesinde, çift kat yüksekliğinde salonu olan seçilmiş bir rezidans.",
    description: [
      "Nişantaşı’nın gündelik ritmine yakın, buna rağmen sokak gürültüsünden kopuk bir ara kat. Salonun galeri boşluğu, mekânı bir daireden çok özel bir konut gibi hissettirir.",
      "Cephedeki bronz jaluzi sistemi gün ışığını kesmeden mahremiyet sağlar. Bina yönetimi concierge, vale ve misafir süiti sunar. Mutfak, ada tezgâh ve kilerle günlük kullanıma göre planlanmıştır.",
    ],
    features: ["Concierge", "Vale", "Galeri salon", "Gömme dolap", "Jeneratör", "Güvenlik"],
    specs: [
      ["Kat", "7"],
      ["Isınma", "Merkezi"],
      ["Eşya", "Kısmi eşyalı"],
      ["Aidat", "Aylık"],
    ],
    images: [
      photo("1545324418-cc1a3fa10c00"),
      photo("1600210492486-724fe5c67fb0"),
      photo("1616594039964-ae9021a400a0"),
    ],
  },
  {
    slug: "yalikavak-deniz-manzarali-villa",
    listingCode: "VL-0003",
    title: "Yalıkavak’ta Denize İnen Villa",
    status: "sale",
    type: "villa",
    price: 240000000,
    city: "Bodrum",
    district: "Yalıkavak",
    area: 620,
    rooms: "7+1",
    bathrooms: 6,
    year: 2021,
    featured: true,
    agentId: "kerem-aydin",
    summary:
      "Yalıkavak sırtlarında, özel iskelesi ve gün batımı terasları olan geniş bir kıyı villası.",
    description: [
      "Villa, eğime yaslanan üç kademeden oluşur. Üst kotta yaşam alanı ve sonsuzluk havuzu, alt kotta misafir odaları ve denize inen patika yer alır.",
      "Taş, kireç badana ve tik döşeme Ege ışığında sakin durur. Yaz aylarında gölgelik verandalar, kışın ise şömineli salon kullanılır. Site içinde 7/24 güvenlik vardır.",
    ],
    features: ["Sonsuzluk havuzu", "Özel iskele", "Deniz manzarası", "Staff odası", "Şarap mahzeni", "Güneş paneli"],
    specs: [
      ["Arsa", "1.450 m²"],
      ["Isınma", "Isı pompası"],
      ["Eşya", "Eşyalı"],
      ["Konum", "Site içi"],
    ],
    images: [
      photo("1613977257363-707ba9348227"),
      photo("1600585154340-be6161a56a0c"),
      photo("1600585154526-990dced4db0d"),
    ],
  },
  {
    slug: "alacati-tas-avlu-evi",
    listingCode: "VL-0004",
    title: "Alaçatı Taş Avlu Evi",
    status: "sale",
    type: "mustakil",
    price: 67500000,
    city: "Çeşme",
    district: "Alaçatı",
    area: 280,
    rooms: "4+1",
    bathrooms: 3,
    year: 2018,
    featured: true,
    agentId: "kerem-aydin",
    summary:
      "Alaçatı’nın taş sokaklarında, iç avlusu ve yenilenmiş çatı katıyla sakin bir müstakil ev.",
    description: [
      "Evin asıl karakteri sokağa değil avluya bakar. Öğle güneşi avludaki zeytin ağacının etrafında döner; odalar bu boşluğa açılır.",
      "Restorasyonda özgün taş duvarlar korunmuş, ıslak hacimler ve mutfak güncel bir dile çekilmiştir. Çatı katı bir stüdyo olarak ayrılır. Merkeze yürüme mesafesindedir, buna rağmen sokak akşamları sakindir.",
    ],
    features: ["İç avlu", "Taş duvar", "Şömine", "Çatı stüdyosu", "Yüksek tavan", "Yürüme mesafesi"],
    specs: [
      ["Tapu", "Müstakil"],
      ["Isınma", "Klima ve şömine"],
      ["Eşya", "Eşyasız"],
      ["Bahçe", "Avlulu"],
    ],
    images: [
      photo("1572120360610-d971b9d7767c"),
      photo("1600121848594-d8644e57abab"),
      photo("1484154218962-a197022b5858"),
    ],
  },
  {
    slug: "etiler-kiralik-sehir-dairesi",
    listingCode: "VL-0005",
    title: "Etiler’de Yüksek Kat Daire",
    status: "rent",
    type: "daire",
    price: 185000,
    city: "İstanbul",
    district: "Etiler",
    area: 165,
    rooms: "3+1",
    bathrooms: 2,
    year: 2020,
    featured: true,
    agentId: "ece-karahan",
    summary:
      "Etiler sırtlarında, orman çizgisini gören, eşyalı ve uzun dönem kiralamaya uygun bir daire.",
    description: [
      "Daire, gün ışığını üç cepheden alır. Salon, yemek alanı ve mutfak tek bir akışta birleşir; gece şehir ışığı balkon boyunca uzanır.",
      "Bina 2020 sonrasında teslim edilmiştir. Isı ve ses yalıtımı yüksektir. Kapalı otopark, güvenlik ve çocuk oyun alanı vardır. Eşya düzeni sade tutulmuştur, taşınmaya hazırdır.",
    ],
    features: ["Eşyalı", "Kapalı otopark", "Balkon", "Güvenlik", "Asansör", "Depo"],
    specs: [
      ["Kat", "9 / 12"],
      ["Isınma", "Yerden ısıtma"],
      ["Süre", "Yıllık"],
      ["Depozito", "İki kira"],
    ],
    images: [
      photo("1460317442991-0ec209397118"),
      photo("1560448204-e02f11c3d0e2"),
      photo("1584622650111-993a426fbf0a"),
    ],
  },
  {
    slug: "levent-plaza-ofis-kati",
    listingCode: "VL-0006",
    title: "Levent Plaza’da Ofis Katı",
    status: "sale",
    type: "ticari",
    price: 92000000,
    city: "İstanbul",
    district: "Levent",
    area: 340,
    rooms: "Açık plan",
    bathrooms: 2,
    year: 2017,
    featured: true,
    agentId: "selin-uras",
    summary:
      "Levent’in finans aksında, bölünebilir açık planı ve plaza hizmetleri olan bir ofis katı.",
    description: [
      "Kat, iki çekirdek arasında kesintisiz bir plan sunar. Toplantı odaları cepheye, çalışma alanı ise avluya bakacak şekilde ayrılabilir.",
      "Plaza resepsiyonu, misafir karşılama ve teknik servis gün boyu çalışır. Kat mülkiyeti tek tapudadır; bölünerek kiralanabilir ancak satış bütün olarak yapılır.",
    ],
    features: ["Plaza", "Jeneratör", "Yangın sistemi", "Otopark", "Toplantı odası", "Server odası"],
    specs: [
      ["Kat", "14"],
      ["Isınma", "Merkezi VRF"],
      ["Kullanım", "Ofis"],
      ["Aidat", "Plaza"],
    ],
    images: [
      photo("1486406146926-c627a92ad1ab"),
      photo("1497366216548-37526070297c"),
      photo("1497366811353-6870744d04b2"),
    ],
  },
  {
    slug: "urla-bag-evi",
    listingCode: "VL-0007",
    title: "Urla Bağları İçinde Ev",
    status: "sale",
    type: "mustakil",
    price: 38500000,
    city: "İzmir",
    district: "Urla",
    area: 240,
    rooms: "4+1",
    bathrooms: 3,
    year: 2016,
    featured: false,
    agentId: "kerem-aydin",
    summary: "Urla bağ rotasında, tek katlı ve avlulu, zeytinlik içine yerleşmiş bir ev.",
    description: [
      "Ev, bağ sırasının kenarında alçak bir profile sahiptir. Taş, ahşap doğramalar ve geniş saçak yaz günlerinde iç mekânı serin tutar.",
      "Mutfak avluya açılır. Misafir kanadı ana yaşamdan bir avlu geçişiyle ayrılır. Arazide sulama hattı ve küçük bir üretim mutfağı vardır.",
    ],
    features: ["Zeytinlik", "Avlu", "Şömine", "Üretim mutfağı", "Otopark", "Veranda"],
    specs: [
      ["Arsa", "2.800 m²"],
      ["Isınma", "Şömine ve klima"],
      ["Eşya", "Eşyasız"],
      ["Tapu", "Müstakil"],
    ],
    images: [
      photo("1564013799919-ab600027ffc6"),
      photo("1570129477492-45c003edd2be"),
      photo("1600210492493-0946911123ea"),
    ],
  },
  {
    slug: "moda-sahil-dairesi",
    listingCode: "VL-0008",
    title: "Moda Sahiline Bakan Daire",
    status: "rent",
    type: "daire",
    price: 95000,
    city: "İstanbul",
    district: "Moda",
    area: 110,
    rooms: "2+1",
    bathrooms: 1,
    year: 2014,
    featured: false,
    agentId: "deniz-alkan",
    summary: "Moda sahil yürüyüşüne birkaç dakika, yüksek tavanlı ve sakin bir ara kat daire.",
    description: [
      "Eski bir apartmanın yenilenmiş dairesi. Tavan yüksekliği ve dar balkon, Kadıköy’ün ritmini içeri alır ama sokak kotunun üstünde kalır.",
      "Mutfak yenilenmiş, banyo tek hacimde sadeleştirilmiştir. Eşyasız teslim edilir. Uzun dönem kiracı aranır.",
    ],
    features: ["Yüksek tavan", "Balkon", "Yenilenmiş mutfak", "Asansörsüz", "Sahile yakın", "Eşyasız"],
    specs: [
      ["Kat", "3 / 5"],
      ["Isınma", "Kombi"],
      ["Süre", "Yıllık"],
      ["Depozito", "İki kira"],
    ],
    images: [
      photo("1493809842364-78817add7ffb"),
      photo("1502672260266-1c1ef2d93688"),
      photo("1554995207-c18c203602cb"),
    ],
  },
  {
    slug: "gocek-koy-manzarali-arsa",
    listingCode: "VL-0009",
    title: "Göcek’te Köy Manzaralı Arsa",
    status: "sale",
    type: "arsa",
    price: 28000000,
    city: "Göcek",
    district: "Göcek",
    area: 1450,
    rooms: null,
    bathrooms: null,
    year: null,
    featured: false,
    agentId: "selin-uras",
    summary: "Göcek’in yerleşim çeperinde, deniz çizgisini uzaktan gören, imarlı bir konut arsası.",
    description: [
      "Parsel hafif eğimlidir ve güneye bakar. Mevcut bitki örtüsü korunabilir; yapılaşma alanı imar notuna göre sınırlıdır.",
      "Yola cephesi vardır, elektrik ve su hattı parsel sınırına kadar gelir. Bölge, düşük yoğunluklu konut dokusunu korur.",
    ],
    features: ["İmarlı", "Yola cephe", "Altyapı", "Güney bakış", "Düşük yoğunluk", "Tapulu"],
    specs: [
      ["İmar", "Konut"],
      ["Eğim", "Hafif"],
      ["Hisseli", "Hayır"],
      ["Kaks", "İmar çapında"],
    ],
    images: [
      photo("1500382017468-9049fed747ef"),
      photo("1605276374104-dee2a0ed3cd6"),
      photo("1580587771525-78b9dba3b914"),
    ],
  },
  {
    slug: "cankaya-kiralk-rezidans",
    listingCode: "VL-0010",
    title: "Çankaya’da Bahçe Katı Rezidans",
    status: "rent",
    type: "rezidans",
    price: 120000,
    city: "Ankara",
    district: "Çankaya",
    area: 145,
    rooms: "2+1",
    bathrooms: 2,
    year: 2023,
    featured: false,
    agentId: "deniz-alkan",
    summary: "Çankaya’nın yeni konut aksında, özel bahçe kullanımı olan eşyalı bir rezidans dairesi.",
    description: [
      "Zemin kata yakın konumu sayesinde daire, bina bahçesinin sakin bir köşesini kullanır. Salon bu bahçeye doğrama boydan açılır.",
      "Rezidans hizmetleri arasında güvenlik, kapalı otopark ve bir çalışma salonu bulunur. Eşya düzeni nötr tutulmuştur.",
    ],
    features: ["Özel bahçe", "Eşyalı", "Kapalı otopark", "Güvenlik", "Isı yalıtımı", "Depo"],
    specs: [
      ["Kat", "Bahçe"],
      ["Isınma", "Merkezi"],
      ["Süre", "Yıllık"],
      ["Depozito", "İki kira"],
    ],
    images: [
      photo("1600585154340-be6161a56a0c"),
      photo("1600607687644-c7171b42498b"),
      photo("1512918728675-ed5a9ecdebfd"),
    ],
  },
  {
    slug: "lara-palmiye-villasi",
    listingCode: "VL-0011",
    title: "Lara’da Palmiye Bahçeli Villa",
    status: "sale",
    type: "villa",
    price: 54000000,
    city: "Antalya",
    district: "Lara",
    area: 360,
    rooms: "5+1",
    bathrooms: 4,
    year: 2020,
    featured: false,
    agentId: "kerem-aydin",
    summary: "Lara’nın konut bölgesinde, geniş bahçesi ve gölgeli verandası olan müstakil bir villa.",
    description: [
      "Villa tek parsele oturur. Havuz, palmiye dizisinin gerisinde kalır; yaşam alanı verandayla bahçeye bağlanır.",
      "Üst kat yatak odalarına ayrılmıştır. Alt katta bir ebeveyn süiti misafir için kullanılabilir. Site yönetimi ortak alanları sınırlı tutar, mahremiyet öndedir.",
    ],
    features: ["Özel havuz", "Bahçe", "Veranda", "Kapalı otopark", "Ebeveyn süiti", "Güvenlik"],
    specs: [
      ["Arsa", "780 m²"],
      ["Isınma", "Klima"],
      ["Eşya", "Eşyasız"],
      ["Site", "Butik"],
    ],
    images: [
      photo("1512917774080-9991f1c4c750"),
      photo("1600596542815-ffad4c1539a9"),
      photo("1502005229762-cf1b2da7c5d6"),
    ],
  },
  {
    slug: "karakoy-kiralk-ticari-kat",
    listingCode: "VL-0012",
    title: "Karaköy’de Cadde Üstü Ticari Kat",
    status: "rent",
    type: "ticari",
    price: 250000,
    city: "İstanbul",
    district: "Karaköy",
    area: 180,
    rooms: "Açık plan",
    bathrooms: 2,
    year: 2015,
    featured: false,
    agentId: "selin-uras",
    summary: "Karaköy’ün yürünen aksında, vitrin yüksekliği olan showroom veya ofis olarak kullanılabilir kat.",
    description: [
      "Kat, cadde kotunun hemen üstündedir ve geniş vitrinleriyle yaya aksını görür. Yükseklik, showroom ya da bölünmüş ofis için elverişlidir.",
      "Islak hacimler ve iklimlendirme yenilenmiştir. Depolama arkada çözülür. Tabela alanı cephe yönetmeliğine tabidir.",
    ],
    features: ["Vitrin", "Yüksek tavan", "Klima", "Depo", "Cadde üstü", "Asansör"],
    specs: [
      ["Kat", "1"],
      ["Kullanım", "Ofis / showroom"],
      ["Süre", "Yıllık"],
      ["Depozito", "Üç kira"],
    ],
    images: [
      photo("1487958449943-2429e8be8625"),
      photo("1600489000022-c2086d79f9d4"),
      photo("1618221195710-dd6b41faaea6"),
    ],
  },
];

export function getPropertyBySlug(slug) {
  return properties.find((item) => item.slug === slug) || null;
}

export function getFeaturedProperties() {
  return properties.filter((item) => item.featured);
}

export function getCities() {
  return [...new Set(properties.map((item) => item.city))].sort((a, b) =>
    a.localeCompare(b, "tr"),
  );
}

export function getDistricts() {
  return [...new Set(properties.map((item) => item.district))].sort((a, b) =>
    a.localeCompare(b, "tr"),
  );
}

export function getRelatedProperties(property, limit = 3) {
  const sameType = properties.filter(
    (item) => item.slug !== property.slug && item.type === property.type,
  );
  const sameCity = properties.filter(
    (item) =>
      item.slug !== property.slug &&
      item.city === property.city &&
      item.type !== property.type,
  );

  return [...sameType, ...sameCity].slice(0, limit);
}
