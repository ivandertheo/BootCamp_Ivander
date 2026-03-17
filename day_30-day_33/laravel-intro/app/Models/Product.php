<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;
    protected $table = 'products';
    protected $primaryKey="id";
    protected $fillable = [
        'name',
        'price',
        'stock',
        'category_id'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'price'=>'integer',
        'stock'=>'integer'
    ];
}
