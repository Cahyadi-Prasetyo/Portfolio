import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const stats = await Promise.all([
    prisma.project.count(),
    prisma.post.count(),
    prisma.contact.count({ where: { read: false } }),
  ]);

  const [projectCount, postCount, unreadContacts] = stats;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-slate-600 text-sm mb-2">Total Projects</h3>
          <p className="text-3xl font-bold">{projectCount}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-slate-600 text-sm mb-2">Total Posts</h3>
          <p className="text-3xl font-bold">{postCount}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-slate-600 text-sm mb-2">Unread Messages</h3>
          <p className="text-3xl font-bold">{unreadContacts}</p>
        </div>
      </div>
    </div>
  );
}
