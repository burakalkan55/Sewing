"use client"

import { RecipeCard } from "@/components/recipe-card"
import { sewingRecipes } from "@/lib/recipes"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Search } from "lucide-react"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  const categories = Array.from(new Set(sewingRecipes.map((r) => r.category)))

  const filteredRecipes = sewingRecipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = difficultyFilter === "all" || recipe.difficulty === difficultyFilter
    const matchesCategory = categoryFilter === "all" || recipe.category === categoryFilter

    return matchesSearch && matchesDifficulty && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">


      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Dikiş Sanatını Öğrenin</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Adım adım tariflerle dikiş dünyasına hoş geldiniz. Başlangıçtan ileri seviyeye kadar projeler sizi bekliyor!
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Tarif ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Seviye" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tüm Seviyeler</SelectItem>
              <SelectItem value="Başlangıç">Başlangıç</SelectItem>
              <SelectItem value="Orta">Orta</SelectItem>
              <SelectItem value="İleri">İleri</SelectItem>
            </SelectContent>
          </Select>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tüm Kategoriler</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Aradığınız kriterlere uygun tarif bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  )
}
