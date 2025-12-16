export interface Fabric {
  id: string
  name: string
  description: string
  image: string
  characteristics: string[]
  uses: string[]
  difficulty: "Kolay" | "Orta" | "Zor"
  tips: string[]
}

export const fabrics: Fabric[] = [
  {
    id: "1",
    name: "Pamuklu Kumaş",
    description: "En yaygın ve başlangıç seviyesi için ideal kumaş türüdür. Nefes alır, yumuşak ve kolay işlenir.",
    image: "/cotton-fabric-texture-close-up-soft-natural.jpg",
    characteristics: ["Nefes alır ve rahat", "Kolay yıkanır ve ütülenir", "Doğal lif", "Dayanıklı"],
    uses: ["Günlük giysiler", "Çocuk kıyafetleri", "Yastık kılıfları", "Mutfak havluları"],
    difficulty: "Kolay",
    tips: [
      "Dikiş öncesi yıkayın, kumaş çekebilir",
      "Orta ısıda ütüleyin",
      "Universal iğne kullanabilirsiniz",
      "Düz dikişler için idealdir",
    ],
  },
  {
    id: "2",
    name: "Keten Kumaş",
    description: "Doğal, serin ve şık bir kumaş. Yazlık giysiler için mükemmeldir ancak kolayca kırışır.",
    image: "/linen-fabric-texture-natural-beige-elegant.jpg",
    characteristics: [
      "Çok serin ve hava geçiren",
      "Doğal parlak görünüm",
      "Kolayca kırışır",
      "Dayanıklı ve uzun ömürlü",
    ],
    uses: ["Yazlık elbiseler", "Gömlekler", "Ev tekstili", "Masa örtüleri"],
    difficulty: "Orta",
    tips: [
      "Kenarlar kolayca sökülür, overlok kullanın",
      "Yüksek ısıda ütüleyin, nemli iken daha kolay",
      "Dikiş sonrası tekrar ütüleyin",
      "Bol dikiş payı bırakın",
    ],
  },
  {
    id: "3",
    name: "Viskon (Rayon)",
    description: "İpeksi görünümlü, akışkan bir kumaş. Elbiseler ve bluzlar için popüler bir tercihtir.",
    image: "/viscose-rayon-fabric-flowing-silky-drape.jpg",
    characteristics: ["İpeksi yumuşaklık", "Güzel dökümlü", "Parlak yüzey", "Nefes alır"],
    uses: ["Elbiseler", "Bluzlar", "Etekler", "Astarlık"],
    difficulty: "Orta",
    tips: [
      "Kaygan olduğu için iğnelerle sabitleyin",
      "Keskin makası kullanın",
      "Düşük ısıda ütüleyin",
      "Elle veya hassas yıkama",
    ],
  },
  {
    id: "4",
    name: "Kot Kumaş (Denim)",
    description: "Sağlam, dayanıklı ve çok yönlü bir kumaş. Pantolon, ceket ve çantalar için idealdir.",
    image: "/denim-fabric-blue-jean-texture-sturdy.jpg",
    characteristics: ["Çok dayanıklı", "Kalın ve sağlam", "Zamanla yumuşar", "Karakteristik mavi renk"],
    uses: ["Pantolonlar", "Ceketler", "Çantalar", "Ev dekorasyon"],
    difficulty: "Zor",
    tips: [
      "Denim iğnesi kullanın (90-100)",
      "Güçlü iplik gerekir",
      "Yavaş dikin, kalın dikişlerde iğne kırılabilir",
      "Overlok veya zigzag dikiş kullanın",
    ],
  },
  {
    id: "5",
    name: "Yünlü Kumaş",
    description: "Sıcak tutan, doğal bir kumaş. Kış kıyafetleri ve mont için mükemmeldir.",
    image: "/wool-fabric-texture-warm-cozy-natural.jpg",
    characteristics: ["Çok ısı tutucu", "Doğal su itici", "Elastik ve şekil alır", "Koku tutmaz"],
    uses: ["Paltolar ve montlar", "Kazaklar", "Etekler", "Battaniyeler"],
    difficulty: "Zor",
    tips: [
      "Buhar ütüsü kullanın",
      "Yıkamada çekme olabilir, kuru temizleme tercih edin",
      "Universal veya yün iğnesi kullanın",
      "Dikişleri bastırırken buhar verin",
    ],
  },
  {
    id: "6",
    name: "Jarse Kumaş",
    description: "Esnek, rahat ve kolay dikilen örme kumaş. T-shirt ve rahat giysiler için idealdir.",
    image: "/jersey-knit-fabric-stretchy-soft-colorful.jpg",
    characteristics: ["Çok esnek", "Yumuşak tuşe", "Kenarları kıvrılır", "Rahat giyme"],
    uses: ["T-shirtler", "Pijamalar", "Bebek giysileri", "Spor kıyafetleri"],
    difficulty: "Orta",
    tips: [
      "Stretch iğne kullanın",
      "Zigzag veya stretch dikiş yapın",
      "Kumaşı germeden dikin",
      "Ballpoint iğne önerilir",
    ],
  },
]

export function getFabricById(id: string): Fabric | undefined {
  return fabrics.find((fabric) => fabric.id === id)
}

export function getFabricsByDifficulty(difficulty: Fabric["difficulty"]): Fabric[] {
  return fabrics.filter((fabric) => fabric.difficulty === difficulty)
}
