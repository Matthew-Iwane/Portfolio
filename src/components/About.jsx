import React from 'react'

export const About = () => {
  return (
    <div 
      name="about" 
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'  /*bg-gradient-to-b from-black via-black to-gray-800*/>
      <div className='max-w-screen-lg flex flex-col w-full h-full justify-center mx-auto p-4'>
        
        <div className='pb-8'>
          <p className='text-4xl font-bold inline'>ABOUT</p>
          <p className='text-xl mt-10 font-thin'> 
          I am a computer scientist wanting to work in the Software Engineering/Development field. 
          I love to create things that people can use and I want to expose myself to other like-minded individuals.
          Coding is one of my hobbies but I also like to weight-lift and watch anime.
          </p>
          <div className='w-full flex justify-center flex-auto'>
            <ul className='list-disc  text-xl mt-5 font-thin mx-5'>
              <p className='font-bold'>Favorite Exercises:</p>
              <li>Bench Press</li>
              <li>Deadlift</li>
              <li>Reverse Bicep Curls</li>
              <li>Cable Pec Flies</li>
            </ul>

            <ul className='list-disc text-xl mt-5 font-thin mx-5'>
              <p className='font-bold'>My Top Anime:</p>
              <li>Attack On Titan</li>
              <li>Steins;Gate</li>
              <li>Erased</li>
              <li>Guilty Crown</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}