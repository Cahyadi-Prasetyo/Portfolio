<script lang="ts">
  import { onMount } from 'svelte';
  
  let visible = false;

  onMount(() => {
    setTimeout(() => visible = true, 100);
  });
</script>

<main class="min-h-screen bg-slate-50 flex items-center justify-center font-sans text-slate-800">
  <div 
    class="text-center p-8 bg-white border border-slate-200 rounded-2xl shadow-xl max-w-md transition-all duration-700 transform"
    class:opacity-0={!visible}
    class:translate-y-4={!visible}
    class:opacity-100={visible}
    class:translate-y-0={visible}
  >
    <h1 class="text-4xl font-bold mb-4 tracking-tight text-slate-900">Svelte Migration.</h1>
    <p class="text-slate-500 mb-6 text-lg">
      System successfully migrated to Svelte + Vite.
      <br>
      Ready for the <strong>Bento Grid</strong> design.
    </p>
    <div class="flex justify-center gap-3">
       <div class="w-3 h-3 rounded-full bg-slate-400 animate-bounce"></div>
       <div class="w-3 h-3 rounded-full bg-slate-400 animate-bounce delay-100"></div>
       <div class="w-3 h-3 rounded-full bg-slate-400 animate-bounce delay-200"></div>
    </div>
  </div>
</main>
