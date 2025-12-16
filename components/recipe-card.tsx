"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Clock, TrendingUp } from "lucide-react"
import type { SewingRecipe } from "@/lib/recipes"
import { useState, useEffect } from "react"
import { getAuthState, toggleFavorite, getFavorites } from "@/lib/auth"
import Link from "next/link"
import Image from "next/image"

interface RecipeCardProps {
  recipe: SewingRecipe
  onFavoriteChange?: () => void
}

export function RecipeCard({ recipe, onFavoriteChange }: RecipeCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [authState, setAuthState] = useState(getAuthState())

  useEffect(() => {
    const auth = getAuthState()
    setAuthState(auth)

    if (auth.isAuthenticated && auth.user) {
      const favorites = getFavorites(auth.user.id)
      setIsFavorite(favorites.includes(recipe.id))
    }
  }, [recipe.id])

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()

    if (!authState.isAuthenticated || !authState.user) {
      window.location.href = "/login"
      return
    }

    const newState = toggleFavorite(authState.user.id, recipe.id)
    setIsFavorite(newState)
    onFavoriteChange?.()
  }

  const difficultyColor = {
    Başlangıç: "bg-green-100 text-green-800 border-green-200",
    Orta: "bg-yellow-100 text-yellow-800 border-yellow-200",
    İleri: "bg-red-100 text-red-800 border-red-200",
  }

  return (
    <Link href={`/recipe/${recipe.id}`}>
      <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col group">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-3 right-3 rounded-full shadow-md"
            onClick={handleToggleFavorite}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-pink-500 text-pink-500" : ""}`} />
          </Button>
        </div>

        <CardHeader>
          <div className="flex items-start justify-between gap-2 mb-2">
            <CardTitle className="text-lg leading-tight">{recipe.title}</CardTitle>
          </div>
          <CardDescription className="line-clamp-2">{recipe.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
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
        </CardContent>

        <CardFooter>
          <Button className="w-full" variant="default">
            Tarifi Görüntüle
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
