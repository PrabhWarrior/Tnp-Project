import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useNavigate,Link } from "react-router-dom";


function Home() {
    let navigate = useNavigate();
    const [listOfPosts, setListOfPosts] = useState([]);
    useEffect(() => {
        (async function () {
            let result = await fetch("http://localhost:8000/api/post");
            result = await result.json();
            setListOfPosts(result)
            console.warn(result);
        })();
    }, []);
    async function deletePost(id) {
        let deletepost = await fetch("http://localhost:8000/api/delete/" + id, {
            method: 'DELETE'
        });

        deletepost = await deletepost.json();
        console.warn(deletepost);

        let result = await fetch("http://localhost:8000/api/post");
        result = await result.json();
        setListOfPosts(result)
    }
    return (
        <div className="App flex items-center pt-12 flex-col-reverse">
            {listOfPosts.map((value) =>

                <div className="Post bg-slate-300 md:w-[46rem] sm:w-[22rem] shadow-sm hover:shadow-lg mx-8 rounded-xl px-4 flex-col flex justify-between items-center hover:cursor-pointer mt-12"
                    >
                    <div className=" title  text-white rounded-b-xl md:mx-[22rem] px-28  bg-slate-800 items-center mb-2 md:text-base text-semi-bold text-sm">{value.title}</div>
                    <div className=" body m-0 p-0 grid">{value.postText}</div>
                    <div className=" footer flex items-center  md:px-8 px-2 text-white bg-slate-800 rounded-xl mt-1  md:text-base text-semi-bold text-sm">{value.username}</div>
                    <div className="flex justify-end my-2"> 
                    <Link to={"edit/"+value.post_id} >
                    <button className="bg-green-700 text-white text-sm px-2 mx-12 py-0.5 rounded-xl active:bg-green-800" >Update</button>
                    </Link>
                    <button className="bg-slate-700 text-white text-sm px-2 mx-12 py-0.5 rounded-xl active:bg-slate-800" onClick={() => { navigate(`/post/${value.post_id}`)}}>Show Post</button>
                    <button className="bg-red-700 text-white text-sm px-2 mx-12 py-0.5 rounded-xl active:bg-red-800" onClick={() => { deletePost(value.post_id) }} >Delete</button>
                    </div>
                    </div>
                // return <div>{value.postText}</div>
            )}
        </div>
    )
}

export default Home;