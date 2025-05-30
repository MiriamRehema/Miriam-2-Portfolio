import React from 'react';
import pic from '/dishesproject.jpg';
import picture from '/learning platform.jpg';
import pict from '/Tradeproject.jpg';


function Projects() {
    return (
        <>
        <div name='Projects'className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            
            <div>
                <h1 className='text-2xl font-bold mb-5 text-center'>MY PROJECTS</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 my-10'>

                {/* 1st image */}
                <div className='project_card'>
                <img src={picture}className= "w-[500px] h-[250px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
                </div>

                <div>
                     <h1 className='text-2xl font-bold mb-2'>Oakville E learning platform</h1>
                 <p className='text-sm md:text-md text-justify'>
                Welcome to the Oakville learning platform that provides a seamless educational experience with a range of features designed to enhance your learning journey. 
                As well as different courses and programs that you can choose from.
                 </p>

                </div>
               
            
            {/* second image */}
            <div>
                <h1 className='text-2xl font-bold mb-2'>Food Ordering App</h1>
             <p className='text-sm md:text-md text-justify'>
                Welcome to the official website of Tasty Dishes! We are delighted to have you here and share our passion for serving delicious and memorable meals.
                Our platform provides a seamless food ordering experience with a range of features designed to enhance your culinary journey.
            </p>

            </div>
            <div className='project_card'>
                <img src={pic}className= "w-[500px] h-[250px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
            </div>

            


            {/* third image */}
            <div className='project_card'>
                <img src={pict}className= "w-[500px] h-[250px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
            </div>

             <div>
                <h1 className='text-2xl font-bold mb-2'>Trade App</h1>
             <p className='text-sm md:text-md text-justify'>
                Welcome to Trade! This platform provides a seamless shopping experience with a range of features designed to enhance your shopping journey. Below, you'll find an overview of the key functionalities available.
            </p>
             </div>

            {/* 4rth image */}
             <div >
                <h1 className='text-2xl font-bold mb-2'>Trade App</h1>
             <p className='text-sm md:text-md text-justify '>
                Welcome to Trade! This platform provides a seamless shopping experience with a range of features designed to enhance your shopping journey. Below, you'll find an overview of the key functionalities available.
            </p>
             </div>
            <div className='project_card'>
                <img src={pict}className= "w-[500px] h-[250px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"alt=''/>
            </div>

            </div>
            
            
        </div>
        <br/>
        </>
        
    )
}
export default Projects;
