import React from 'react'
import pic from "./Logo.png";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className="navbar flex justify-between items-center dark:bg-slate-800 ">
            <div className="logo p-2 w-12 md:hidden">
                <Link to="/"><img src={pic} alt=""/></Link>
            </div>
            <div className="flex">
                <img className="logo p-2 w-14 hidden md:block" src={pic} alt="" />
                <span className="logo-text pt-4 px-1 font-semibold font-mono text-white hidden md:block">{props.title}</span>

            </div>
            <div className="logo-text align-content:center font-semibold font-mono text-white md:hidden">{props.title}</div>
            <div className="items hidden md:block">
                <ul className="flex space-x-3 text-white px-4 font-mono">
                    <button><li className="cursor-pointer hover:text-blue-100 hover:underline"><Link to="/about">About</Link></li></button>
                    <button><li className="cursor-pointer hover:text-blue-100 hover:underline"><Link to="/contact">Contact Us</Link></li></button>
                    {/* <button><li className="cursor-pointer hover:text-blue-100 hover:underline">Login</li></button> */}
                    <button><li className="cursor-pointer hover:text-blue-100 hover:underline"><Link to="/create-post">Login</Link></li></button>


                </ul>
            </div>
            <div className="hamburger inline-block px-4 cursor-pointer md:hidden">
                <div className="line h-[0.15rem] w-6 my-1 bg-white"></div>
                <div className="line h-[0.15rem] w-6 my-1 bg-white"></div>
                <div className="line h-[0.15rem] w-6 my-1 bg-white"></div>
            </div>

        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string
    // title2 : PropTypes.string.isRequired // make sure it's not undefined
}
Navbar.defaultProps = {
    title: 'Title ',
    // title2 : 'Title 2'
}