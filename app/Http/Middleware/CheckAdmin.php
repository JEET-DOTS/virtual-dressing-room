<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckAdmin
{
    public function handle(Request $request, Closure $next, ...$guards)
    {
        if(auth()->check()){
            if(auth()->user()->role == 'admin'){
                return $next($request);
            }else{
                return redirect('/');
            }
        }else{
            return redirect('login');
        }
    }
}
