import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// import axios from "axios";

function Post() {
    let {post_id} = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async function () {
            let result = await fetch("http://localhost:8000/api/post/"+{post_id});
            result = await result.json();
            setPosts(result)
            console.warn(result);
        })();
    }, [post_id]);

    return (
        <div className="App flex items-center pt-12 flex-col-reverse">
            {posts.map((value) =>
            
                <div className="Post bg-slate-300 md:w-[46rem] sm:w-[22rem] shadow-sm hover:shadow-lg mx-8 rounded-xl px-4 flex-col flex justify-between items-center hover:cursor-pointer mt-12">
                    <div className=" title  text-white rounded-b-xl md:mx-[22rem] px-28  bg-slate-800 items-center mb-2 md:text-base text-semi-bold text-sm">{value.title}</div>
                    <div className=" body m-0 p-0 grid">{value.postText}</div>
                    <div className=" footer flex items-center  md:px-8 px-2 text-white bg-slate-800 rounded-xl mt-1  md:text-base text-semi-bold text-sm">{value.username}</div>
                </div>
            )}
        </div>
    )
}

export default Post

