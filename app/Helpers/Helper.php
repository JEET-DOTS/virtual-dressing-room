<?php

namespace App\Helpers;
use Illuminate\Http\Request;
use \App\Models\Category;
class Helper
{
    public static $array = [];

    public static function getBreadCrumb($id){
        $cat =  Category::where("id",$id)->first();
        if($cat){
            if($cat->parent_id){
                self::$array[$cat->id] = $cat->title;
                self::getBreadCrumb($cat->parent_id);
            }else{
                self::$array[$cat->id] = $cat->title;
            }
        }
        $newArray = array_reverse(self::$array,true);
        return $newArray;
    }
}
