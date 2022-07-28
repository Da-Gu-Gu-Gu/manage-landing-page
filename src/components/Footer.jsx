import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div id='footer' className='bg-vdb py-10 bg-blend-light'>
        <div className="w-4/5 mx-auto flex flex-col-reverse lg:flex-row justify-between  text-white" >
            
            <div className='flex w-full mx-auto lg:mx-0 h-20 lg:h-auto  lg:w-max flex-col-reverse lg:flex-col justify-between  text-white'>
                <img src={logo} alt="" className='mx-auto lg:mx-0 bg-blend-light aa text-white'/>

            

            
                <div className="flex flex-wrap gap-2 mx-auto lg:mx-0">
                    <img src={facebook} alt="" className='ficon'/>
                    <img src={youtube} alt="" className='ficon'/>
                    <img src={twitter} alt="" className='ficon'/>
                    <img src={pinterest} alt="" className='ficon'/>
                    <img src={instagram} alt="" className='ficon'/>
                </div>
            </div>
       
            <div className='flex flex-row text-center lg:text-left my-5 lg:my-0 w-full lg:w-[350px] justify-around text-dgb'>
                <div className='flex flex-wrap gap-5 flex-col'>
                    <a className='hover:text-br' href="#about">Home</a>
                    <a className='hover:text-br' href="/">Pricing</a>
                    <a className='hover:text-br' href="/">Products</a>
                    <a className='hover:text-br' href="#blog">About Us</a>
                </div>    
                <div className='flex flex-wrap gap-5 flex-col lg:py-0 py-5'>
                    <a className='hover:text-br' href="/">Careers</a>
                    <a className='hover:text-br' href="/">Community</a>
                    <a className='hover:text-br' href="/">Privacy Policy</a>
                </div>  
            </div>   

            <div className='flex flex-col  w-full lg:w-max   justify-between h-[100px] lg:h-auto'>
                <div className='mx-auto lg:mx-0 flex flex-wrap gap-4'>
                <input type="text" className='w-[150px] lg:w-[200px] pl-2 text-black h-[40px] rounded-full border-0 outline-none'/>
                <button className='text-white bg-br rounded-full  h-[40px] w-[80px] leading-[40px]'>Go</button>
            </div>
          <p className='text-dgb text-center lg:text-left'>Copyright 2020. All Rights Reserved </p>
            </div>
        </div>
    </div>
  )
}

export default Footer