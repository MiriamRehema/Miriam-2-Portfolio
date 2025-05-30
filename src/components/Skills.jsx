import React from 'react';
import html from "/html5.jpg";
import css from "/css3.jpg";
import react from "/react.jpg";
import node from "/nodejs.jpg";
import python from "/python.jpg";
import django from "/django.jpg";
import tailwind from "/tailwind.jpg";
import javascript from "/javascript.jpg";



function Skills() {

    return (
        <>
        <div name='Skills'className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='text-3xl font-bold mb-5 '>
                <h1 className='text-center'>My Skills</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 my-6'>
                <div className='projecttechnology_cards'>
                  <img src={html}  className= "w-[150px] h-[150px] border-[2px] rounded-lg  shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
                  
                </div>
                <div className='projecttechnology_cards'>
                  <img src={css}className= "w-[150px] h-[150px] border-[2px] rounded-lg  shadow-lg  p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
                </div>
                <div className='projecttechnology_cards'>
                  <img src={javascript}className= "w-[150px] h-[150px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
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
        <br/>
        </>
        

    )
}

export default Skills;
      