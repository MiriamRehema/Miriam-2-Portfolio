 import React, { useState} from "react";
 import { TiThMenu } from "react-icons/ti";
 import { IoClose } from "react-icons/io5";
 function Navbar() {
    const [menu,setMenu]=useState(false);
   return (
    
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center py-4">
            <div className="flex space-x-2">
                <img src="https://www.codingninjas.com/assets-landing/images/CNLOGO.svg" alt="Coding Ninjas Logo" className="h-8 w-auto"/>
                <hi className="font-semibold text-xl cursor-pointer">
                    Miriam
                <p className="text-sm">Web Developer</p>
                </hi>
            </div>
            <div>
                {/* /*desktop navabar*/ }
                <ul className="hidden md:flex space-x-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Contact me</li>
                    <li>Projects</li>
                </ul>
                <div onClick={()=>setMenu(!menu)}>
                    {menu?<TiThMenu />:<IoClose />}
                </div>
                
            </div>
        </div>
        <div>
            {/* mobile navbar */}
        <ul className="md:hidden">
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Contact me</li>
                    <li>Projects</li>
                </ul>

        </div>
    </div>
    </>
   );
 }
 export default Navbar;