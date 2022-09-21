<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    function create(Request $req)
    {
        $post = new Post;
        $post->title = $req->input('title');
        $post->postText = $req->input('postText');
        $post->username = $req->input('username');
        $post->save();
        return $post;
    }
}
