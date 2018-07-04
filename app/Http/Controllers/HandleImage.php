<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Image;

class HandleImage extends Controller
{
    public function enText(Request $request)
    {
        $data = $request->all();
        $nameFile = uniqid(time(), true) . $data['image']->getClientOriginalExtension();
        $originalName = $data['image']->getClientOriginalName();
        $request->file('image')->storeAs(storage_path() . '/images', $nameFile);

        $result = Image::create([
            'name' => $originalName,
            'url' => $nameFile,
            'text' => $data['text'],
        ]);

        return json_encode($result);
    }
}
