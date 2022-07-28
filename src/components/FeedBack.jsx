import React from 'react'
import first from '../images/avatar-anisha.png'
// import second from '../images/avatar-ali.png'
// import third from '../images/avatar-richard.png'
import GetStarted from './GetStarted'


const FeedBack = () => {
  return (
    <div className='w-screen py-4'>
        <h2 className='text-center text-2xl lg:text-5xl font-bold text-db'>What they've said</h2>
        <div className='w-full flex flex-col lg:flex-row flex-wrap gap-4 my-4 mx-auto py-10'>
            <div className='w-4/5 mx-auto lg:mx-0 lg:w-[32%]  bg-vlg text-center relative gap-5  '>
                <img src={first} alt="" className='w-[50px] h-[50px] absolute -top-[25px] left-1/2 -translate-x-1/2' />
                <h2 className='w-full block mt-10 mb-5'>Anisha Li</h2>
                <p className='pb-10 w-4/5 mx-auto text-dgb'>"We have been able to connect so many other subscription since using Manage. There is no more cross-channel confusion and everyone is much more focused."</p>
            </div>

            {/* <div className='w-[32%]  bg-dgb text-center relative gap-5  '>
                <img src={first} alt="" className='w-[50px] h-[50px] absolute -top-[25px] left-1/2 -translate-x-1/2' />
                <h2 className='w-full block mt-10 mb-5'>Anisha Li</h2>
                <p className='pb-10 w-4/5 mx-auto'>"We have been able to connect so many other subscription since using Manage. There is no more cross-channel confusion and everyone is much more focused."</p>
            </div>

            <div className='w-[32%]  bg-dgb text-center relative gap-5  '>
                <img src={first} alt="" className='w-[50px] h-[50px] absolute -top-[25px] left-1/2 -translate-x-1/2' />
                <h2 className='w-full block mt-10 mb-5'>Anisha Li</h2>
                <p className='pb-10 w-4/5 mx-auto'>"We have been able to connect so many other subscription since using Manage. There is no more cross-channel confusion and everyone is much more focused."</p>
            </div> */}
        </div>

        <div className='flex justify-center items-center w-full '>
        <GetStarted />
        </div>
    </div>
  )
}

export default FeedBack