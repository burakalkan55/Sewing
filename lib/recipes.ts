export interface SewingRecipe {
  id: string
  title: string
  description: string
  difficulty: "Başlangıç" | "Orta" | "İleri"
  duration: string
  materials: string[]
  steps: string[]
  image: string
  category: string
}

export const sewingRecipes: SewingRecipe[] = [
  {
    id: "1",
    title: "Basit Yastık Kılıfı",
    description:
      "Evinizdeki yastıklar için renkli ve şık kılıflar dikmeyi öğrenin. Başlangıç seviyesi için mükemmel bir proje.",
    difficulty: "Başlangıç",
    duration: "1-2 saat",
    materials: ["Kumaş (50x50 cm)", "Dikiş ipi", "İğne", "Makas", "Ütü"],
    steps: [
      "Kumaşı 45x90 cm boyutunda kesin",
      "Kenarları 1 cm içe katlayıp ütüleyin",
      "Uzun kenarları dikişle sabitleyin",
      "Kumaşı ters çevirin ve yastık şeklini verin",
      "Yan kenarları dikişle birleştirin",
      "Ağız kısmını katlayıp dikişle kapatın",
    ],
    image: "/pembe-yast-k-k-l-f--diki-.jpg",
    category: "Ev Dekorasyonu",
  },
  {
    id: "2",
    title: "Bez Çanta",
    description:
      "Çevre dostu ve kullanışlı bir bez çanta yapın. Alışverişlerinizde kullanabileceğiniz şık bir aksesuar.",
    difficulty: "Başlangıç",
    duration: "2-3 saat",
    materials: ["Sağlam bez kumaş", "Dikiş ipi", "Dikiş makinesi", "Ütü", "Cetvel"],
    steps: [
      "İki adet 40x35 cm kumaş kesin",
      "Sap için 60x8 cm iki şerit kesin",
      "Ana parçaları ters yüz birleştirin",
      "Üç kenardan dikişle birleştirin",
      "Sapları hazırlayıp dikişle sabitleyin",
      "Kumaşı düz tarafa çevirin ve ütüleyin",
    ],
    image: "/pembe-bez--anta-al--veri-.jpg",
    category: "Aksesuar",
  },
  {
    id: "3",
    title: "Bebek Battaniyesi",
    description: "Yumuşak kumaşlardan sevgi dolu bir bebek battaniyesi dikmeyi öğrenin. Harika bir hediye fikri!",
    difficulty: "Orta",
    duration: "4-5 saat",
    materials: ["Pamuklu kumaş (1m x 1m)", "Yumuşak astarlık kumaş", "Biye şerit", "Dikiş ipi", "İğne"],
    steps: [
      "Üst ve alt kumaşları kesin (80x100 cm)",
      "Kumaşları yüz yüze getirin",
      "Etraftan 1 cm pay bırakarak dikin",
      "Bir kenardan çevirin",
      "Biye şeritle kenarları süsleyin",
      "Son bir dikişle tamamlayın",
    ],
    image: "/pembe-bebek-battaniye-yumu-ak.jpg",
    category: "Bebek",
  },
  {
    id: "4",
    title: "Apron (Mutfak Önlüğü)",
    description: "Mutfakta kullanabileceğiniz şık ve fonksiyonel bir önlük yapın. Cep detaylı pratik tasarım.",
    difficulty: "Orta",
    duration: "3-4 saat",
    materials: ["Kalın pamuklu kumaş", "Şerit (boyun ve bel için)", "Cep kumaşı", "Dikiş makinesi"],
    steps: [
      "Ana kumaşı önlük şeklinde kesin",
      "Cep parçalarını hazırlayın",
      "Cepleri ana kumaşa dikin",
      "Kenarları temiz dikin",
      "Boyun ve bel şeritlerini takın",
      "Tüm dikişleri kontrol edin",
    ],
    image: "/pembe-mutfak--nl----diki-.jpg",
    category: "Mutfak",
  },
  {
    id: "5",
    title: "Fermuar Kullanımı",
    description: "Dikiş projelerinizde fermuar nasıl kullanılır öğrenin. Her seviyeden dikişçi için önemli bir teknik.",
    difficulty: "İleri",
    duration: "1 saat",
    materials: ["Fermuar", "Kumaş", "Fermuar ayağı", "İğne", "Dikiş ipi"],
    steps: [
      "Fermuarın yerini işaretleyin",
      "Kumaşı fermuar boyu kadar açın",
      "Fermuarı iğnelerle sabitleyin",
      "Fermuar ayağı ile dikişe başlayın",
      "Her iki tarafı da eşit dikin",
      "Açılıp kapanmayı test edin",
    ],
    image: "/fermuar-diki--teknik.jpg",
    category: "Teknikler",
  },
  {
    id: "6",
    title: "Scrunchie (Saç Tokası)",
    description: "Modaya uygun scrunchie yapımını öğrenin. Hızlı ve kolay bir proje, harika hediye fikri!",
    difficulty: "Başlangıç",
    duration: "30 dakika",
    materials: ["İpek veya pamuk kumaş (50x10 cm)", "Lastik (20 cm)", "İğne", "İp"],
    steps: [
      "Kumaşı uzun şerit halinde kesin",
      "Kumaşı boyuna katla ve dik",
      "Lastiği kumaşın içinden geçirin",
      "Lastik uçlarını birleştirin",
      "Kumaş uçlarını dikin",
      "Scrunchie hazır!",
    ],
    image: "/pembe-scrunchie-sa--tokas-.jpg",
    category: "Aksesuar",
  },
]
