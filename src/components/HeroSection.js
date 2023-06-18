import React from 'react'
import myImage from '../resources/myImage.jpg'
import resume from '../resources/Vipransh_resume_june23.pdf'


function HeroSection() {
  return (
    <div className="flex flex-col-reverse gap-4 text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left dark:bg-[#212121]">
       
        <div className="md:mt-2 md:w-3/5 md:pl-20">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl dark:text-white">Hi, I&#39;m Vipransh!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl dark:text-white">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Frontend Developer{" "}
            </span>
            based in India.<br/> Working towards creating software that <br/>
            makes life easier and more meaningful.
          </p>
          <a target='blank' href={resume} ><button className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700'>Resume</button></a>
        </div>
        <div className="md:mt-2 md:w-1/2 flex items-center justify-center">
           <img className='rounded-full shadow-2xl' src={myImage} alt='myImage'/>
        </div>
      </div>
  )
}

export default HeroSection