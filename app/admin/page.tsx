import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const stats = await Promise.all([
    prisma.project.count(),
    prisma.post.count(),
    prisma.contact.count({ where: { read: false } }),
  ]);

  const [projectCount, postCount, unreadContacts] = stats;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Welcome Back! 👋</h1>
          <p className="text-indigo-100">Here's what's happening with your portfolio today.</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Projects Card */}
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold">{projectCount}</p>
              </div>
            </div>
            <h3 className="text-sm font-medium text-blue-100 mb-1">Total Projects</h3>
            <p className="text-xs text-white/80">All your amazing work</p>
          </div>
        </div>

        {/* Blog Posts Card */}
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold">{postCount}</p>
              </div>
            </div>
            <h3 className="text-sm font-medium text-purple-100 mb-1">Blog Posts</h3>
            <p className="text-xs text-white/80">Published articles</p>
          </div>
        </div>

        {/* Messages Card */}
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-red-500 p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold">{unreadContacts}</p>
              </div>
            </div>
            <h3 className="text-sm font-medium text-orange-100 mb-1">Unread Messages</h3>
            <p className="text-xs text-white/80">Waiting for response</p>
          </div>
          {unreadContacts > 0 && (
            <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-xl font-bold mb-4 text-slate-800">Quick Actions</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <a href="/admin/projects" className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 group">
            <div className="w-10 h-10 bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-600">New Project</span>
          </a>

          <a href="/admin/blog" className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200 group">
            <div className="w-10 h-10 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-slate-700 group-hover:text-purple-600">New Post</span>
          </a>

          <a href="/admin/contacts" className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 group">
            <div className="w-10 h-10 bg-orange-100 group-hover:bg-orange-200 rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-slate-700 group-hover:text-orange-600">View Messages</span>
          </a>

          <a href="/" className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-green-500 hover:bg-green-50 transition-all duration-200 group">
            <div className="w-10 h-10 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-slate-700 group-hover:text-green-600">View Site</span>
          </a>
        </div>
      </div>
    </div>
  );
}
