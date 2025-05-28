import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { ReactTyped, } from "react-typed";
//import pic from "/captivating.jpg"

import { TbBrandJavascript } from "react-icons/tb";
function Skills() {

    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='text-3xl font-bold mb-5 '>
                <h1 className='text-center'>My Skills</h1>
            </div>
            <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 my-5'>
                            <TbBrandJavascript className='' /> 
                            <FaNodeJs className='' />
                            <IoLogoJavascript className='' />
                            <FaPython  className=''/>
                            <DiDjango className=''/>
                            </div>
            </div>

    )
}

export default Skills;
      