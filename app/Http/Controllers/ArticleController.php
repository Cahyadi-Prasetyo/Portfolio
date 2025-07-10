<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::latest()->paginate(10);
        return view('admin.article', compact('articles'),[
            'title' => 'Article'
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'date' => 'required|date',
            'publish_time' => 'required',
            'short_description' => 'required|string',
            'long_description' => 'required|string',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('articles', 'public');
        }

        Article::create($validated);

        return redirect()->route('admin.articles.index')->with('toast', [
            'type' => 'success',
            'message' => 'Article created successfully!',
            'icon' => 'fas fa-check-circle'
        ]);
    }

    public function update(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'date' => 'required|date',
            'publish_time' => 'required',
            'short_description' => 'required|string',
            'long_description' => 'required|string',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($article->image && Storage::disk('public')->exists($article->image)) {
                Storage::disk('public')->delete($article->image);
            }
            $validated['image'] = $request->file('image')->store('articles', 'public');
        }

        $article->update($validated);

        return redirect()->route('admin.articles.index')->with('toast', [
            'type' => 'success',
            'message' => 'Article updated successfully!',
            'icon' => 'fas fa-check-circle'
        ]);
    }

    public function destroy(Article $article)
    {
        // Delete image if exists
        if ($article->image && Storage::disk('public')->exists($article->image)) {
            Storage::disk('public')->delete($article->image);
        }

        $article->delete();

        return redirect()->route('admin.articles.index')->with('toast', [
            'type' => 'success',
            'message' => 'Article deleted successfully!',
            'icon' => 'fas fa-check-circle'
        ]);
    }
}
