@include('partials.navbar')

<section class="py-20 bg-slate-900/50">
    <div class="container max-w-4xl">
        <article class="glass-card p-8 rounded-lg border border-slate-700/50">
            <h1 class="text-3xl font-bold mb-4">{{ $articles->title }}</h1>
            
            <div class="flex items-center text-sm text-slate-400 mb-6">
                <i class="far fa-calendar-alt mr-2"></i>
                <span>Published on {{ $articles->date->format('F j, Y') }} at {{ $articles->publish_time }}</span>
            </div>
            
            @if($articles->image)
            <div class="w-full h-96 rounded-lg overflow-hidden mb-8">
                <img src="{{ Storage::url($articles->image) }}" alt="{{ $articles->title }}" 
                     class="w-full h-full object-cover">
            </div>
            @endif
            
            <div class="border border-gray-200 rounded-lg p-4">
                <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <i class="fas fa-newspaper mr-2 text-primary-500"></i> Full Content
                </h4>
                <div class="prose max-w-none">
                    {!! $articles->long_description !!}
                </div>
            </div>
            
            <div class="mt-8 pt-6 border-t border-slate-700/50">
                <a href="{{ route('articles') }}" class="inline-flex items-center text-blue-400 hover:text-blue-300">
                    <i class="fas fa-arrow-left mr-2"></i> Back to Articles
                </a>
            </div>
        </article>
    </div>
</section>

@include('partials.footer')

<style>
    .glass-card {
        backdrop-filter: blur(10px);
        background-color: rgba(15, 23, 42, 0.5);
    }
    
    .prose-invert {
        color: #e2e8f0;
    }
    
    .prose-invert h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
    
    .prose-invert p {
        margin-bottom: 1.5rem;
        line-height: 1.7;
    }
    
    .prose-invert img {
        border-radius: 0.5rem;
        margin: 1.5rem 0;
    }
</style>