import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
function CreatePost() {
    const navigate = useNavigate();
    const [title,setTitle]=useState("");
    const [postText,setPostText]=useState("");
    const [username,setUsername]=useState("");
    async function submit()
    {
        let item ={title,postText,username};
        let result = await fetch("http://localhost:8000/api/create-post",{
            method:'POST',
            headers:{
                "Content-Type":"applicaion/json",
                "Accept":"applicaion/json"
            },
            body:JSON.stringify(item)
        });
        result=await result.json();
        console.warn("result",result);
        navigate('/');
    }
    return (
        <div className="w-auto flex justify-center">
            <div className='flex flex-col md:pt-4 pt-2 mt-8 md:mt-10 justify-center border-4 rounded-lg md:w-96 w-80 md:mx-40 '>
                <label className='md:pl-4 pl-4'>Title: </label>
                <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}  className="border-2 border-slate-400 rounded-lg md:p-2 p-1 md:mx-4 mx-4 my-2  " name="title" placeholder="Your Title" />

                <label className='md:pl-4 pl-4'>Post: </label>
                <input type="text" id="postText" value={postText} onChange={(e)=>setPostText(e.target.value)}  className="border-2 border-slate-400 rounded-lg md:p-2 p-1 md:mx-4 mx-4 my-2  " name="postText" placeholder="Your Post" />

                <label className='md:pl-4 pl-4'>Username: </label>
                <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}  className="border-2 border-slate-400 rounded-lg md:p-2 p-1 md:mx-4 mx-4 my-2  " name="username" placeholder="Your Name" />
                <button type='submit' onClick={submit} className="bg-slate-700 md:my-4 my-2 mx-14 md:px-3 md:py-2 p-2  rounded-3xl md:text-base text-sm text-white hover:text-slate-100 hover:bg-slate-800">
                    Create Post
                </button>
            </div>
        </div>
    );

}

export default CreatePost
