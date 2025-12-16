"use client"

import { useState } from "react"
import { patterns } from "@/lib/patterns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Ruler, Scissors } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function PatternsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("tümü")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("tümü")

  const filteredPatterns = patterns.filter((pattern) => {
    const categoryMatch = selectedCategory === "tümü" || pattern.category === selectedCategory
    const difficultyMatch = selectedDifficulty === "tümü" || pattern.difficulty === selectedDifficulty
    return categoryMatch && difficultyMatch
  })

  const difficultyColors = {
    Başlangıç: "bg-green-100 text-green-700 hover:bg-green-200",
    Orta: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
    İleri: "bg-red-100 text-red-700 hover:bg-red-200",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-pink-50/30 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 mb-4">
            <Ruler className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent">
            Kalıp Hazırlama Rehberi
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Temel giysi kalıplarını hazırlamayı öğrenin. Adım adım talimatlarla kendi kalıplarınızı oluşturun.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-6 mb-8">
          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">Kategori</h3>
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid grid-cols-2 lg:grid-cols-5 h-auto gap-2 bg-transparent">
                <TabsTrigger
                  value="tümü"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Tümü
                </TabsTrigger>
                <TabsTrigger
                  value="temel"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Temel Kalıplar
                </TabsTrigger>
                <TabsTrigger
                  value="üst-giyim"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Üst Giyim
                </TabsTrigger>
                <TabsTrigger
                  value="alt-giyim"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Alt Giyim
                </TabsTrigger>
                <TabsTrigger
                  value="çocuk"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Çocuk
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">Zorluk Seviyesi</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedDifficulty === "tümü" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty("tümü")}
              >
                Tümü
              </Button>
              <Button
                variant={selectedDifficulty === "Başlangıç" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty("Başlangıç")}
                className={selectedDifficulty === "Başlangıç" ? difficultyColors["Başlangıç"] : ""}
              >
                Başlangıç
              </Button>
              <Button
                variant={selectedDifficulty === "Orta" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty("Orta")}
                className={selectedDifficulty === "Orta" ? difficultyColors["Orta"] : ""}
              >
                Orta
              </Button>
              <Button
                variant={selectedDifficulty === "İleri" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty("İleri")}
                className={selectedDifficulty === "İleri" ? difficultyColors["İleri"] : ""}
              >
                İleri
              </Button>
            </div>
          </div>
        </div>

        {/* Pattern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatterns.map((pattern) => (
            <Dialog key={pattern.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary/50">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100">
                    <Image
                      src={pattern.image || "/placeholder.svg"}
                      alt={pattern.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={difficultyColors[pattern.difficulty]}>{pattern.difficulty}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {pattern.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{pattern.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{pattern.estimatedTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Scissors className="h-4 w-4" />
                        <span>{pattern.steps.length} Adım</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-3xl max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{pattern.title}</DialogTitle>
                  <DialogDescription>{pattern.description}</DialogDescription>
                </DialogHeader>

                <ScrollArea className="h-[60vh] pr-4">
                  <div className="space-y-6">
                    {/* Pattern Image */}
                    <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100">
                      <Image
                        src={pattern.image || "/placeholder.svg"}
                        alt={pattern.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-muted-foreground">Zorluk Seviyesi</h4>
                        <Badge className={difficultyColors[pattern.difficulty]}>{pattern.difficulty}</Badge>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-muted-foreground">Tahmini Süre</h4>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{pattern.estimatedTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Measurements */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Ruler className="h-5 w-5 text-primary" />
                        Gerekli Ölçüler
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {pattern.measurements.map((measurement, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {measurement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Materials */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Scissors className="h-5 w-5 text-primary" />
                        Gerekli Malzemeler
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {pattern.materials.map((material, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Steps */}
                    <div>
                      <h4 className="font-semibold mb-4">Adım Adım Talimatlar</h4>
                      <div className="space-y-4">
                        {pattern.steps.map((step, index) => (
                          <div key={index} className="border-l-2 border-primary pl-4 space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                                {index + 1}
                              </div>
                              <h5 className="font-semibold">{step.title}</h5>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                            {step.tips && (
                              <div className="bg-pink-50 rounded-lg p-3 text-sm">
                                <span className="font-semibold text-primary">💡 İpucu: </span>
                                <span className="text-muted-foreground">{step.tips}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredPatterns.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Ruler className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Kalıp Bulunamadı</h3>
            <p className="text-muted-foreground">
              Seçtiğiniz filtrelere uygun kalıp bulunamadı. Lütfen farklı bir filtre deneyin.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
