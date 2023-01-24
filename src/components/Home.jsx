import React from 'react'
import heroimg from "../assets/heroimage.png"
import { HiArrowRight } from 'react-icons/hi'

export const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold'>
            I am a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I am a computer science student at Boston University currently working on ful-stack application projects.
            I love to build software applications and I enjoy creating UI/UX applications. 
            I mainly use React.js and Tailwind for my frontend and Firebase for the backend.
          </p>

          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio 
              <span className='group-hover:translate-x-3 duration-300'>
                <HiArrowRight size={20} className='ml-1'/>
              </span>
            </button>
          </div>
        </div>

        <div>
          <img src={heroimg} alt='Hero Profile' className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>

      </div>
    </div> 
  )
}