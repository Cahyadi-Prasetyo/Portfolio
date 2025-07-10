<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Daftar Akun Baru</title>
    @vite(['resources/css/app.css','resources/js/app.js'])
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body class="overflow-hidden">
    <div class="flex h-screen">
        <!-- Bagian Kiri (Gambar) -->
        <div class="hidden md:flex flex-1 bg-[url('/images/my-background.jpg')] bg-cover bg-center relative">
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="relative z-10 flex flex-col justify-center p-16 max-w-xl text-white">
                <h1 class="text-4xl font-bold mb-4">Mulai Perjalanan Anda</h1>
                <p class="text-lg">Daftar akun untuk memulai pengalaman Anda.</p>
            </div>
        </div>

        <!-- Bagian Kanan (Form Registrasi) -->
        <div class="flex-1 flex items-center justify-center p-8 bg-gray-50 overflow-y-auto">
            <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-10">
                <div class="text-center mb-10">
                    <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                        <i class="fas fa-user-plus text-blue-500 text-3xl"></i>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-800">Buat Akun Baru</h2>
                    <p class="text-gray-500 mt-2">Hanya butuh beberapa detik</p>
                </div>

                <!-- Pesan Error Umum -->
                @if ($errors->any())
                    <div class="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                        <div class="flex items-center">
                            <i class="fas fa-exclamation-circle mr-2"></i>
                            <span class="font-medium">Terdapat beberapa masalah dengan input Anda:</span>
                        </div>
                        <ul class="mt-2 list-disc list-inside text-sm">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                <form class="space-y-6" method="post" action="{{ route('register') }}">
                    @csrf
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                        <div class="relative">
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                value="{{ old('name') }}"
                                class="w-full px-4 py-3 border {{ $errors->has('name') ? 'border-red-500' : 'border-gray-300' }} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="Nama Anda"
                                required>
                            <i class="fas fa-user absolute right-3 top-3.5 text-gray-400"></i>
                        </div>
                        @error('name')
                            <p class="mt-1 text-sm text-red-600 flex items-center">
                                <i class="fas fa-exclamation-circle mr-1"></i> {{ $message }}
                            </p>
                        @enderror
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div class="relative">
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value="{{ old('email') }}"
                                class="w-full px-4 py-3 border {{ $errors->has('email') ? 'border-red-500' : 'border-gray-300' }} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="email@contoh.com"
                                required>
                            <i class="fas fa-envelope absolute right-3 top-3.5 text-gray-400"></i>
                        </div>
                        @error('email')
                            <p class="mt-1 text-sm text-red-600 flex items-center">
                                <i class="fas fa-exclamation-circle mr-1"></i> {{ $message }}
                            </p>
                        @enderror
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div class="relative">
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                class="w-full px-4 py-3 border {{ $errors->has('password') ? 'border-red-500' : 'border-gray-300' }} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="Minimal 8 karakter"
                                minlength="8"
                                required>
                            <i class="fas fa-lock absolute right-3 top-3.5 text-gray-400"></i>
                        </div>
                        @error('password')
                            <p class="mt-1 text-sm text-red-600 flex items-center">
                                <i class="fas fa-exclamation-circle mr-1"></i> {{ $message }}
                            </p>
                        @enderror
                    </div>

                    <div>
                        <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
                        <div class="relative">
                            <input 
                                type="password" 
                                id="password_confirmation" 
                                name="password_confirmation"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="Ketik ulang password"
                                required>
                            <i class="fas fa-lock absolute right-3 top-3.5 text-gray-400"></i>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <input type="checkbox" id="terms" name="terms" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                        <label for="terms" class="ml-2 block text-sm text-gray-700">
                            Saya menyetujui syarat dan ketentuan
                        </label>
                    </div>
                    @error('terms')
                        <p class="mt-1 text-sm text-red-600 flex items-center">
                            <i class="fas fa-exclamation-circle mr-1"></i> {{ $message }}
                        </p>
                    @enderror
                    <button type="submit" class="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 shadow-md">
                        Daftar Sekarang
                    </button>

                    <div class="text-center text-sm text-gray-500">
                        Sudah punya akun? 
                        <a href="{{ route('login') }}" class="text-blue-600 hover:underline font-medium">Masuk di sini</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>