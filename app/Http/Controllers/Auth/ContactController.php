<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Mail\PesanPublik;
use Illuminate\Support\Facades\Mail;
class ContactController extends Controller
{
    public function index()
    {
        return view('contact');
    }

    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email',
            'subject' => 'required|string|max:100',
            'message' => 'required|string|max:1000',
        ]);

        Mail::to('cahyadi.informatics@gmail.com')->send(new PesanPublik($validated));

        return back()->with('success', 'Pesan kamu berhasil dikirim!');
    }
}
