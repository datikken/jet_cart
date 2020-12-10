<?php


namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class CreateNewUser implements CreatesNewUsers
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

        $state = $request->validateWithBag('createNewUser', [
            'name' => 'required',
            'email' => ['required', 'max:50', 'email', Rule::unique('users')],
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6',
            'policy_confirm' => 'accepted'
        ]);

        User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($pass)
        ]);

        return Inertia::render('Dashboard');
    }
}
