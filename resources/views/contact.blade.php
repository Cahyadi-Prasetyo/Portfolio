@include('partials.navbar')
<section id="contact" class="bg-slate-900/50">
    <div class="container mx-auto px-4 py-16">
        <h2 class="text-4xl font-bold text-white mb-4 text-center reveal">
            Get In <span class="text-gradient">Touch</span>
        </h2>
        <p class="text-slate-400 text-center max-w-2xl mx-auto mb-16 reveal">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="glass-card p-8 rounded-xl reveal">
                <h3 class="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                @if (session('success'))
                    <div class="p-4 bg-green-500 text-white rounded">{{ session('success') }}</div>
                @endif

                @if ($errors->any())
                    <div class="p-4 bg-red-500 text-white rounded">
                        <ul class="list-disc pl-5">
                            @foreach ($errors->all() as $err)
                                <li>{{ $err }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                <form id="contact-form" class="space-y-6" action="{{ route('contact.send') }}" method="POST">
                    @csrf
                    <div>
                        <label for="name" class="block text-slate-300 mb-2">Name</label>
                        <input type="text" id="name" name="name" required
                            class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white">
                    </div>
                    <div>
                        <label for="email" class="block text-slate-300 mb-2">Email</label>
                        <input type="email" id="email" name="email" required
                            class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white">
                    </div>
                    <div>
                        <label for="subjet" class="block text-slate-300 mb-2">Subject</label>
                        <input type="text" id="subject" name="subject" required
                            class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white">
                    </div>
                    <div>
                        <label for="message" class="block text-slate-300 mb-2">Message</label>
                        <textarea id="message" name="message" rows="5" required
                            class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"></textarea>
                    </div>
                    <button type="submit"
                        class="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                        Send Message
                    </button>
                </form>
            </div>

            <div class="relative flex items-center justify-center h-full min-h-[300px]">
                <div id="lanyard-container" data-lanyard-component="true" data-position="[0, 0, 0]"
                    data-gravity="[0, -40, 0]" class="w-full h-full">
                </div>
            </div>
        </div>
    </div>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
</section>
@include('partials.footer')
