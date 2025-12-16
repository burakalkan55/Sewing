"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAuthState, getFavorites } from "@/lib/auth"
import { Heart, Calendar, Mail, UserIcon } from "lucide-react"
import { sewingRecipes } from "@/lib/recipes"

export default function ProfilePage() {
  const router = useRouter()
  const [authState, setAuthState] = useState(getAuthState())
  const [favoriteCount, setFavoriteCount] = useState(0)

  useEffect(() => {
    const auth = getAuthState()
    setAuthState(auth)

    if (!auth.isAuthenticated) {
      router.push("/login")
      return
    }

    if (auth.user) {
      const favorites = getFavorites(auth.user.id)
      setFavoriteCount(favorites.length)
    }
  }, [router])

  if (!authState.isAuthenticated || !authState.user) {
    return null
  }

  const joinDate = new Date(authState.user.createdAt).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Profilim</h1>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-4">
                    <UserIcon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{authState.user.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Mail className="h-4 w-4" />
                      {authState.user.email}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Katılım tarihi: {joinDate}</span>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">İstatistikler</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="text-sm">Favoriler</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">{favoriteCount}</span>
                </div>

                <Button variant="outline" className="w-full bg-transparent" onClick={() => router.push("/favorites")}>
                  Favorileri Görüntüle
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Activity Section */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Dikiş Yolculuğunuz</CardTitle>
              <CardDescription>Dikiş atölyemizde {sewingRecipes.length} farklı tarif sizi bekliyor!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{sewingRecipes.length}</div>
                  <div className="text-sm text-muted-foreground">Toplam Tarif</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {sewingRecipes.filter((r) => r.difficulty === "Başlangıç").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Başlangıç</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{favoriteCount}</div>
                  <div className="text-sm text-muted-foreground">Favorilerim</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
