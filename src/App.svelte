<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./components/Card.svelte";

  let visible = false;

  onMount(() => {
    setTimeout(() => (visible = true), 100);
  });
</script>

<main class="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
  <div class="max-w-7xl mx-auto">
    <!-- Intro / Status -->
    <div
      class="mb-12 text-center transition-all duration-700 transform"
      class:opacity-0={!visible}
      class:translate-y-4={!visible}
      class:opacity-100={visible}
      class:translate-y-0={visible}
    >
      <h1
        class="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900"
      >
        Professional Portfolio
      </h1>
      <p class="text-slate-500 text-lg">
        Clean. Structured. Professional. <span class="text-blue-500 font-medium"
          >Bento Grid System</span
        >.
      </p>
    </div>

    <!-- The Bento Grid -->
    <div
      class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[600px] transition-all duration-700 delay-300 transform"
      class:opacity-0={!visible}
      class:translate-y-8={!visible}
      class:opacity-100={visible}
      class:translate-y-0={visible}
    >
      <!-- 1. Hero / Profile Card (Large) -->
      <Card
        colSpan="md:col-span-2"
        rowSpan="md:row-span-2"
        className="justify-between bg-white"
      >
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="relative">
              <div
                class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-4xl border-2 border-white shadow-sm overflow-hidden"
              >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  alt="Avatar"
                  class="w-full h-full"
                />
              </div>
              <div
                class="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center"
                title="Available for work"
              >
                <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h2 class="text-3xl font-bold text-slate-900 leading-tight">
                Cahyadi Prasetyo
              </h2>
              <div
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mt-1"
              >
                <span>🚀</span> Software Engineer
              </div>
            </div>
          </div>

          <p class="text-slate-500 text-lg leading-relaxed">
            I architect and build <span class="text-slate-900 font-semibold"
              >scalable web systems</span
            >. <br />
            Focused on performance, clean code, and intuitive user experiences.
          </p>
        </div>

        <div class="mt-8 flex gap-3">
          <button
            class="flex-1 px-5 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2"
          >
            <span class="w-2 h-2 rounded-full bg-green-400"></span>
            Contact Me
          </button>
          <button
            class="px-5 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 hover:border-slate-300 transition-all hover:scale-[1.02] active:scale-95 shadow-sm"
          >
            Download CV
          </button>
        </div>
      </Card>

      <!-- 2. Map / Location -->
      <Card
        colSpan="md:col-span-1"
        rowSpan="md:row-span-1"
        title="Based in"
        className="bg-slate-50 overflow-hidden relative group"
      >
        <div
          class="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity"
        >
          <!-- Simple CSS Pattern representing a map -->
          <div
            class="w-full h-full"
            style="background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px); background-size: 20px 20px;"
          ></div>
        </div>
        <div
          class="relative z-10 flex flex-col items-center justify-center h-full mt-2"
        >
          <div
            class="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-2xl mb-2 animate-bounce"
          >
            📍
          </div>
          <p class="font-bold text-slate-700">Jakarta, Indonesia</p>
          <p class="text-xs text-slate-400 font-mono mt-1">UTC+7</p>
        </div>
      </Card>

      <!-- 3. Socials -->
      <Card
        colSpan="md:col-span-1"
        rowSpan="md:row-span-1"
        title="Socials"
        className="bg-blue-600 text-white border-none"
      >
        <div class="flex flex-col h-full justify-center gap-2">
          <div
            class="text-white/80 hover:text-white cursor-pointer font-medium"
          >
            → GitHub
          </div>
          <div
            class="text-white/80 hover:text-white cursor-pointer font-medium"
          >
            → LinkedIn
          </div>
          <div
            class="text-white/80 hover:text-white cursor-pointer font-medium"
          >
            → Email
          </div>
        </div>
      </Card>

      <!-- 4. Experience / Tech Stack -->
      <Card colSpan="md:col-span-2" rowSpan="md:row-span-1" title="Tech Stack">
        <div class="flex items-center gap-4 text-2xl opacity-60">
          <span>⚛️</span> <span>🔷</span> <span>🐍</span> <span>🐘</span>
          <span>☁️</span>
        </div>
      </Card>

      <!-- 5. Latest Project -->
      <Card
        colSpan="md:col-span-2"
        rowSpan="md:row-span-1"
        title="Featured Work"
        className="bg-slate-900 text-white border-none group"
      >
        <div class="mt-auto">
          <h3 class="text-xl font-bold">E-Commerce Dashboard</h3>
          <p class="text-slate-400 text-sm">Next.js, Supabase, Tailwind</p>
        </div>
        <div
          class="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"
        >
          ↗
        </div>
      </Card>
    </div>
  </div>
</main>
