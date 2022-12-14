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

    function listOfPosts()
    {
        // $posts= Post::all();
        // $posts->sortByDesc("post_id");
        return $posts = Post::orderBy('updated_at', 'ASC')->get();

    }

    function deletePost($id)
    {
        $delete= Post::where('post_id',$id)->delete();
        if($delete)
        {
            return ["Post has been deleted"];
        }
        else{
            return ["Post not found"];
        }
    }

    function Post($post_id)
    {
        return $post = Post::where('post_id',$post_id)->get();
    }

    function editPost($post_id,Request $req)
    {
        $post = Post::find($post_id);
        $post->title = $req->input('title');
        $post->postText = $req->input('postText');
        $post->username = $req->input('username');
        $post->save();
        return $post;
    }
}
