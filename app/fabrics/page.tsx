"use client"

import { fabrics, type Fabric } from "@/lib/fabrics"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { Sparkles, Info } from "lucide-react"

export default function FabricsPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<"Tümü" | Fabric["difficulty"]>("Tümü")

  const filteredFabrics =
    selectedDifficulty === "Tümü" ? fabrics : fabrics.filter((f) => f.difficulty === selectedDifficulty)

  const difficultyColor = (difficulty: Fabric["difficulty"]) => {
    switch (difficulty) {
      case "Kolay":
        return "bg-green-100 text-green-800 border-green-200"
      case "Orta":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Zor":
        return "bg-red-100 text-red-800 border-red-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Kumaş Rehberi</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Kumaş Türleri ve Özellikleri
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Dikiş projeleriniz için doğru kumaşı seçmek çok önemlidir. Her kumaşın kendine özgü özellikleri ve kullanım
            alanları vardır.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Button
            variant={selectedDifficulty === "Tümü" ? "default" : "outline"}
            onClick={() => setSelectedDifficulty("Tümü")}
            size="sm"
          >
            Tümü ({fabrics.length})
          </Button>
          <Button
            variant={selectedDifficulty === "Kolay" ? "default" : "outline"}
            onClick={() => setSelectedDifficulty("Kolay")}
            size="sm"
            className="border-green-200"
          >
            Kolay ({fabrics.filter((f) => f.difficulty === "Kolay").length})
          </Button>
          <Button
            variant={selectedDifficulty === "Orta" ? "default" : "outline"}
            onClick={() => setSelectedDifficulty("Orta")}
            size="sm"
            className="border-yellow-200"
          >
            Orta ({fabrics.filter((f) => f.difficulty === "Orta").length})
          </Button>
          <Button
            variant={selectedDifficulty === "Zor" ? "default" : "outline"}
            onClick={() => setSelectedDifficulty("Zor")}
            size="sm"
            className="border-red-200"
          >
            Zor ({fabrics.filter((f) => f.difficulty === "Zor").length})
          </Button>
        </div>

        {/* Info Card */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="flex gap-3 items-start p-6">
            <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium mb-1">Dikkat!</p>
              <p className="text-sm text-muted-foreground">
                Her kumaş türünün kendine özgü dikiş teknikleri vardır. Projenize başlamadan önce kumaş özelliklerini
                öğrenmeniz başarılı sonuçlar almanıza yardımcı olacaktır.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Fabrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFabrics.map((fabric) => (
            <Card key={fabric.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden bg-secondary/20">
                <Image
                  src={fabric.image || "/placeholder.svg"}
                  alt={fabric.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 right-3 ${difficultyColor(fabric.difficulty)}`}>
                  {fabric.difficulty}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{fabric.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{fabric.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Characteristics */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Özellikler</h4>
                  <ul className="space-y-1">
                    {fabric.characteristics.map((char, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Uses */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Kullanım Alanları</h4>
                  <div className="flex flex-wrap gap-2">
                    {fabric.uses.map((use, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {use}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Dikiş İpuçları</h4>
                  <ul className="space-y-1">
                    {fabric.tips.map((tip, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFabrics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Bu zorluk seviyesinde kumaş bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  )
}
