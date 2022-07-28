import React,{useState} from 'react'
import logo from '../images/logo.svg'
import GetStarted from './GetStarted'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'


const Navbar = () => {

    const [open,setOpen]=useState(false)

  return (
    <div className='w-screen h-[80px] header bg-transparent  py-5 items-center flex'>
        <div className='w-4/5 flex mx-auto items-center bg-transparent  justify-between'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        

        <div className={`${open?"open":"close"} bg-transparent flex lg:h-[80px] menu-link lg:flex-row flex-col items-center justify-between w-full`}>
        <ul className='links flex flex-wrap text-gb gap-7 lg:h-full lg:leading-[80px] lg:flex-row flex-col grow  justify-center '>
            <li className='cursor-pointer hover:text-black hover:border-b-4 border-lgr'><a href="/">Pricing</a></li>
            <li className='cursor-pointer hover:text-black hover:border-b-4 border-lgr'><a href="#about ">Product</a></li>
            <li className='cursor-pointer hover:text-black hover:border-b-4 border-lgr'><a href="#contact">About Us</a></li>
            <li className='cursor-pointer hover:text-black hover:border-b-4 border-lgr'><a href="#blog">Career</a></li>
            <li className='cursor-pointer hover:text-black hover:border-b-4 border-lgr'><a href="#careers">Community</a></li>
        </ul>
        <div className='lg:block hidden'>   
       <GetStarted/>
       </div>
       </div>

       {/* hamburger */}
       <div className='hamburger cursor-pointer  lg:hidden' >
          {!open && <img src={hamburger} alt="" className='cursor-pointer' onClick={()=>setOpen(true)}/> }
          {open &&  <img src={close} alt="" className='cursor-pointer' onClick={()=>setOpen(false)}/> }
       </div>
        </div>
    </div>
  )
}

export default Navbar

