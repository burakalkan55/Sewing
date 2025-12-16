"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { sewingRecipes } from "@/lib/recipes"
import { getAuthState, toggleFavorite, getFavorites } from "@/lib/auth"
import { Heart, Clock, TrendingUp, ArrowLeft, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function RecipeDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [isFavorite, setIsFavorite] = useState(false)
  const [authState, setAuthState] = useState(getAuthState())

  const recipe = sewingRecipes.find((r) => r.id === params.id)

  useEffect(() => {
    const auth = getAuthState()
    setAuthState(auth)

    if (auth.isAuthenticated && auth.user && recipe) {
      const favorites = getFavorites(auth.user.id)
      setIsFavorite(favorites.includes(recipe.id))
    }
  }, [recipe])

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
    
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Tarif bulunamadı</h1>
          <Button onClick={() => router.push("/")}>Ana Sayfaya Dön</Button>
        </div>
      </div>
    )
  }

  const handleToggleFavorite = () => {
    if (!authState.isAuthenticated || !authState.user) {
      router.push("/login")
      return
    }

    const newState = toggleFavorite(authState.user.id, recipe.id)
    setIsFavorite(newState)
  }

  const difficultyColor = {
    Başlangıç: "bg-green-100 text-green-800 border-green-200",
    Orta: "bg-yellow-100 text-yellow-800 border-yellow-200",
    İleri: "bg-red-100 text-red-800 border-red-200",
  }

  return (
    <div className="min-h-screen bg-background">


      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Geri Dön
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">{recipe.title}</h1>
                <p className="text-lg text-muted-foreground text-pretty">{recipe.description}</p>
              </div>
              <Button
                variant={isFavorite ? "default" : "outline"}
                size="icon"
                onClick={handleToggleFavorite}
                className="shrink-0"
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className={difficultyColor[recipe.difficulty]}>
                <TrendingUp className="h-3 w-3 mr-1" />
                {recipe.difficulty}
              </Badge>
              <Badge variant="outline">
                <Clock className="h-3 w-3 mr-1" />
                {recipe.duration}
              </Badge>
              <Badge variant="secondary">{recipe.category}</Badge>
            </div>
          </div>

          {/* Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <Image
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Materials */}
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Gerekli Malzemeler</CardTitle>
                <CardDescription>Başlamadan önce hazırlayın</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recipe.materials.map((material, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{material}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Steps */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Yapılış Adımları</CardTitle>
                <CardDescription>Adım adım takip edin</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {recipe.steps.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-foreground pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
