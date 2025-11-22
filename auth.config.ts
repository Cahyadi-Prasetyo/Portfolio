import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnAdmin = nextUrl.pathname.startsWith('/admin')
      const isOnLogin = nextUrl.pathname === '/admin/login'

      // Allow public routes
      if (!isOnAdmin) {
        return true
      }

      // If on login page
      if (isOnLogin) {
        // Redirect logged in users away from login
        if (isLoggedIn) {
          return Response.redirect(new URL('/admin', nextUrl))
        }
        // Allow access to login page for non-logged in users
        return true
      }

      // For other admin routes, require authentication
      if (!isLoggedIn) {
        return false // Will redirect to signIn page
      }

      return true
    },
  },
  providers: [],
} satisfies NextAuthConfig

