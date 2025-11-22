import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            {project.image && (
              <div className="h-48 bg-slate-200">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-slate-600 mb-4">{project.description}</p>
              
              <div className="flex gap-2 flex-wrap mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.demoUrl && (
                  <Link 
                    href={project.demoUrl} 
                    target="_blank"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Live Demo →
                  </Link>
                )}
                {project.githubUrl && (
                  <Link 
                    href={project.githubUrl} 
                    target="_blank"
                    className="text-sm text-slate-600 hover:underline"
                  >
                    GitHub →
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-center text-slate-600 py-12">
          No projects yet. Check back soon!
        </p>
      )}
    </div>
  );
}
