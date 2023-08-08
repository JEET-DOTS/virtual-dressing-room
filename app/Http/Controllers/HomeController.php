<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;
use App\Models\{Category,ThumbImage};
use Illuminate\Support\Facades\File;
class HomeController
{
    function index(){
        $main = Category::where("title","Fabric")->first();
        $sub  =  Category::where("parent_id",$main->id)->get();
        $thumbImage = ThumbImage::first();
        return view('dashboard',compact("sub","thumbImage"));
    }

    function getStyle($id){
        $sub  =  Category::with("getSubCategories")->where("parent_id",$id)->get();
        return response()->json($sub,200);
    }

    function getButtons(Request $request){
        $style = explode(' ',$request->button);
        if(count($style) > 2){
            $sub  =  Category::where('parent_id',$request->ButtonStyle)->where("title",'LIKE','%'.$style[1].'%')->first();
            if($sub){
                return response()->json($sub,200);
            }else{
                return response()->json("null",200);
            }
        }else{
            return response()->json("null",200);
        }

    }

    function getLapelMedium(Request $request){
        $lapelMedium  =  Category::where('parent_id',$request->id)->where("title",'images')->first();
        if($lapelMedium){
            $lapelMediumImages  =  Category::where('parent_id',$lapelMedium->id)->where("title",'LIKE','%'.$request->lapelMedium.'%')->first();
            return response()->json($lapelMediumImages,200);
        }else{
            return response()->json('',200);
        }
    }

    function getColor($id){
        $thumbImage = ThumbImage::where('category_id',$id)->first();
        return response()->json($thumbImage,200);
    }


    function getLapelWidth(Request $request){
        $lapelWidth  =  Category::where('parent_id',$request->id)->where("title",'images')->first();
        if($lapelWidth){
            $lapelWidthImages  =  Category::where('parent_id',$lapelWidth->id)->where("title",$request->lapelMedium)->first();
            return response()->json($lapelWidthImages,200);
        }else{
            return response()->json('',200);
        }
    }

    function getData(Request $request){
        try {
            $Style  = $request->Style;
            $JacketLapels  = $request->JacketLapels;
            $LapelWidth  = $request->LapelWidth;
            $PocketStyle  = $request->PocketStyle;
            $ShinyLapels  = $request->ShinyLapels;
            $DetachablePaddedGilet  = $request->DetachablePaddedGilet;
            $Buttons  = $request->Buttons;

            // $BackStyle  = $request->BackStyle;
            // $Pleats  = $request->Pleats;
            // $PantCuffs  = $request->PantCuffs;
            // $Vest  = $request->Vest;
            // $ShinyLapels  = $request->ShinyLapels;
            // $DetachablePaddedGilet  = $request->DetachablePaddedGilet;

        } catch (\Throwable $th) {
            dd($th);
        }
    }



}
