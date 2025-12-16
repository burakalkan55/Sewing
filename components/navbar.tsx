"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Heart, User, LogOut, Scissors, Shirt, Ruler, Menu } from "lucide-react"
import { getAuthState, logout } from "@/lib/auth"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  // Avoid hydration mismatch by resolving auth only after mount
  const [mounted, setMounted] = useState(false)
  const [authState, setAuthState] = useState(getAuthState())

  useEffect(() => {
    setAuthState(getAuthState())
  }, [pathname])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = () => {
    logout()
    setAuthState({ user: null, isAuthenticated: false })
    router.push("/login")
  }

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-primary rounded-full p-2">
              <Scissors className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-xl text-foreground">Dikiş Atölyesi</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/fabrics">
              <Button variant={pathname === "/fabrics" ? "default" : "ghost"} size="sm" className="gap-2">
                <Shirt className="h-4 w-4" />
                <span className="hidden sm:inline">Kumaşlar</span>
              </Button>
            </Link>

            <Link href="/patterns">
              <Button variant={pathname === "/patterns" ? "default" : "ghost"} size="sm" className="gap-2">
                <Ruler className="h-4 w-4" />
                <span className="hidden sm:inline">Kalıplar</span>
              </Button>
            </Link>

            {mounted && (authState.isAuthenticated ? (
              <>
                <Link href="/favorites">
                  <Button variant={pathname === "/favorites" ? "default" : "ghost"} size="sm" className="gap-2">
                    <Heart className="h-4 w-4" />
                    <span className="hidden sm:inline">Favorilerim</span>
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button variant={pathname === "/profile" ? "default" : "ghost"} size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">{authState.user?.name}</span>
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Çıkış</span>
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant={pathname === "/login" ? "default" : "ghost"} size="sm">
                    Giriş Yap
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant={pathname === "/register" ? "default" : "secondary"} size="sm">
                    Kayıt Ol
                  </Button>
                </Link>
              </>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menüyü aç">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                {/* A11y: Provide hidden title/description for screen readers */}
                <SheetTitle className="sr-only">Menü</SheetTitle>
                <SheetDescription className="sr-only">Gezinme seçenekleri</SheetDescription>
                <div className="p-4 border-b flex items-center gap-2">
                  <div className="bg-primary rounded-full p-2">
                    <Scissors className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-lg">Dikiş Atölyesi</span>
                </div>
                <nav className="flex flex-col p-2">
                  <SheetClose asChild>
                    <Link href="/fabrics" className="w-full">
                      <Button
                        variant={pathname === "/fabrics" ? "default" : "ghost"}
                        className="w-full justify-start gap-2"
                      >
                        <Shirt className="h-4 w-4" />
                        Kumaşlar
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/patterns" className="w-full">
                      <Button
                        variant={pathname === "/patterns" ? "default" : "ghost"}
                        className="w-full justify-start gap-2"
                      >
                        <Ruler className="h-4 w-4" />
                        Kalıplar
                      </Button>
                    </Link>
                  </SheetClose>

                  {mounted && (authState.isAuthenticated ? (
                    <>
                      <SheetClose asChild>
                        <Link href="/favorites" className="w-full">
                          <Button
                            variant={pathname === "/favorites" ? "default" : "ghost"}
                            className="w-full justify-start gap-2"
                          >
                            <Heart className="h-4 w-4" />
                            Favorilerim
                          </Button>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/profile" className="w-full">
                          <Button
                            variant={pathname === "/profile" ? "default" : "ghost"}
                            className="w-full justify-start gap-2"
                          >
                            <User className="h-4 w-4" />
                            {authState.user?.name}
                          </Button>
                        </Link>
                      </SheetClose>
                      <div className="p-2">
                        <Button className="w-full justify-start gap-2" variant="ghost" onClick={handleLogout}>
                          <LogOut className="h-4 w-4" />
                          Çıkış
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <SheetClose asChild>
                        <Link href="/login" className="w-full">
                          <Button
                            variant={pathname === "/login" ? "default" : "ghost"}
                            className="w-full justify-start"
                          >
                            Giriş Yap
                          </Button>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/register" className="w-full">
                          <Button
                            variant={pathname === "/register" ? "default" : "secondary"}
                            className="w-full justify-start"
                          >
                            Kayıt Ol
                          </Button>
                        </Link>
                      </SheetClose>
                    </>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
