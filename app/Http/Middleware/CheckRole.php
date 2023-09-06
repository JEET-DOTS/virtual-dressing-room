<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    public function handle(Request $request, Closure $next, ...$guards)
    {
        if(auth()->check()){
            if(auth()->user()->role == 'user'){
                return $next($request);
            }else{
                return redirect('admin');
            }
        }else{
            return redirect('login');
        }
    }
}
