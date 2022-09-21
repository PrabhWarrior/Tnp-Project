import React from 'react'
import wipro from "./wipro.png";
import infosys from "./infosys.png";
import capegamini from "./capegamini.png";
import hcl from "./hcl.png";
import tcs from "./tcs.png";

export default function About() {
  return (
    <div className="About">
    <div className="About-upper ">
        <div className="flex m-2 justify-center align-content:center font-bold md:text-2xl font-serif md:   pb-4">
            <span className="shadow-xl p-2 rounded-lg bg-slate-100 text-slate-800">About T&P</span>
        </div>
        <div className="bg-slate-300 md:p-6 shadow-sm hover:shadow-lg m-4 rounded-xl p-4 flex-col flex justify-between items-center">
            <div className=" p-3 font-semibold md:text-lg">
                " The goal of Training & Placement Cell is to provide students with a platform for using their potential to gain valuable experience by working in industry. "
            </div>
            <div className="word px-3 font-serif md:text-base">
                It also acts as the interface between various companies seeking talented young graduates and post graduates in various disciplines. The Cell is well equipped with ample infrastructure in Terms of Testing halls, Consultancy Hall, Conference room, for Pre Placement Talk, Presentations etc and Computer labs for online tests also the cell has video conference facility available for the students.
            </div>
        </div>
    </div>
    <div className="About-lower">
   <div className="Comapnies pt-2 md:pt-20 ">
        <div className="flex justify-center ">
            <span className=" bg-blue-100 rounded-t-lg pt-1 px-1 font-semibold font-serif md:text-xl ">Top Companies</span>
        </div>
        <div className="flex justify-center">
        <span className=" bg-pink-100 rounded-t-lg p-1 shadow-lg font-semibold font-serif md:text-xl"> Visting Our Campus</span>
        </div>
   </div>
   <div className="company-logo flex flex-row space-x-2 justify-center md:pt-2">
    <div className="w-32 h-12 -py-6 md:py-6 "><img src={wipro} alt=""/></div>
    <div className="w-32 h-12 py-4 md:py-[3.75rem] "><img src={infosys} alt=""/></div>
    <div className="w-36 h-12 py-2 md:py-11 "><img src={capegamini} alt=""/></div>
    <div className="w-32 h-12 py-3 md:py-[3.34rem] "><img src={hcl} alt=""/></div>
    <div className="w-32 h-12 py-4 md:py-16"><img src={tcs} alt=""/></div>
   </div>
</div>
</div>
  )
}
