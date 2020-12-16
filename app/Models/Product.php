<?php

namespace App\Models;

use App\Traits\FullTextSearch;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    use FullTextSearch;

    protected $fillable = [
        'uuid',
        'photo',
        'name_buh',
        'price',
        'stock',
        'currency_code',
        'params',
        'name_ecom',
        'type',
        'artikul',
        'bro_color',
        'bro_v3',
        'bro_brand',
        'bro_counter_brand',
        'cape',
        'oem',
        'created_at',
        'updated_at'
    ];

    protected $searchable = [
        'uuid',
        'photo',
        'name_buh',
        'price',
        'stock',
        'currency_code',
        'params',
        'name_ecom',
        'type',
        'artikul',
        'bro_color',
        'bro_v3',
        'bro_brand',
        'bro_counter_brand',
        'cape',
        'oem'
    ];

    private static $whiteListFilter = ['*'];

    public function id()
    {
        return $this->id;
    }
    /*
     * Set product image path if it exists
     */
    public function findProductImage() {
        $params = json_decode($this->params);

        $photo = '/' . $this->photo;
        $cat = '/' . $params->brend;

        $smallPath = 'product_images' . $cat . '/SMALL' . $photo . '.png';
        $bigPath = 'product_images' . $cat . '/BIG' . $photo . '.png';

        $smallFiles = file_exists($smallPath);
        $bigFiles = file_exists($smallPath);

        if($smallFiles || $bigFiles) {
            $photosFile = new \stdClass();
            $photosFile->small = $smallPath;

            if($bigPath) {
                $photosFile->big = $bigPath;
            }
        }

        if($smallFiles || $bigFiles) {
            $this->photo = strval(json_encode($photosFile));
            return $this->photo;
        }
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class);
    }
}
