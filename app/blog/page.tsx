import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 transition">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-slate-500 mb-3">
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            {post.excerpt && (
              <p className="text-slate-600 mb-4">{post.excerpt}</p>
            )}
            <div className="flex gap-2 flex-wrap mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-slate-100 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <Link 
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline text-sm"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-slate-600 py-12">
          No blog posts yet. Check back soon!
        </p>
      )}
    </div>
  );
}
