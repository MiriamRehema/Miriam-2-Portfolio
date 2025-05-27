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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-5'>
                <div className='project_card'>
                <img src={picture}className= "w-[500px] h-[250px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
                
            </div>
            

             <p className='text-sm md:text-md text-justify'>
                <h1>Oakville E learning platform</h1>
                <br/>
                
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  
            </p>
            

            <div className='project_card'>
                <img src={pic}className= "w-[500px] h-[250px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
            </div>
             <p className='text-sm md:text-md text-justify'>
                <h1>Food Ordering App</h1>
                <br/>
                Welcome to the official website of Tasty Dishes! We are delighted to have you here and share our passion for serving delicious and memorable meals.
            </p>
            



            <div className='project_card'>
                <img src={pict}className= "w-[500px] h-[250px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
            </div>
             <p className='text-sm md:text-md text-justify'>
                <h1>Trade App</h1>
                <br/>
                Welcome to Trade! This platform provides a seamless shopping experience with a range of features designed to enhance your shopping journey. Below, you'll find an overview of the key functionalities available.
            </p>

                </div>
            
            
        
        </div>
    )
}
export default Projects;
