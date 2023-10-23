<?php

namespace App\Http\Controllers;

use App\Models\Buzz;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Intervention\Image\Facades\Image;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class BuzzController extends Controller
{
    public function index()
    {
        $buzzs = Buzz::latest()->paginate();
        return Inertia::render('Welcome', compact('buzzs'));
    }

    public function subscribe(Request $request)
    {
        try {
            $data = $request->validate([
                'name' => 'required|string|max:255',
                'email' => $request->input('subscribe_radio') == 'yes' ? 'required|email|unique:buzzs,email' : 'nullable|email|unique:buzzs,email',
            ]);

            DB::beginTransaction();
            // dd($data);


            $imagePath = 'app/public/images/ems.png';
            $img = Image::make(storage_path($imagePath));

            $name = explode(' ', $request->input('name'));
            $firstname = ucfirst($name[0]);

            $img->text($firstname, 550, 650, function ($font) {
                $font->file(storage_path('app/public/images/VVDS_LaTruffe-Regular.ttf'));
                $font->size(170);
                $font->color('#DC2851');
                $font->align('center');
                $font->valign('top');
            });

            $modifiedImagePath = 'app/public/images/' . time() . '.png';
            $img->save(storage_path($modifiedImagePath));

            // Upload the modified image to Cloudinary
            $cloudinaryUpload = Cloudinary::upload(storage_path($modifiedImagePath));

            // Now you can store Cloudinary URL and other details in your database
            $cloudinaryUrl = $cloudinaryUpload->getSecurePath();

            $buzz = Buzz::create([
                'name' => $firstname,
                'email' => $request->input('email'),
                'image' => $cloudinaryUrl,
            ]);

            DB::commit();
            // Check if the radio button is checked
            if ($request->input('subscribe_radio') === 'yes') {
                //  return redirect()->away($buzz->image);
            }

            return redirect()->back()->with('message', 'You have been added to buzz successful! 🕺🏻🎉🎊');
        } catch (\Exception $e) {
            dd($e);
            DB::rollback();
            if ($e instanceof \Illuminate\Validation\ValidationException) {
                return redirect()->back()->withErrors($e->errors())->withInput();
            }
            return redirect()->back()->with('message', 'Subscription failed!');
        }
    }
}
