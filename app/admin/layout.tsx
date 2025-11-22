import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      {/* Modern Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Admin Panel</h1>
                <p className="text-xs text-slate-500">Portfolio Manager</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-2">
              <Link
                href="/admin"
                className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/projects"
                className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-200"
              >
                Projects
              </Link>
              <Link
                href="/admin/blog"
                className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-all duration-200"
              >
                Blog
              </Link>
              <Link
                href="/admin/contacts"
                className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200"
              >
                Contacts
              </Link>

              {/* Divider */}
              <div className="w-px h-6 bg-slate-300 mx-2"></div>

              {/* User Info */}
              <div className="flex items-center gap-3 px-3 py-1.5 bg-slate-100 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {session.user?.email?.charAt(0).toUpperCase() || 'A'}
                </div>
                <span className="text-sm text-slate-700 font-medium hidden md:block">
                  {session.user?.email?.split('@')[0] || 'Admin'}
                </span>
              </div>

              {/* Logout Button */}
              <form action="/api/auth/signout" method="post">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="hidden md:inline">Logout</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-sm text-slate-500 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <p>© 2025 Portfolio Admin. Made with ❤️</p>
      </footer>
    </div>
  );
}
