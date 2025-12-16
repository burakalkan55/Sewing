export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

export function getAuthState(): AuthState {
  if (typeof window === "undefined") {
    return { user: null, isAuthenticated: false }
  }

  const userStr = localStorage.getItem("currentUser")
  if (!userStr) {
    return { user: null, isAuthenticated: false }
  }

  try {
    const user = JSON.parse(userStr)
    return { user, isAuthenticated: true }
  } catch {
    return { user: null, isAuthenticated: false }
  }
}

export function login(email: string, password: string): { success: boolean; error?: string; user?: User } {
  const usersStr = localStorage.getItem("users")
  const users = usersStr ? JSON.parse(usersStr) : []

  const user = users.find((u: any) => u.email === email && u.password === password)

  if (!user) {
    return { success: false, error: "E-posta veya şifre hatalı" }
  }

  const { password: _, ...userWithoutPassword } = user
  localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword))

  return { success: true, user: userWithoutPassword }
}

export function register(
  email: string,
  password: string,
  name: string,
): { success: boolean; error?: string; user?: User } {
  const usersStr = localStorage.getItem("users")
  const users = usersStr ? JSON.parse(usersStr) : []

  if (users.find((u: any) => u.email === email)) {
    return { success: false, error: "Bu e-posta zaten kayıtlı" }
  }

  const newUser = {
    id: crypto.randomUUID(),
    email,
    password,
    name,
    createdAt: new Date().toISOString(),
  }

  users.push(newUser)
  localStorage.setItem("users", JSON.stringify(users))

  const { password: _, ...userWithoutPassword } = newUser
  localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword))

  return { success: true, user: userWithoutPassword }
}

export function logout() {
  localStorage.removeItem("currentUser")
}

export function getFavorites(userId: string): string[] {
  if (typeof window === "undefined") return []

  const favStr = localStorage.getItem(`favorites_${userId}`)
  return favStr ? JSON.parse(favStr) : []
}

export function toggleFavorite(userId: string, recipeId: string): boolean {
  const favorites = getFavorites(userId)
  const index = favorites.indexOf(recipeId)

  if (index > -1) {
    favorites.splice(index, 1)
    localStorage.setItem(`favorites_${userId}`, JSON.stringify(favorites))
    return false
  } else {
    favorites.push(recipeId)
    localStorage.setItem(`favorites_${userId}`, JSON.stringify(favorites))
    return true
  }
}
