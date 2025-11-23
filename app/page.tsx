import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DecryptedText from "@/components/DecryptedText";
import Typewriter from "@/components/Typewriter";
import ScrollVelocity from "@/components/ScrollVelocity";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden pt-16">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-20"></div>

                <div className="z-10 text-center px-4">
                    <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl mb-6">
                        <DecryptedText
                            text="YOUR NAME"
                            speed={70}
                            className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                        />
                    </h1>

                    <div className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground h-12">
                        <Typewriter
                            text={["Full Stack Developer", "UI/UX Designer", "Creative Coder"]}
                            speed={100}
                            waitTime={2000}
                            cursorClassName="bg-primary"
                        />
                    </div>
                </div>
            </section>

            {/* Skills Section (Scroll Velocity) */}
            <section className="py-20 bg-muted/30">
                <h2 className="text-center text-2xl font-semibold mb-10 text-muted-foreground">Technologies</h2>
                <ScrollVelocity
                    text="React Next.js TypeScript Tailwind Supabase Framer Motion "
                    className="text-foreground/80"
                />
            </section>

            {/* Placeholder for Projects */}
            <section id="projects" className="py-24 px-4 container mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project Cards will go here */}
                    <div className="h-64 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center text-muted-foreground">
                        Project Card Placeholder
                    </div>
                    <div className="h-64 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center text-muted-foreground">
                        Project Card Placeholder
                    </div>
                    <div className="h-64 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center text-muted-foreground">
                        Project Card Placeholder
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
