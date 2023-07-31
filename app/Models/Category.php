<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function getParentCategories()
    {
       return $this->hasOne(\App\Models\Category::class,'id','parent_id');
    }
}
