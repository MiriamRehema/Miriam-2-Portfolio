import React from 'react';
import {useForm}  from "react-hook-form";
import   axios from 'axios';
import toast from 'react-hot-toast';

function Contactme() {
    const { register, handleSubmit,  formState: { errors } } = useForm();

    
    const onSubmit = async (data) =>{
        const userInfo = {
            name: data.name,
            number: data.number,
            email: data.email,
            message: data.message,
        };
        try {
           await axios.post("https://getform.io/f/aqomkjka",userInfo);
           toast.success ("Your message has been sent successfully!");

        } catch (error) {
            console.log( error);
            toast.error("There was an error sending your message. Please try again later.");
            
        }
    }
         

    return(
        <>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <h1 className='text-2xl font-bold mb-4'>CONTACT ME</h1>
            <span>Contact me via phone or email by filling this form.</span>
            <div className='flex flex-col items-center justify-center mt-5'>
                <form onSubmit={handleSubmit(onSubmit)}
                // {/* action='https://getform.io/f/aqomkjka'
                // method="POST" */}
                 className='bg-black shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-full md:w-1/2'>
                <h1 className='text-xl font-semibold mb-4'>Send your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700 '>Name</label>
                        <input {...register("name", { required: true })}
                        type='text' id='name' name='name' className='shadow  rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter your name' required/>
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700 '>Phone Number</label>
                        <input {...register("number", { required: true })} 
                         type='integer' id='number' name='number' className='shadow  rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter your phone number' required/>
                          {errors.number && <span>This field is required</span>}

                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700 '>Email Address</label>
                        <input {...register("email", { required: true })}
                         type='text' id='email' name='email' className='shadow  rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter your email address' required/>
                         {errors.email && <span>This field is required</span>}

                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700 '>Message</label>
                        <textarea {...register("message", { required: true })} 
                        type='text' id='message' name='message' className='shadow  rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Write your Message...' required/>
                         {errors.message && <span>This field is required</span>}

                    </div>
                    <button type='submit'
                     className='bg-cyan-600 text-white rounded-xl px-8 pt-6 pb-8 mb-4 w-full md:w-1/2 hover:bg-red-600 duration-200'>Send Message</button>


              </form>
            </div>
        </div>
        </>
        
    )
}
export default Contactme;