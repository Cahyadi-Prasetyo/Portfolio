import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AdminBlogPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link href="/admin/blog/new">
          <Button>Add New Post</Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg border">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b">
                <td className="p-4">{post.title}</td>
                <td className="p-4">
                  <span className={`text-xs px-2 py-1 rounded ${
                    post.published ? 'bg-green-100 text-green-800' : 'bg-slate-100'
                  }`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <Link href={`/admin/blog/${post.id}`} className="text-blue-600 hover:underline text-sm">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {posts.length === 0 && (
          <p className="text-center py-8 text-slate-600">No posts yet</p>
        )}
      </div>
    </div>
  );
}
