import React from 'react'

const AboutCard = ({no}) => {
  return (
    <div className="flex flex-wrap gap-3 ">
    <div className='flex flex-wrap  w-full rounded-full lg:bg-transparent bg-vpr gap-2 items-center'>
    <div className="bg-br h-[50px] rounded-full p-3 w-[60px] lg:w-[100px] text-center text-white">{no}</div>
    <h2 className='text-sm lg:text-2xl font-semibold '>Track your company-wide progress</h2>
    </div>
    <div className='p-3 lg:w-3/5 lg:ml-[100px] '>
        <p className='text-dgb w-full'>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
    </div>
</div>
  )
}

export default AboutCard