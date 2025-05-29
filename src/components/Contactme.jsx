import React from 'react';

function Contactme() {
    return(
        <>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <h1 className='text-2xl font-bold mb-4'>CONTACT ME</h1>
            <span>Contact me via phone or email by filling this form.</span>
            <div className='flex flex-col items-center justify-center mt-5'>
                <form action=''className='bg- shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-full md:w-1/2'>
                    <h1 className='text-xl font-semibold mb-4'>Send your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700 '>Name</label>
                        <input type='text' id='name' name='name' className='shadow  rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter your name' required/>

                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700 '>Phone Number</label>
                        <input type='integer' id='number' name='number' className='shadow  rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter your phone number' required/>

                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700 '>Email Address</label>
                        <input type='text' id='email' name='email' className='shadow  rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter your email address' required/>

                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700 '>Message</label>
                        <textarea type='text' id='message' name='messgae' className='shadow  rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Write your Message...' required/>

                    </div>
                    <button className='bg-cyan-600 text-white rounded-xl px-8 pt-6 pb-8 mb-4 w-full md:w-1/2 hover:bg-red-600 duration-200'>Send Message</button>


              </form>
            </div>
        </div>
        </>
        
    )
}
export default Contactme;