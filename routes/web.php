<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\HitsController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\TrackingController;
use App\Actions\Fortify\CreateNewUser;
use App\Http\Controllers\UserController;
/*
 * Api routes
 */
Route::group(['middleware' => 'ajax'], function () {
    Route::post('/search', [SearchController::class, 'search'])
        ->name('search');
});
//Users API
Route::post('/createNewUser', [CreateNewUser::class, 'create'])
    ->name('CreateNewUser');
Route::get('/sendEmailVerification', [UserController::class, 'index'])
    ->name('sendEmailVerification');

//Products API
Route::get('/getTenProductsWithImages', [ProductController::class, 'getTenProductsWithImages'])
    ->name('getTenProductsWithImages');

/*
 * Page routes
 */
Route::get('/', [WelcomeController::class, 'index'])
    ->name('index');

Route::get('/catalog', [CatalogController::class, 'index'])
    ->name('catalog');

Route::get('/information', [InformationController::class, 'index'])
    ->name('information');

Route::get('/hits', [HitsController::class, 'index'])
    ->name('hits');

Route::get('/blog', [BlogController::class, 'index'])
    ->name('blog');

Route::get('/about', [AboutController::class, 'index'])
    ->name('about');

Route::get('/contacts', [ContactsController::class, 'index'])
    ->name('contacts');


Route::get('/tracking', [TrackingController::class, 'index'])
    ->name('tracking');
Route::post('/trackingGet', [TrackingController::class, 'trackingGet'])
    ->name('trackingGet');


Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');


/*
 * Cart routes
 */
Route::get('/checkCartState', [CartController::class, 'checkCartState'])
    ->name('checkCartState');

Route::get('/cart', [CartController::class, 'index'])
    ->name('cart');


/*
 * Test routes
 */
Route::get('/test', [TestController::class, 'index'])->name('test');
Route::get('/all', [TestController::class, 'all'])->name('all');
Route::get('/testSearch', [SearchController::class, 'testSearch'])->name('testSearch');
