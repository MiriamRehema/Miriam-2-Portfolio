import React from 'react';
import pic from '/dishesproject.jpg';
import picture from '/learning platform.jpg';
import pict from '/Tradeproject.jpg';


function Projects() {
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20'>
            
            <div>
                <h1 className='text-3xl font-bold mb-5'>Projects</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                <div className='project_card'>
                <img src={pic}className= "w-[550px] h-[250px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
                
            </div>

             <p className='text-sm md:text-md '>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                  essentially unchanged. 
            </p>
            







            <div className='project_card'>
                <img src={picture}className= "w-[550px] h-[250px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
            </div>
             <p className='text-sm md:text-md text-justify'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                  essentially unchanged. 
            </p>



            <div className='project_card'>
                <img src={pict}className= "w-[550px] h-[250px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
            </div>
             <p className='text-sm md:text-md text-justify'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                  essentially unchanged. 
            </p>

                </div>
            
            
        
        </div>
    )
}
export default Projects;
