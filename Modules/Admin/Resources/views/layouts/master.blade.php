<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Module Admin</title>

    {{-- Laravel Vite - CSS File --}}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
        integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.min.js" integrity="sha512-rstIgDs0xPgmG6RX1Aba4KV5cWJbAMcvRCVmglpam9SoHZiUCyQVDdH2LPlxoHtrv17XWblE/V/PP+Tr04hbtA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        <link rel="stylesheet" href="{{ asset('css/default.css')}}">
        <link rel="stylesheet" href="{{ asset('css/perfect-scrollbar.css')}}">
        <link rel="stylesheet" href="{{ asset('css/style.css')}}">
        <link rel="stylesheet" href="{{ asset('css/personalize.css')}}">
        <link rel="stylesheet" href="{{ asset('en/services/font/gt-haptik/woff.css')}}">
        <link rel="stylesheet" href="{{ asset('en/services/font/man_jacket/woff.css')}}">
        <link rel="stylesheet" href="{{ asset('en/services/font/man_pants/woff.css')}}">
        <link rel="stylesheet" href="{{ asset('en/services/font/man_waistcoat/woff.css')}}">
        <link rel="stylesheet" href="{{ asset('en/services/font/nc-nav/woff.css')}}">

    <style>
        /* Add a black background color to the top navigation */
        .topnav {
            background-color: #333;
            overflow: hidden;
        }

        /* Style the links inside the navigation bar */
        .topnav a {
            float: left;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
        }

        /* Change the color of links on hover */
        .topnav a:hover {
            background-color: #ddd;
            color: black;
        }

        /* Add a color to the active/current link */
        .topnav a.active {
            background-color: #04AA6D;
            color: white;
        }
        .man_jacket{
            font-family: man_jacket;
            font-size: 100px;
        }

        .error{
            color: red;
        }

    </style>
</head>
<body>
    <div class="topnav">
        <a class="" href="{{url('/admin')}}">Home</a>
        <a class="<?php if(Route::currentRouteName() == "categories" || Route::currentRouteName() == "sub-categories"){ echo 'active'; } ?>" href="{{url('/admin/categories')}}">Categories</a>
        <a class="<?php if(Route::currentRouteName() == "thumb-images"){ echo 'active'; } ?>" href="{{url('/admin/thumb-images')}}">Thumb Images</a>
    </div>
    @yield('content')
</body>
@yield('script')
<script>
    $('#submit-thumb-form').validate();
</script>
</html>
