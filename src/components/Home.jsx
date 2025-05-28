import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { ReactTyped, } from "react-typed";
import pic from "/captivating.jpg"
function Home() {

    return (
        <>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row '>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1' >
            <span className='text-xl'>Welcome to my Feed</span>
           <div className='flex space-x-1 text-2xl md:text-3xl '>
           <h1>Hello,I'm a</h1>
           {/* <span style={{ color: 'red', fontWeight: 'bold' }}>Developer</span> */}
           <ReactTyped
           className='text-red-700 '
          strings={["BackendDeveloper", "Programmer", "Software Engineer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
           {/* <span className='text-red-700 font-bold'>Developer</span> */}
           </div>
           <br/>
            <p className='text-sm md:text-md text-justify'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                  essentially unchanged. 
            </p>
            <br/>
            {/* social media icons */}
            <div className='flex flex-col items-center md:flex-row justify-between space-y-0'>
                <div className=' space-y-2'>
                <h1 className='font-bold '>Available on</h1>
                <ul className='flex space-x-5'>
                    <li>
                    <a href='https://www.linkedin.com/in/miriam-rehema-69678a296/'target='_blank'>
                    <FaLinkedin className='text-2xl cursor pointer'/>
                    </a>
                    </li>
                </ul>
                </div>
                <div className='space-y-2'>
                <h1 className='font-bold'>Currently working on</h1>
                <div className='flex space-x-5'>
                <FaReact className='text-xl md:text 3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                <FaNodeJs className='text-xl md:text 3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <IoLogoJavascript className='text-xl md:text 3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <FaPython  className='text-xl md:text 3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                <DiDjango className='text-xl md:text 3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                </div>
            </div>    
            </div>
            </div>
            <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
            <img src={pic}className= "rounded-full  md:w-[450px] "alt=''/>
            </div>

            </div>
            
        </div>
        <br/>
        

        </>
        
    
        
    );
}
export default Home;