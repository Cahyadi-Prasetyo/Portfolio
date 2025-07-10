@include('partials.navbar')
<section id="articles" class="py-20 bg-slate-900/50">
    <div class="container">
        <h2 class="text-4xl font-bold text-center mb-8">Articles</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @foreach($articles as $article)
            <div class="glass-card p-6 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all h-full flex flex-col">
                @if($article->image)
                <div class="h-40 mb-4 overflow-hidden rounded-lg">
                    <img src="{{ Storage::url($article->image) }}" alt="{{ $article->title }}" class="w-full h-full object-cover">
                </div>
                @endif
                <h3 class="text-xl font-bold mb-2">{{ $article->title }}</h3>
                <p class="text-sm text-slate-300 mb-4 flex-grow">{{ $article->short_description }}</p>
                <div class="flex items-center text-sm text-slate-400 mb-3">
                    <i class="far fa-calendar-alt mr-2"></i>
                    <span>{{ $article->date->format('F j, Y') }} at {{ $article->publish_time }}</span>
                </div>
                <a href="{{ route('show', $article->slug) }}" class="mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors w-full text-center">
                    Read More
                </a>
            </div>
            @endforeach
        </div>

        {{-- Tombol View All Articles --}}
        @if(count($articles) > 1)
        <div class="text-center mt-12">
            <button onclick="showAllArticles()" class="inline-flex items-center px-6 py-3 border border-slate-600 text-white rounded-full font-medium hover:bg-slate-800 transition-colors">
                View All Articles
                <i class="fas fa-arrow-right ml-2"></i>
            </button>
        </div>
        @endif
    </div>
</section>

<!-- All Articles Modal -->
@if(count($articles) > 1)
<div id="allArticlesModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 ease-out">
    <div class="bg-slate-800/80 border border-slate-700/50 rounded-xl w-full mx-4 transform scale-95 transition-all duration-300 ease-out flex flex-col"
         style="max-width: 90vw; max-height: 90vh;">
        <div class="flex justify-between items-center py-4 px-6 border-b border-slate-700/50 sticky top-0 bg-slate-800/80 z-10">
            <h3 class="text-2xl font-bold">All Articles ({{ count($articles) }})</h3>
            <button onclick="closeModal('allArticlesModal')"
                    class="text-slate-400 hover:text-white transition-colors text-2xl">
                &times;
            </button>
        </div>

        <div class="px-6 pb-6 overflow-y-auto flex-1 custom-scroll">
            <div class="space-y-8 py-4">
                @foreach($articles as $article)
                <div class="glass-card p-6 rounded-lg border border-slate-700/50">
                    <h2 class="text-2xl font-bold mb-4">{{ $article->title }}</h2>
                    
                    @if($article->image)
                    <div class="w-full h-64 rounded-lg overflow-hidden mb-4">
                        <img src="{{ Storage::url($article->image) }}" alt="{{ $article->title }}" class="w-full h-full object-cover">
                    </div>
                    @endif
                    
                    <div class="flex items-center text-sm text-slate-400 mb-4">
                        <i class="far fa-calendar-alt mr-2"></i>
                        <span>{{ $article->date->format('F j, Y') }} at {{ $article->publish_time }}</span>
                    </div>
                    
                    <div class="prose prose-invert max-w-none">
                        {!! $article->long_description !!}
                    </div>
                    
                    <div class="mt-6">
                        <a href="{{ route('articles.show', $article->slug) }}" class="text-blue-400 hover:text-blue-300 flex items-center">
                            <i class="fas fa-external-link-alt mr-2"></i> View Full Page
                        </a>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
        
        <div class="h-2 bg-slate-900/50 relative">
            <div class="h-full bg-blue-500/30 absolute top-0 left-0 transition-all duration-300"
                 id="articlesScrollIndicator"></div>
        </div>
    </div>
</div>
@endif

@include('partials.footer')

<style>
    .glass-card {
        backdrop-filter: blur(10px);
        background-color: rgba(15, 23, 42, 0.5);
    }
    
    .prose-invert {
        color: #e2e8f0;
    }
    
    .prose-invert h2, 
    .prose-invert h3 {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }
    
    .prose-invert p {
        margin-bottom: 1rem;
        line-height: 1.7;
    }
    
    .custom-scroll::-webkit-scrollbar {
        width: 8px;
    }
    
    .custom-scroll::-webkit-scrollbar-track {
        background: #1e293b;
    }
    
    .custom-scroll::-webkit-scrollbar-thumb {
        background: #475569;
        border-radius: 4px;
    }
    
    .custom-scroll::-webkit-scrollbar-thumb:hover {
        background: #64748b;
    }
</style>

<script>
    // Function to show all articles
    @if(count($articles) > 1)
    function showAllArticles() {
        const modal = document.getElementById('allArticlesModal');
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        modal.querySelector('.transform').classList.remove('scale-95');
        modal.querySelector('.transform').classList.add('scale-100');
        document.body.style.overflow = 'hidden';
        
        // Initialize scroll indicator
        updateScrollIndicator();
    }
    
    function updateScrollIndicator() {
        const container = document.querySelector('#allArticlesModal .custom-scroll');
        const indicator = document.getElementById('articlesScrollIndicator');
        
        if (container && indicator) {
            const updateIndicator = () => {
                const scrollPercentage = (container.scrollTop / (container.scrollHeight - container.clientHeight)) * 100;
                indicator.style.width = `${scrollPercentage}%`;
            };
            
            // Set initial state
            updateIndicator();
            
            // Update on scroll
            container.addEventListener('scroll', updateIndicator);
        }
    }
    @endif
    
    // Function to close modal
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.querySelector('.transform').classList.remove('scale-100');
        modal.querySelector('.transform').classList.add('scale-95');
        document.body.style.overflow = 'auto';
    }
    
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.id === 'allArticlesModal') {
            closeModal('allArticlesModal');
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal('allArticlesModal');
        }
    });
</script>