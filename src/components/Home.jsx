import React from 'react';

function Home() {
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row '>
            <div className='md:w-1/2' >
            <span>Welcome to my Feed</span>
           <div className='flex space-x-1 text-2xl md:text-4xl'>
           <h1>Hello,I am a  </h1>
           <span style={{ color: 'red', fontWeight: 'bold' }}>Developer</span>
           {/* <span className='text-red-700 font-bold'>Developer</span> */}
           </div>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                  essentially unchanged. 
            </p>
            </div>
            <div className='md:w-1/2'>Right</div>

            </div>
            
        </div>
    );
}
export default Home;