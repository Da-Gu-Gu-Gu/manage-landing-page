import React from 'react'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <div className='w-screen h-max overflow-x-hidden '>
        <div className='w-[90%] lg:w-4/5 flex flex-col lg:flex-row justify-between mx-auto'>
            <div className='lg:w-1/2 w-full  h-full py-5'>
                <h2 className='text-2xl lg:text-5xl font-bold text-db'>What's different about <br />
                Manage?
                </h2>
                <p className='text-dgb lg:w-[550px] my-5'>Manage provides of the  functionalit your team needs, without the complexity.Our software is tailor-made for modern digital product teams.</p>
            </div>
            <div className='lg:w-1/2 w-full h-full py-5'>
                <AboutCard no="01"/>
                <AboutCard no="02"/>
                <AboutCard no="03"/>
              
            </div>
        </div>
    </div>
  )
}

export default About