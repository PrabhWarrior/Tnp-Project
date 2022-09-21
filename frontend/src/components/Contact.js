import React, { useState } from 'react'

export default function Contact(props) {
    // const {display}=props;
    
    // const handleUpClick = () => {
    //     // console.log("Uppercase was Clicked "+text);
    //     let newText = text.toUpperCase();
    //     setText(newText);
    // }
    const handleDeleteClick = () => {
        // console.log("Delete was Clicked "+text);
        let newText = "";
        setText(newText);
    }
    const handleSubmit = () => {
        // console.log("Delete was Clicked "+text);
        let newText = "";
        setText(newText);
        // window.alert('Submitted');
        
    }
    const handleOnChange = (event) => {

        if (text.length > 199) { setText(text.slice(0, 199)); }
        else { setText(event.target.value); }
        // we are setting our new value as present text --state
        // console.log("On Change");

    }
    const [text, setText] = useState('');
    // text = "hello"; -- wrong way to change the state
    // setText("hello"); -- correct way 
    return (
        <div>
            <div className="pt-20" >
                <label htmlFor="message" className="block mb-2 mx-2 text-gray-800 ">{props.heading} </label>
                <textarea id="message" value={text} onChange={handleOnChange} rows="7" className="block p-2.5 w-full  rounded-lg border" placeholder='Enter your response'></textarea>
                {/* on Chhange handling the state */}
                {/* Limit characters */}
                <div className="md:text-l text-sm px-2 text-blue-900 flex ">
                    <p>Limit: {text.length}/200 characters</p>
                </div>
                <div className="btn flex space-x-3 justify-end">
                    <button className="bg-cyan-700 text-white text-sm  px-4 py-2 rounded-xl active:bg-cyan-800 " onClick={()=>{props.Display(); handleSubmit()}}>Submit</button>

                    {/* <button className="bg-cyan-700 text-white text-sm  px-4 py-2 rounded-xl active:bg-cyan-800 " onClick={handleUpClick}>Upper Case </button> */}

                    <button className="bg-red-700 text-white text-sm px-4 mx-2 py-2 rounded-xl active:bg-red-800 " onClick={handleDeleteClick}>Delete</button>
                </div>
            </div>
            
            <div className="Response pt-8">
                <div className={`md:text-3xl font-bold text-blue-900 flex justify-center ${props.display}`} id="Status">{props.message}</div>                
                {/* <div className="md:text-3xl pt-3 text-blue-900 flex justify-center">
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                </div> */}
                {/* <div className="md:text-xl text-sm pt-2 text-blue-900 flex justify-center">
                    <p>Limit: 200 characters</p>
                </div>   */}
                
            </div>
        {/* <Query display={'hidden'}/> */}
        </div>
    )
}
