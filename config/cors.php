<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'login', 'logout', 'register'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:3000')],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Untuk development, di production lebih spesifik

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true, // Penting untuk Sanctum
];
