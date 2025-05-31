import React from 'react';
import html from "/html5.jpg";
import css from "/css3.jpg";
import react from "/react.jpg";
import nodejs from "/nodejs.jpg";
import python from "/python.jpg";
import django from "/django.jpg";
import tailwind from "/tailwind.jpg";
import javascript from "/javascript.jpg";




function Skills() {


  const cardItems=[
        {id:1,name:"Html",logo: html},
        {id:2,name:"CSS",logo:css},
        {id:3,name:"React",logo:react},
        {id:4,name:"Nodejs",logo:nodejs},
        {id:5,name:"Javascript",logo:javascript},
        {id:5,name:"Python",logo:python},
        {id:5,name:"Django",logo:django},
        {id:5,name:"Tailwind",logo:tailwind},
    ]

    return (
        <>
        <div name='Skills'className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='text-3xl font-bold mb-5 '>
                <h1 className='text-center'>My Skills</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-7 my-3'>
              {cardItems.map(({id,name,logo})=>(
                <div className='flex flex-col  items-center justify-center border-black[2px] shadow  rounded-xl md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                   <img src={logo} className="w-[150px] rounded-lg  " alt='' />
                   <div>
                    <div className=' '>{name}</div>
                   </div>
                  
                </div>
              ))}

              
              
              
                






                            
            </div>
        </div>
        <br/>
      
        </>
        

    )
}

export default Skills;
      