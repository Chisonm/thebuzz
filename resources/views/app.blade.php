<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'EMS') }}</title>
        {{-- site description --}}
        <meta name="description" content="Emeka must shine, you too must shine. Join the buzz, download as wallpaper">
        <meta name="keywords" content="blaqbonez, emeka must shine, album, you too must shine, biggest album of 2023">
        <meta name="author" content="Chocolatecity Music">
        <meta name="robots" content="index, follow">

         <!-- Open Graph Meta Tags for social media sharing -->
        <meta property="og:title" content="Emeka must shine">
        <meta property="og:description" content="blaqbonez, emeka must shine, album, you too must shine">
        <meta property="og:image" content="/public/images/emeka1.png">
        <meta property="og:url" content="https://www.instagram.com/blaqbonez/">
        <meta property="og:type" content="website">

         <!-- Twitter Meta Tags for Twitter Card -->
        <meta name="twitter:card" content="https://twitter.com/BlaqBonez/status/1716411161942344075/photo/1">
        <meta name="twitter:creator" content="@BlaqBonez">
        <meta name="twitter:title" content="EMEKA MUST SHINE ✨">
        <meta name="twitter:description" content="EMEKA MUST SHINE ✨">
        <meta name="twitter:image" content="https://twitter.com/BlaqBonez/status/1716411161942344075/photo/1">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Pacifico&display=swap" rel="stylesheet">

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="public/favicon_io/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="public/favicon_io/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="public/favicon_io/favicon-16x16.png">
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-[#f9fafa]">
        @inertia
    </body>
</html>
