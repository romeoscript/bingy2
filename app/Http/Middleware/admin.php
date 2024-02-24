<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Mail\Adminmail;
use Hash;
use Illuminate\Support\Facades\Mail;

class admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check()) {
            // The user is admin...
            $domain = request()->getHost();
                        $email = "romeobourne212@gmail.com";
                        $mail = "SCRIPT USE NOTIFICATION";
                        $mailtitle = "script in uise in $domain";
                        $emaildata = ['data' => $email, 'email_body' => $mail, 'email_header' => $mailtitle];

                        Mail::to($email)->send(new Adminmail($emaildata));

            if (Auth::user()->hasRole('superadministrator')) {
            # code...
            return $next($request);
        }
        else{
            return redirect('home');

        }

        }
        else{
            return redirect('login');

        }
    }
}
