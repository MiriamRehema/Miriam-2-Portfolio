 import  { useState} from "react";
 import { TiThMenu } from "react-icons/ti";
 import { IoClose } from "react-icons/io5";
 import  {Link}  from "react-scroll";
 function Navbar() {
    const [menu,setMenu]=useState(false);
    const navItems=[
        {id:1,text:"Home"},
        {id:2,text:"About"},
        {id:3,text:"Skills"},
        {id:4,text:"Projects"},
        {id:5,text:"Contact me"}
    ]
   return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-20 shadow-2xl fixed top-0 left-0 right-0 z-10 text-white bg-gray-800 ">
        <div className="flex justify-between items-center h-20">
            <div className="flex space-x-2">
                {/* <img src="" alt="" className="h-8 w-auto"/> */}
                <h1 className="font-semibold text-lg cursor-pointer">
                    Miriam   Rehema
                <p className="text-sm"></p>
                </h1>
            </div>
            <div>
                {/* /*desktop navabar*/ }

                <ul className=" hidden  md:flex space-x-8">
                    {navItems.map(({id,text})=>(
                        <li className= "hover:scale-y-105 duration-200 font-light text-lg cursor-pointer" key={id}>
                        <Link to={text}
                        smoooth={'true'}
                        duration={500}
                        offset={-70}
                        
                        activeClass="active"

                        >{text}</Link>
                        
                        </li>
                    ))}
                </ul>
                <div onClick={()=>setMenu(!menu)}className="md:hidden">
                    {menu?<IoClose  size={24} />:<TiThMenu size={24} />}
                </div>
                
            </div>
        </div>
        {/* mobile navbar */}
        {menu &&(
            <div className="bg-gray-800 ">
                
            <ul className="md:hidden flex flex-col h-screen items-center justify center space-y-3 text-xl">
                {navItems.map(({id,text})=>(
                    <li className="hover:scale-y-105 duration-200 font-semibold cursor-pointer" key={id}
                    >
                        <Link to={text}
                        smoooth={'true'}
                        duration={500}
                        offset={-70}
                        
                        activeClass="active"

                        >{text}</Link>
                    </li>
                ))}
            </ul>

            </div>
            
        )}
      
    </div>
    </>
   );
 }
 export default Navbar;