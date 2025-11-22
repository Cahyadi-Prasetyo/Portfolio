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
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <div className="flex gap-6">
              <Link href="/admin" className="text-sm hover:text-blue-600">
                Dashboard
              </Link>
              <Link href="/admin/projects" className="text-sm hover:text-blue-600">
                Projects
              </Link>
              <Link href="/admin/blog" className="text-sm hover:text-blue-600">
                Blog
              </Link>
              <Link href="/admin/contacts" className="text-sm hover:text-blue-600">
                Contacts
              </Link>
              <form action="/api/auth/signout" method="post">
                <button type="submit" className="text-sm text-red-600 hover:underline">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
