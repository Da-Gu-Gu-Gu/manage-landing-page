import React from 'react'
import GetStarted from './GetStarted'
import mockup from '../images/illustration-intro.svg'

const Landing = () => {
  return (
    <div className='w-screen overflow-x-hidden h-screen flex flex-col lg:flex-row justify-between   z-1000'>
    <div className='w-full  lg:order-1 order-2 lg:w-1/2 xl:w-[45%] h-1/2 lg:h-full flex justify-center lg:justify-end  items-center '>
        <div className='flex flex-wrap gap-8  flex-col  w-4/5 mx-auto lg:mx-0 text-center    lg:w-[440px] xl:w-[600px] lg:text-left'>
        <h1 className='text-db landtext text-2xl md:text-5xl xl:text-6xl font-normal'>Bring everyone <br/>
together to build <br/>
better products.
    </h1>
    <p className='landtext text-gb mx-auto lg:mx-0 w-full  lg:w-[440px]'>Manage makes it simple for software team to plan day-to-day tasks while keeping the larger team goals in view.</p>
    <div className='mx-auto lg:mx-0 landtext'>
    <GetStarted />
    </div>
    </div>  
    </div>     
    <div className='w-full order-1  lg:order-2 relative lg:w-1/2 xl:w-[55%] h-1/2 lg:h-full flex items-center justify-center '>
        <div className="landbg absolute  -top-56   right-0 md:-top-20  lg:-top-40 lg:-right-72 h-full"> </div>
        <img src={mockup} alt="" className='intro-img  absolute top z-10'/>
    </div>
</div>
  )
}

export default Landing