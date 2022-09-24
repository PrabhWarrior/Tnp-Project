import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Edit() {
    // let navigate = useNavigate();
    let { post_id } = useParams();
    console.log({ post_id });
    const [post, setPost] = useState([]);
    const [title,setTitle]=useState("");
    const [postText,setPostText]=useState("");
    const [username,setUsername]=useState("");

    useEffect(() => {
        (async function () {
            let result = await fetch("http://localhost:8000/api/post/" + { post_id });
            result = await result.json();
            setPost(result);
            setTitle(result.title);
            setPostText(result.postText);
            setUsername(result.username)
            console.warn(result);
        })();
    }, [post_id]);
    async function editPost()
    {
        const newdata = new FormData();
        newdata.append('title',title)
        newdata.append('postText',postText)
        newdata.append('username',username)
        let result = await fetch("http://localhost:8000/api/edit/"+{ post_id }+"?_method=PUT",{
            method:'POST',
            body:newdata

        });
    }
    return (
        <div className="w-auto flex justify-center">
            
            <div className='flex flex-col md:pt-4 pt-2 mt-8 md:mt-10 justify-center border-4 rounded-lg md:w-96 w-80 md:mx-40 '>
                <label className='md:pl-4 pl-4'>Title: </label>
                <input type="text" id="title" defaultValue={post.title} onChange={(e)=>setTitle(e.target.value)} className="border-2 border-slate-400 rounded-lg md:p-2 p-1 md:mx-4 mx-4 my-2  " name="title" />

                <label className='md:pl-4 pl-4'>Post: </label>
                <input type="text" id="postText" defaultValue={post.postText} onChange={(e)=>setPostText(e.target.value)} className="border-2 border-slate-400 rounded-lg md:p-2 p-1 md:mx-4 mx-4 my-2  " name="postText" />

                <label className='md:pl-4 pl-4'>Username: </label>
                <input type="text" id="username" defaultValue={post.username} onChange={(e)=>setUsername(e.target.value)} className="border-2 border-slate-400 rounded-lg md:p-2 p-1 md:mx-4 mx-4 my-2  " name="username" />
                <button type='submit' onClick={()=>editPost(post.post_id)} className="bg-slate-700 md:my-4 my-2 mx-14 md:px-3 md:py-2 p-2  rounded-3xl md:text-base text-sm text-white hover:text-slate-100 hover:bg-slate-800">
                    Update Post
                </button>
            </div>
        </div>
    )

}

export default Edit