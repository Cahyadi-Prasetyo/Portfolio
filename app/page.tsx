import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const featuredProjects = await prisma.project.findMany({
    where: { published: true, featured: true },
    orderBy: { order: 'asc' },
    take: 3,
  });

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Full Stack Developer | React Enthusiast | Problem Solver
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/projects">
            <Button size="lg">View My Work</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">Get In Touch</Button>
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          I'm a passionate developer with expertise in building modern web applications.
          I love creating elegant solutions to complex problems and continuously learning new technologies.
        </p>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="border rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
