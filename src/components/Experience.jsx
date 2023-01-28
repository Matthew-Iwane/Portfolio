import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import tailwind from "../assets/tailwind.png"
import reactimg from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import express from "../assets/express.png"
import node from "../assets/nodejs.png"

export const Experience = () => {

  const techTools = [
    {
      id : 1,
      src : html,
      title : 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id : 2,
      src : css,
      title : 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id : 3,
      src : js,
      title : 'Javascript',
      style: 'shadow-yellow-500'
    },
    {
      id : 4,
      src : tailwind,
      title : 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id : 5,
      src : reactimg,
      title : 'React',
      style: 'shadow-blue-600'
    },
    {
      id : 6,
      src : nextjs,
      title : 'Next.js',
      style: 'shadow-white'
    },
    {
      id : 7,
      src : express,
      title : 'Express',
      style: 'shadow-white'
    },
    {
      id : 7,
      src : node,
      title : 'Node.js',
      style: 'shadow-green-300'
    }
  ]

  return (
    <div 
      name="experience" 
      className='bg-gradient-to-b from-gray-800 to-black py-32'>  
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

        <div>
          <p className='text-4xl font-bold p-2 inline'>EXPERIENCE</p>
          <p className='py-6 font-thin'>These are the technology tools that I have worked with.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techTools.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-110 duration-500 py-6 rounded-lg ${style}`}
            >
                <img src={src}  alt=''  className='w-20 mx-auto'/>
                <p className='mt-4 font-thin'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
