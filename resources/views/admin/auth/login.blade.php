<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Admin </title>
    @vite(['resources/css/app.css','resources/js/app.js'])
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body class="overflow-hidden">
    <div class="flex h-screen">
        <!-- Bagian Kiri (Gambar) -->
        <div class="hidden md:flex flex-1 bg-cover bg-center relative" style="background-image: url('{{ asset('images/my-background.jpg') }}')">
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="relative z-10 flex flex-col justify-center p-16 max-w-xl text-white">
                
            </div>
        </div>

        <!-- Bagian Kanan (Form Login) -->
        <div class="flex-1 flex items-center justify-center p-8 bg-gray-50">
            <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-10">
                <div class="text-center mb-10">
                    <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                        <i class="fas fa-user-lock text-blue-500 text-3xl"></i>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-800">Masuk ke Akun</h2>
                    <p class="text-gray-500 mt-2">Silakan masuk untuk melanjutkan</p>
                </div>

                <form method="POST" action="{{ route('login') }}" class="space-y-6">
                    @csrf
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div class="relative">
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="email@contoh.com"
                                required>
                            <i class="fas fa-envelope absolute right-3 top-3.5 text-gray-400"></i>
                        </div>
                    </div>
                
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div class="relative">
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="••••••••"
                                required>
                            <i class="fas fa-lock absolute right-3 top-3.5 text-gray-400"></i>
                        </div>
                    </div>
                
                    <button type="submit" class="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 shadow-md">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
