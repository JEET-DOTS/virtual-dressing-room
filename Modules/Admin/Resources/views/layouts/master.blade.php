<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Virtual Dressing Room</title>

    <link rel="icon" sizes="32x32" href="{{asset('fevicon.ico')}}"/>
    <script src="{{ asset('assets/vendor/js/helpers.js') }}"></script>
    <script src="{{ asset('assets/js/config.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/jquery/jquery.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/popper/popper.js') }}"></script>
    <script src="{{ asset('assets/vendor/js/bootstrap.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
    <script src="{{ asset('assets/vendor/js/menu.js') }}"></script>


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('assets/vendor/fonts/boxicons.css') }}" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/core.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/theme-default.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/demo.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}" />




    {{-- Laravel Vite - CSS File --}}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    {{-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script> --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.min.js"></script>

    <link rel="stylesheet" href="{{ asset('en/services/font/gt-haptik/woff.css') }}">
    <link rel="stylesheet" href="{{ asset('en/services/font/man_jacket/woff.css') }}">
    <link rel="stylesheet" href="{{ asset('en/services/font/man_pants/woff.css') }}">
    <link rel="stylesheet" href="{{ asset('en/services/font/man_waistcoat/woff.css') }}">
    <link rel="stylesheet" href="{{ asset('en/services/font/nc-nav/woff.css') }}">

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

        .man_jacket {
            font-family: man_jacket;
            font-size: 100px;
        }

        .error {
            color: red;
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 25px;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .switch .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 3px;
        }

        .switch .slider:before {
            position: absolute;
content: "";
height: 17px;
width: 20px;
left: 4px;
bottom: 4px;
background-color: white;
-webkit-transition: .4s;
transition: .4s;
border-radius: 3px;
        }

        .switch input:checked+.slider {
            background-color: #696cff;
            border-radius: 3px;
        }
        .switch input:checked+.slider:before{
            left: 0px;
        }
        .switch input:focus+.slider {
            box-shadow: 0 0 1px #696cff;
        }

        .switch input:checked+.slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }
    </style>
</head>

<body>
    {{-- <div class="topnav">
        <a class="" href="{{url('/admin')}}">Home</a>
        <a class="<?php if (Route::currentRouteName() == 'categories' || Route::currentRouteName() == 'sub-categories') {
            echo 'active';
        } ?>" href="{{url('/admin/categories')}}">Categories</a>
        <a class="<?php if (Route::currentRouteName() == 'thumb-images') {
            echo 'active';
        } ?>" href="{{url('/admin/thumb-images')}}">Thumb Images</a>
    </div> --}}

    {{-- @include('header.blade.php') --}}


    <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
            <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme" data-bg-class="bg-menu-theme">
                <!-- ! Hide app brand if navbar-full -->
                <div class="app-brand demo">
                    <a href="{{url('admin')}}" class="app-brand-link">
                        <span class="app-brand-logo demo">
                            <img src="{{asset('fevicon.ico')}}" alt="" srcset="">
                        </span>
                        <span class="app-brand-text menu-text fw-bold ms-2">Virtual Dressing Room</span>
                    </a>

                    <a href="javascript:void(0);" onClick="sideBar()"
                        class="layout-menu-toggle menu-link text-large ms-autod-block d-xl-none">
                        <i class="bx bx-chevron-left bx-sm align-middle"></i>
                    </a>
                </div>

                <div class="menu-inner-shadow" style="display: none;"></div>
                <ul class="menu-inner py-1 ps ps--active-y">
                    <li class="menu-item <?php if (Route::currentRouteName() == '' || Route::currentRouteName() == 'dashboard') {
                        echo 'active';
                    } ?>">
                        <a href="{{ url('/admin') }}" class="menu-link">
                            <i class="menu-icon tf-icons bx bx-home-circle"></i>
                            <div>Dashboard</div>
                        </a>
                    </li>
                    <li class="menu-item <?php if (Route::currentRouteName() == 'categories' || Route::currentRouteName() == 'sub-categories') {
                        echo 'active open';
                    } ?>">
                        <a href="javascript:void(0);" class="menu-link menu-toggle">
                            <i class="menu-icon tf-icons bx bx-layout"></i>
                            <div>Categories</div>
                        </a>
                        <ul class="menu-sub">
                            <li class="menu-item ">
                                <a href="{{ url('/admin/categories') }}" class="menu-link">
                                    <div>List</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item <?php if (Route::currentRouteName() == 'thumb-images') {
                        echo 'active open';
                    } ?>">
                        <a href="javascript:void(0);" class="menu-link menu-toggle">
                            <i class="menu-icon tf-icons bx bx-layout"></i>
                            <div>Thumb Images</div>
                        </a>
                        <ul class="menu-sub">
                            <li class="menu-item ">
                                <a href="{{ url('/admin/thumb-images') }}" class="menu-link">
                                    <div>List</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

            </aside>
            <div class="layout-page">
                <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                    <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0  d-xl-none ">
                        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)" onClick="sideBar()">
                            <i class="bx bx-menu bx-sm"></i>
                        </a>
                    </div>
                    <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                        <ul class="navbar-nav flex-row align-items-center ms-auto">
                            <!-- Place this tag where you want the button to render. -->
                            <li class="nav-item lh-1 me-3">
                                <a class="github-button" href="javascript:void(0)">{{auth()->user()->name}}</a>
                            </li>
                            <!-- User -->
                            <li class="nav-item navbar-dropdown dropdown-user dropdown">
                                <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <div class="avatar avatar-online">
                                        <img src="{{ asset('assets/img/avatars/1.png') }}" alt=""
                                            class="w-px-40 h-auto rounded-circle">
                                    </div>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 me-3">
                                                    <div class="avatar avatar-online">
                                                        <img src="{{ asset('assets/img/avatars/1.png') }}"
                                                            alt="" class="w-px-40 h-auto rounded-circle">
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <span class="fw-semibold d-block">{{auth()->user()->name}}</span>
                                                    <small class="text-muted">{{auth()->user()->role}}</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div class="dropdown-divider"></div>
                                    </li>
                                    {{-- <li>
                                        <a class="dropdown-item" href="javascript:void(0);">
                                            <i class="bx bx-user me-2"></i>
                                            <span class="align-middle">My Profile</span>
                                        </a>
                                    </li> --}}
                                    <li>
                                        <div class="dropdown-divider"></div>
                                    </li>
                                    <li>
                                        <form method="POST" action="{{ route('logout') }}">
                                            @csrf
                                            <x-dropdown-link :href="route('logout')"
                                                    class="dropdown-item"
                                                    onclick="event.preventDefault();
                                                                this.closest('form').submit();">
                                                {{ __('Log Out') }}
                                            </x-dropdown-link>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                            <!--/ User -->
                        </ul>
                    </div>
                </nav>
                <div class="content-wrapper">
                    @yield('content')
                </div>
            </div>
        </div>
    </div>
</body>
@yield('script')
<script>
    $('#submit-thumb-form').validate();
    $(".menu-item").click(function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }
    })
    function sideBar() {
        if ($("html").hasClass('layout-menu-expanded')) {
            $("html").removeClass('layout-menu-expanded');
        } else {
            $("html").addClass('layout-menu-expanded');
        }
    }
</script>

</html>
