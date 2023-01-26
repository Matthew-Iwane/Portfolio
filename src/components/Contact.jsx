import React from 'react'

export const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div>
                <p>Contact</p>
                <p>Send me an email using the form below!</p>
            </div>

            <div>
                <form action=''>
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
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <textarea
                        name="message"
                        rows="10"
                        className='p-2 bg-transparent border-2 rounded-md text-white focos:outline-none'
                    >
                    </textarea>

                    <button className='font-thin text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-4 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Let's Chat
                    </button>

                </form>
            </div>
        </div>
    </div>
  )
}
