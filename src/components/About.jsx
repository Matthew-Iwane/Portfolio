import React from 'react'

export const About = () => {
  return (
    <div 
      name="about" 
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'  /*bg-gradient-to-b from-black via-black to-gray-800*/>
      <div className='max-w-screen-lg flex flex-col w-full h-full justify-center mx-auto p-4'>
        
        <div className='pb-8'>
          <p className='text-4xl font-bold inline'>ABOUT</p>
          <p className='text-xl mt-10 font-light'> 
            I want to pursue a full-time career in Software Engineering/Development post graduation.
          </p>

          <div className='w-full flex justify-center flex-auto'>

            <ul className='list-disc text-xl mt-5 font-light mx-5'>
              <p className='font-bold'>Tech Stack That I Use</p>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React.js </li>
              <li>Node.js</li>
              <li>SASS/SCSS</li>
            </ul>

            <ul className='list-disc  text-xl mt-5 font-light mx-5'>
              <p className='font-bold'>Non-SWE Skills That I Am Learning:</p>
              <li>Supervised Learning</li>
              <li>Unsupervised Learning</li>
              <li>Collaborative Filtering</li>
              <li>Content-Based Filtering</li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}