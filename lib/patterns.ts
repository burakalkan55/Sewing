export interface Pattern {
  id: string
  title: string
  category: "temel" | "üst-giyim" | "alt-giyim" | "çocuk"
  difficulty: "Başlangıç" | "Orta" | "İleri"
  image: string
  description: string
  measurements: string[]
  steps: {
    title: string
    description: string
    tips?: string
  }[]
  materials: string[]
  estimatedTime: string
}

export const patterns: Pattern[] = [
  {
    id: "basic-skirt",
    title: "Temel Etek Kalıbı",
    category: "alt-giyim",
    difficulty: "Başlangıç",
    image: "/basic-skirt-pattern-sewing-measurement-diagram.jpg",
    description: "Dik etek kalıbı hazırlamayı öğrenin. Bu temel kalıp, birçok etek modelinin temelidir.",
    measurements: ["Bel çevresi", "Kalça çevresi", "Etek boyu", "Bel-kalça yüksekliği"],
    estimatedTime: "2-3 saat",
    materials: ["Büyük kareli kağıt", "Cetvel (60 cm)", "Kalem", "Makas", "Mezura"],
    steps: [
      {
        title: "Ölçüleri Alın",
        description: "Bel çevresi, kalça çevresi ve etek boyunu ölçün. Bel-kalça yüksekliğini not alın.",
        tips: "Ölçü alırken vücuda çok sıkı veya çok gevşek olmamaya dikkat edin.",
      },
      {
        title: "Ön Parça Kalıbını Çizin",
        description:
          "Kağıt üzerinde dik bir çizgi çizerek başlayın. Bu, eteğin orta ön hattı olacak. Bel ve kalça genişliklerini hesaplayın (1/4 ölçü + 1 cm).",
        tips: "Ön parça için genellikle 1 cm rahatlık payı yeterlidir.",
      },
      {
        title: "Arka Parça Kalıbını Çizin",
        description: "Ön parça gibi başlayın, ancak arka parçada biraz daha fazla genişlik ekleyin (ekstra 1-2 cm).",
        tips: "Arka parça her zaman ön parçadan biraz daha geniş olmalıdır.",
      },
      {
        title: "Dikiş Paylarını Ekleyin",
        description: "Bel ve yan dikiş payı için 1.5 cm, alt kıvırma için 3-4 cm pay ekleyin.",
        tips: "Dikiş payları kalıbın dışına çizilir.",
      },
      {
        title: "Kalıbı Kesin ve Test Edin",
        description: "Kalıbı kesin ve ucuz bir kumaş üzerinde test edin. Gerekirse düzeltmeler yapın.",
        tips: "İlk denemeyi her zaman bir prova kumaşında yapın.",
      },
    ],
  },
  {
    id: "basic-shirt",
    title: "Temel Gömlek Kalıbı",
    category: "üst-giyim",
    difficulty: "Orta",
    image: "/basic-shirt-blouse-pattern-sewing-diagram.jpg",
    description: "Klasik gömlek kalıbını hazırlamayı öğrenin. Göğüs ve kol ölçüleriyle çalışma pratiği yapın.",
    measurements: ["Göğüs çevresi", "Bel çevresi", "Omuz genişliği", "Gömlek boyu", "Kol boyu"],
    estimatedTime: "4-5 saat",
    materials: ["Büyük kareli kağıt", "Cetvel (60 cm)", "Eğri cetvel", "Kalem", "Makas", "Mezura"],
    steps: [
      {
        title: "Vücut Ölçülerini Alın",
        description: "Göğüs çevresi, bel çevresi, omuz genişliği, arka beden genişliği ve gömlek boyunu ölçün.",
        tips: "Göğüs ölçüsünü en geniş yerden alın.",
      },
      {
        title: "Ön Beden Kalıbını Çizin",
        description:
          "Orta ön hattından başlayarak, göğüs genişliğini, yaka derinliğini ve koltuk altı yüksekliğini işaretleyin.",
        tips: "Ön parçada göğüs payı ve yaka açıklığını unutmayın.",
      },
      {
        title: "Arka Beden Kalıbını Çizin",
        description: "Arka parça için omuz eğimini, sırt genişliğini ve yaka çukurunu çizin.",
        tips: "Arka yaka ön yakadan daha yüksek olmalıdır.",
      },
      {
        title: "Kol Kalıbını Hazırlayın",
        description: "Kol boyunu, kol başı yüksekliğini ve bilek genişliğini işaretleyerek kol kalıbını oluşturun.",
        tips: "Kol başı beden koltuğuna tam oturmalıdır.",
      },
      {
        title: "Yaka ve Manşet Ekleyin",
        description: "Yaka genişliği ve manşet boyutlarını hesaplayıp kalıplarını çizin.",
        tips: "Yaka genişliği boyun çevresine eşit olmalıdır.",
      },
    ],
  },
  {
    id: "basic-dress",
    title: "Temel Elbise Kalıbı",
    category: "temel",
    difficulty: "İleri",
    image: "/basic-dress-bodice-pattern-sewing-technical-drawin.jpg",
    description: "Üst beden ve etek parçalarını birleştirerek temel elbise kalıbı oluşturun.",
    measurements: ["Göğüs çevresi", "Bel çevresi", "Kalça çevresi", "Elbise boyu", "Omuz genişliği"],
    estimatedTime: "5-6 saat",
    materials: ["Büyük kareli kağıt", "Cetvel (60 cm)", "Eğri cetvel", "Pisagor cetveli", "Kalem", "Makas", "Mezura"],
    steps: [
      {
        title: "Tüm Vücut Ölçülerini Alın",
        description: "Göğüs, bel, kalça çevresi, elbise boyu, omuz genişliği ve kol boyunu detaylı ölçün.",
        tips: "Her ölçüyü iki kez alarak doğruluğundan emin olun.",
      },
      {
        title: "Üst Beden Kalıbını Oluşturun",
        description: "Temel gömlek kalıbı tekniğini kullanarak üst beden kalıbını hazırlayın.",
        tips: "Göğüs payını doğru yerleştirdiğinizden emin olun.",
      },
      {
        title: "Bel Hattını İşaretleyin",
        description: "Doğal bel çizgisini hem ön hem arka parçaya işaretleyin ve ölçüyü kontrol edin.",
        tips: "Bel daraltması genellikle yan dikişlerde yapılır.",
      },
      {
        title: "Etek Parçasını Ekleyin",
        description: "Bel hattından itibaren istediğiniz etek boyuna kadar uzatın. Kalça genişliğini ekleyin.",
        tips: "Etek bol veya dar olabilir, tarz tercihinize göre şekillendirin.",
      },
      {
        title: "Kalıbı Tamamlayın",
        description: "Tüm parçaları birleştirin, dikiş paylarını ekleyin ve detayları (yaka, kol) tamamlayın.",
        tips: "İlk denemeyi her zaman prova kumaşında yapın ve vücudunuza uyarlayın.",
      },
    ],
  },
  {
    id: "basic-pants",
    title: "Temel Pantolon Kalıbı",
    category: "alt-giyim",
    difficulty: "İleri",
    image: "/basic-pants-trousers-pattern-technical-sewing-diag.jpg",
    description: "Profesyonel pantolon kalıbı hazırlamayı öğrenin. Ağ derinliği ve bacak şekli ayarlamalarını öğrenin.",
    measurements: ["Bel çevresi", "Kalça çevresi", "Ağ derinliği", "Pantolon boyu", "Paça genişliği"],
    estimatedTime: "5-6 saat",
    materials: ["Büyük kareli kağıt", "Cetvel (60 cm)", "Eğri cetvel", "L cetveli", "Kalem", "Makas", "Mezura"],
    steps: [
      {
        title: "Detaylı Ölçü Alın",
        description: "Bel, kalça çevresi, ağ derinliği, pantolon boyu, iç bacak boyu ve paça genişliğini ölçün.",
        tips: "Ağ derinliği ölçümü çok önemlidir, oturma konumundayken ölçün.",
      },
      {
        title: "Ön Pantolon Kalıbını Çizin",
        description: "Orta ön hattından başlayarak, ağ eğrisini, kalça genişliğini ve bacak şeklini çizin.",
        tips: "Ön ağ eğrisi arka ağ eğrisinden daha düzdür.",
      },
      {
        title: "Arka Pantolon Kalıbını Çizin",
        description: "Arka parça için daha fazla ağ derinliği ve genişlik ekleyin. Arka ağ eğrisi daha kavisli olmalı.",
        tips: "Arka parça her zaman ön parçadan daha geniştir.",
      },
      {
        title: "Paça Şeklini Belirleyin",
        description: "İstediğiniz paça genişliğini (dar, düz, bol) belirleyin ve bacak çizgilerini ayarlayın.",
        tips: "Her iki bacak iç ve dış çizgilerinin ölçüleri eşit olmalı.",
      },
      {
        title: "Cep ve Fermuarı Planlayın",
        description: "Cep ağzı, fermuarlık ve bel bandı konumlarını işaretleyin.",
        tips: "Cep derinliği en az 18-20 cm olmalıdır.",
      },
    ],
  },
  {
    id: "child-tshirt",
    title: "Çocuk Tişört Kalıbı",
    category: "çocuk",
    difficulty: "Başlangıç",
    image: "/children-tshirt-pattern-simple-sewing-diagram-kids.jpg",
    description: "Çocuklar için basit tişört kalıbı hazırlayın. Yaş gruplarına göre ölçü ayarlamayı öğrenin.",
    measurements: ["Göğüs çevresi", "Tişört boyu", "Kol boyu", "Omuz genişliği"],
    estimatedTime: "2-3 saat",
    materials: ["Büyük kareli kağıt", "Cetvel (60 cm)", "Kalem", "Makas", "Mezura"],
    steps: [
      {
        title: "Çocuğun Ölçülerini Alın",
        description: "Göğüs çevresi, tişört boyu, kol boyu ve omuz genişliğini ölçün.",
        tips: "Çocuk için biraz bol kesim yapın, rahat hareket edebilmesi için.",
      },
      {
        title: "Basit Dikdörtgen Beden Çizin",
        description: "Göğüs genişliğinin yarısı + 5 cm ile başlayın. Bu basitleştirilmiş bir yöntemdir.",
        tips: "Çocuk giyiminde sadelik ve konfor önceliktir.",
      },
      {
        title: "Yaka Açıklığını Belirleyin",
        description: "Yuvarlak yaka için orta üst kısımdan 6-7 cm aşağı inin ve oval çizin.",
        tips: "Başın rahatça geçebileceği genişlikte yaka açın.",
      },
      {
        title: "Kol Kalıbını Basit Tutun",
        description:
          "Kısa kollu tişört için kısa kolun en basit halini kullanın. Sadece kol boyunu ve genişliğini çizin.",
        tips: "Çocuk tişörtlerinde raglan kol da çok pratiktir.",
      },
      {
        title: "Kalıbı Kesin",
        description:
          "Dikiş payları ile birlikte kalıbı kesin. Esnek kumaş kullanacağınız için özel dikkat gerektirmez.",
        tips: "Jersey veya pamuklu süprem kumaş idealdir.",
      },
    ],
  },
  {
    id: "basic-sleeve",
    title: "Temel Kol Kalıbı",
    category: "temel",
    difficulty: "Orta",
    image: "/basic-sleeve-pattern-armhole-sewing-technical-diag.jpg",
    description: "Beden koltuğuna uygun temel kol kalıbı hazırlayın. Kol başı ve bilek ölçü hesaplamalarını öğrenin.",
    measurements: ["Kol boyu", "Kol başı genişliği", "Bilek çevresi", "Dirsek genişliği"],
    estimatedTime: "2-3 saat",
    materials: ["Kareli kağıt", "Cetvel (60 cm)", "Eğri cetvel", "Kalem", "Makas", "Mezura"],
    steps: [
      {
        title: "Kol Ölçülerini Alın",
        description: "Omuz başından bilekkadar kol boyunu, kol başı genişliğini ve bilek çevresini ölçün.",
        tips: "Kol ölçüsünü kolu hafif bükülü haldeyken alın.",
      },
      {
        title: "Kol Başı Yüksekliğini Hesaplayın",
        description: "Beden koltuk ölçüsünün yaklaşık 3/4ü kadar kol başı yüksekliği olmalıdır.",
        tips: "Kol başı çok yüksek olursa kol takılırken zorlanırsınız.",
      },
      {
        title: "Kol Eğrisini Çizin",
        description: "Kol başı eğrisi düzgün ve pürüzsüz olmalı. Eğri cetvel kullanın.",
        tips: "Ön kol başı arka kol başından biraz daha düz olur.",
      },
      {
        title: "Kol Boyu ve Bilek Genişliğini Ayarlayın",
        description: "İstediğiniz kol boyuna kadar uzatın ve bilek genişliğini belirleyin.",
        tips: "Manşet ekleyecekseniz bilek daha dar olabilir.",
      },
      {
        title: "Dikiş Paylarını Ekleyin",
        description: "Kol çevresine ve alt kısma 1.5 cm dikiş payı ekleyin.",
        tips: "Kol başına pay eklerken eğriyi takip edin.",
      },
    ],
  },
]

export function getPatternById(id: string): Pattern | undefined {
  return patterns.find((pattern) => pattern.id === id)
}

export function getPatternsByCategory(category: string): Pattern[] {
  if (category === "tümü") return patterns
  return patterns.filter((pattern) => pattern.category === category)
}

export function getPatternsByDifficulty(difficulty: string): Pattern[] {
  if (difficulty === "tümü") return patterns
  return patterns.filter((pattern) => pattern.difficulty === difficulty)
}
