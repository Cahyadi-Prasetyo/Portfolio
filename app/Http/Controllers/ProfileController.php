<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use App\Models\User;

class ProfileController extends Controller
{
    public function update(Request $request)
    {
        // Debugging - check what Auth::user() returns
        // dd(Auth::user(), get_class(Auth::user()));

        /** @var User $user */
        $user = Auth::user();

        if (!$user instanceof User) {
            Log::error('Auth::user() did not return a User instance', ['user' => $user]);
            return redirect()->route('login')->with('error', 'Authentication required');
        }

        $validatedData = $this->validateRequest($request, $user);

        try {
            $this->handleImageUpload($request, $user, $validatedData);
            $this->handlePasswordChange($request, $validatedData);

            // SAFE UPDATE APPROACH
            foreach ($validatedData as $key => $value) {
                if ($value !== null) {
                    $user->{$key} = $value;
                }
            }

            if (!$user->save()) {
                throw new \RuntimeException('Failed to save user');
            }

            return back()->with('success', 'Profile updated successfully!');
        } catch (\Exception $e) {
            Log::error('Profile update failed', [
                'user_id' => $user->id,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return back()->with('error', 'Profile update failed: ' . $e->getMessage());
        }
    }

    protected function validateRequest(Request $request, User $user): array
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users')->ignore($user->id)
            ],
            'images' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'bio_1' => ['required', 'string'],
            'bio_2' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'approach' => ['nullable', 'string', 'max:255'],
            'values' => ['nullable', 'string', 'max:255'],
            'current_password' => ['nullable', 'required_with:new_password'],
            'new_password' => ['nullable', 'min:8', 'different:current_password', 'confirmed'],
        ]);
    }

    protected function handleImageUpload(Request $request, User $user, array &$data): void
    {
        if ($request->hasFile('images')) {
            if ($user->images && Storage::exists('public/' . $user->images)) {
                Storage::delete('public/' . $user->images);
            }
            $data['images'] = $request->file('images')->store('profile-images', 'public');
        }
    }

    protected function handlePasswordChange(Request $request, array &$data): void
    {
        if ($request->filled('current_password')) {
            if (!Hash::check($request->current_password, Auth::user()->password)) {
                throw new \RuntimeException('Current password is incorrect');
            }
            $data['password'] = Hash::make($request->new_password);
        }
    }
}
