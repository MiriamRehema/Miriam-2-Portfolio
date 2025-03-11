 import React, { useState} from "react";
 import { TiThMenu } from "react-icons/ti";
 import { IoClose } from "react-icons/io5";
 function Navbar() {
    const [menu,setMenu]=useState(false);
    const navItems=[
        {id:1,text:"Home"},
        {id:2,text:"About"},
        {id:3,text:"Experience"},
        {id:4,text:"Projects"},
        {id:5,text:"Contact me"}
    ]
   return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md  bg-white">
        <div className="flex justify-between items-center h-16">
            <div className="flex space-x-2">
                <img src="https://www.codingninjas.com/assets-landing/images/CNLOGO.svg" alt="Coding Ninjas Logo" className="h-8 w-auto"/>
                <h1 className="font-semibold text-xl cursor-pointer">
                    Miriam
                <p className="text-sm">Web Developer</p>
                </h1>
            </div>
            <div>
                {/* /*desktop navabar*/ }

                <ul className="hidden md:flex space-x-4">
                    {navItems.map(({id,text})=>(
                        <li key={id}>{text}</li>
                    ))}
                </ul>
                <div onClick={()=>setMenu(!menu)}>
                    {menu?<IoClose  size={24} />:<TiThMenu size={24} />}
                </div>
                
            </div>
        </div>
        {/* mobile navbar */}
        {menu &&(
            <ul className="md:hidden flex flex-col h-screen items-center justify center space-y-4">
                {navItems.map(({id,text})=>(
                    <li key={id}>{text}</li>
                ))}
            </ul>
        )}
      
    </div>
    </>
   );
 }
 export default Navbar;