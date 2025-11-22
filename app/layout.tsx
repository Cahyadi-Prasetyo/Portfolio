import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cahyadi Prasetyo — Full-Stack Developer",
  description: "Portfolio of Cahyadi Prasetyo, a full-stack developer building exceptional digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>

        {/* Minimal Footer */}
        <footer className="border-t border-slate-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-sm text-slate-500">
                © {new Date().getFullYear()} Cahyadi Prasetyo
              </div>

              {/* Social Links */}
              <div className="flex gap-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="mailto:cahyadi.informatics@gmail.com"
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
