import React from 'react';
import html from "../../public/html5.jpg";
import css from "../../public/css3.jpg";
import react from "../../public/react.jpg";
import node from "../../public/nodejs.jpg";
import python from "../../public/python.jpg";
import django from "../../public/django.jpg";
import tailwind from "../../public/tailwind.jpg";
import javascript from "../../public/javascript.jpg";



function Skills() {

    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='text-3xl font-bold mb-5 '>
                <h1 className='text-center'>My Skills</h1>
            </div>
            <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 my-5'>
                <div className='projecttechnology_cards'>
                  <img src={html}className= "w-[150px] h-[150px] border-[2px] rounded-lg shadow-lg  cursor-pointer hover:scale-110 duration-300"alt=''/>
                </div>
                <div className='projecttechnology_cards'>
                  <img src={css}className= "w-[150px] h-[150px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
                </div>
                <div className='projecttechnology_cards'>
                  <img src={javascript}className= "w-[150px] h-[150px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
                </div>
                <div className='projecttechnology_cards'>
                  <img src={node}className= "w-[150px] h-[150px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
                </div>
                <div className='projecttechnology_cards'>
                  <img src={react}className= "w-[150px] h-[150px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
                </div>
                <div className='projecttechnology_cards'>
                  <img src={python}className= "w-[150px] h-[150px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
                </div>
                <div className='projecttechnology_cards'>
                  <img src={django}className= "w-[150px] h-[150px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
                </div>
                <div className='projecttechnology_cards'>
                  <img src={tailwind}className= "w-[150px] h-[150px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
                </div>
                






                            
            </div>
        </div>

    )
}

export default Skills;
      