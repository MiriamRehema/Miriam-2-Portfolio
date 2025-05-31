import React from 'react';


function About() {

 


    return (
     <>
     <div  name='About'className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <h1 className='text-2xl font-bold mb-5 text-center items-center justify-center'>ABOUT ME</h1>
     <p>
        Hello! I'm Miriam Rehema, a passionate software developer with a strong foundation in web development and a keen interest in creating innovative solutions.
        
          I have experience in various programming languages and frameworks, including HTML, CSS, JavaScript, React, Node.js, Python, Django, and Tailwind CSS. My goal is to build user-friendly applications that solve real-world problems and enhance user experiences. I am always eager to learn new technologies and improve my skills to stay at the forefront of the ever-evolving tech landscape.
            
     </p>
         
     <br/>
     <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 my-5 '>
      
         <ul className='list-none'>
      <h1 class= 'font-semibold text-xl'>Education</h1>

        <li>Certificate of Completion at Moringa School</li>
        <li>Certificate in Information Technology at the JKUAT(Main Campus)</li>
        <li>Diploma in Information Technology at JKUAT(Main Campus)</li>
        <li></li>
      </ul>
     
      
      
      <ul className='list-non'>
          <h1 className='font-semibold text-xl'>Achievements </h1>
          <li>Junior Software Developer</li>
          <li>Certificate of completion to Introduction to Cybersecurity</li>
          <li>Certificate of completion of AWS Cloud Practitioner Essentials</li>
          <li></li>
        </ul>

      
         
      
       
      
     </div>
    

     </div>
     
     
     
      
                    
      

     
    <br />
    
     
     
     </>
     
    );
  }
  export default About;