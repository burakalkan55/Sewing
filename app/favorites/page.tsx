"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { RecipeCard } from "@/components/recipe-card"
import { getAuthState, getFavorites } from "@/lib/auth"
import { sewingRecipes, type SewingRecipe } from "@/lib/recipes"
import { Heart, Sparkles, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FavoritesPage() {
  const router = useRouter()
  const [authState, setAuthState] = useState(getAuthState())
  const [favoriteRecipes, setFavoriteRecipes] = useState<SewingRecipe[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  const loadFavorites = () => {
    const auth = getAuthState()
    setAuthState(auth)

    if (!auth.isAuthenticated) {
      router.push("/login")
      return
    }

    if (auth.user) {
      const favoriteIds = getFavorites(auth.user.id)
      const favorites = sewingRecipes.filter((recipe) => favoriteIds.includes(recipe.id))
      setFavoriteRecipes(favorites)
    }
  }

  useEffect(() => {
    loadFavorites()
  }, [router])

  if (!authState.isAuthenticated) {
    return null
  }

  const filteredRecipes = selectedDifficulty
    ? favoriteRecipes.filter((recipe) => recipe.difficulty === selectedDifficulty)
    : favoriteRecipes

  const stats = {
    beginner: favoriteRecipes.filter((r) => r.difficulty === "Başlangıç").length,
    intermediate: favoriteRecipes.filter((r) => r.difficulty === "Orta").length,
    advanced: favoriteRecipes.filter((r) => r.difficulty === "İleri").length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">


      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-gradient-to-br from-pink-500 to-rose-400 rounded-full p-3 shadow-lg">
              <Heart className="h-7 w-7 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-balance bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Favori Tariflerim
              </h1>
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Sparkles className="h-4 w-4 text-pink-500" />
                Kaydettiğiniz {favoriteRecipes.length} özel tarif
              </p>
            </div>
          </div>
        </div>

        {favoriteRecipes.length > 0 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700 mb-1">Başlangıç</p>
                      <p className="text-3xl font-bold text-green-600">{stats.beginner}</p>
                    </div>
                    <div className="bg-green-100 rounded-full p-3">
                      <Heart className="h-6 w-6 text-green-600 fill-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-yellow-700 mb-1">Orta Seviye</p>
                      <p className="text-3xl font-bold text-yellow-600">{stats.intermediate}</p>
                    </div>
                    <div className="bg-yellow-100 rounded-full p-3">
                      <Heart className="h-6 w-6 text-yellow-600 fill-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-700 mb-1">İleri Seviye</p>
                      <p className="text-3xl font-bold text-red-600">{stats.advanced}</p>
                    </div>
                    <div className="bg-red-100 rounded-full p-3">
                      <Heart className="h-6 w-6 text-red-600 fill-red-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span>Filtrele:</span>
              </div>
              <Button
                variant={selectedDifficulty === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty(null)}
                className="rounded-full"
              >
                Tümü ({favoriteRecipes.length})
              </Button>
              <Button
                variant={selectedDifficulty === "Başlangıç" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty("Başlangıç")}
                className="rounded-full"
              >
                Başlangıç ({stats.beginner})
              </Button>
              <Button
                variant={selectedDifficulty === "Orta" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty("Orta")}
                className="rounded-full"
              >
                Orta ({stats.intermediate})
              </Button>
              <Button
                variant={selectedDifficulty === "İleri" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty("İleri")}
                className="rounded-full"
              >
                İleri ({stats.advanced})
              </Button>
            </div>

            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} onFavoriteChange={loadFavorites} />
                ))}
              </div>
            ) : (
              <Card className="bg-muted/30 border-dashed">
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground">Bu seviyede favori tarifiniz bulunmuyor</p>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <Card className="border-2 border-dashed border-muted-foreground/20 bg-muted/10">
            <CardContent className="p-12">
              <div className="text-center max-w-md mx-auto">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-pink-400" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Henüz favori tarifiniz yok</h2>
                <p className="text-muted-foreground mb-6 text-balance">
                  Beğendiğiniz dikiş tariflerini kaydetmek için kalp ikonuna tıklayın ve koleksiyonunuzu oluşturun
                </p>
                <Button onClick={() => router.push("/")} size="lg" className="rounded-full">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Tarifleri Keşfet
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
