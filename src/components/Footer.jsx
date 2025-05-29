import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa"
import { CgMail } from "react-icons/cg";
function Footer() {
    return(
        <>
        <hr />
        <footer className='py-12 0'>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-4  p-4 bg-gray-800 text-white'>
                        <FaLinkedin size={24}/>
                        <CgMail size={28}/>
                        <BsGithub size={24}/>
                        

                    </div>
                    <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                        <p className='text-sm text-gray-500'>
                            &copy; {new Date().getFullYear(2025)} Miriam Rehema. All rights reserved.
                        </p>
                        <p className='text-sm text-gray-500 mt-2'>
                            Built by <span className='text-red-500'>&hearts;</span> MR
                        </p>
                    </div>

                </div>

            </div>
        </footer>
        
        </>
    )
}
export default Footer;