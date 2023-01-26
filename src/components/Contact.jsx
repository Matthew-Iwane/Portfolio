import React from 'react'

export const Contact = () => {
    

  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Contact</p>
                <p className='py-6 font-thin '>Send me an email using the form below!</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='' className='flex flex-col w-full md:w-1/2'>
                    <input 
                        type='text' 
                        name="name" 
                        placeholder="Enter your name"
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <input 
                        type='text' 
                        name="name" 
                        placeholder="Enter your email"
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <textarea
                        placeholder="Enter your message"
                        name="message"
                        rows="10"
                        className='p-2 bg-transparent border-2 rounded-md text-white focos:outline-none'
                    >
                    </textarea>

                    <button className='font-thin text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-4 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Let's Talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
