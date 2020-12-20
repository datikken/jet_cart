<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class CreateNewUser
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $pass = $request->password;
        $type = $request->type;

        $state = $request->validateWithBag('createNewUser', [
            'name' => 'required',
            'email' => ['required', 'max:50', 'email', Rule::unique('users')],
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6',
            'policy_confirm' => 'accepted'
        ]);

        if($state) {
            User::create([
                'name' => $name,
                'email' => $email,
                'password' => Hash::make($pass),
                'face' => $type
            ]);

            return Inertia::render('Dashboard');
        } else {
            return response()->json('this form got errors');
        }
    }

    public function validateOnPress(Request $request)
    {

    }
}
