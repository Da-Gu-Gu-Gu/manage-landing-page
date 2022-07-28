import React from 'react'
import GetStarted from './GetStarted'

const Simplify = () => {
  return (
    <div className='w-full bg-br py-20'>
        <div className="flex w-4/5 flex-col h-[200px] lg:h-max justify-center lg:text-left lg:flex-row lg:justify-between text-white mx-auto">
            <h2 className='text-2xl lg:text-4xl'>Simplify how your team <br /> work today.</h2>
            <GetStarted/>
        </div>
    </div>
  )
}

export default Simplify