import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { order: 'asc' },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Link href="/admin/projects/new">
          <Button>Add New Project</Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg border">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Featured</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b">
                <td className="p-4">{project.title}</td>
                <td className="p-4">
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.published ? 'bg-green-100 text-green-800' : 'bg-slate-100'
                  }`}>
                    {project.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="p-4">
                  {project.featured ? '⭐' : '-'}
                </td>
                <td className="p-4">
                  <Link href={`/admin/projects/${project.id}`} className="text-blue-600 hover:underline text-sm">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {projects.length === 0 && (
          <p className="text-center py-8 text-slate-600">No projects yet</p>
        )}
      </div>
    </div>
  );
}
