<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    protected $fillable = [
        'name', 'email', 'password','current'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    // Relationships
    public function posts()
    {
        return $this->hasMany('App\Post');
    }

    public function friendSent()
    {
        return $this->hasMany('App\FriendList', 'user_one');
    }

    public function friendReceived()
    {
        return $this->hasMany('App\FriendList', 'user_two');
    }

}
