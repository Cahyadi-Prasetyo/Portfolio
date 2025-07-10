<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
class ArticlesController extends Controller
{
    public function index(Article $articles)
    {
        $articles = Article::orderBy('date', 'desc')->get();

        return view('articles',compact('articles'));
        
    }

    public function getFullArticle($slug)
    {
        $articles = Article::where('slug', $slug)->firstOrFail();

        return response()->json([
            'title' => $articles->title,
            'long_description' => $articles->long_description
        ]);
    }

    public function show($slug)
    {
        $articles = Article::where('slug', $slug)->firstOrFail();
        return view('show', compact('articles'));
    }
}
