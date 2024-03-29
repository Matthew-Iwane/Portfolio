import React from 'react'
import coursesearch from "../assets/portfolio/coursesearch.png"
import todo from "../assets/portfolio/todo.png"
import landingpage from "../assets/portfolio/landingpage.png"
import workout from "../assets/portfolio/workout.png"

export const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            src: coursesearch,
            demo: "https://bucoursesearch.web.app/",
            code: "https://github.com/Matthew-Iwane/BUCourseSearch2.0/tree/main"
        },
        {
            id: 2,
            src: todo,
            demo: "https://github.com/Matthew-Iwane/Todo-List",
            code: "https://github.com/Matthew-Iwane/Todo-List"
        },
        {
            id: 3,
            src: landingpage,
            demo: "https://github.com/Matthew-Iwane/Landing-Page",
            code: "https://github.com/Matthew-Iwane/Landing-Page"
        },
        {
            id: 4,
            src: workout,
            demo: "https://github.com/Matthew-Iwane/Workout-App",
            code: "https://github.com/Matthew-Iwane/Workout-App"
        },
    ]

  return (
    <div 
        name="portfolio" 
        className='w-full md:h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white' /*bg-gradient-to-b from-black via-black to-gray-800*/>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>PORTFOLIO</p>
                <p className='py-6 font-light'>This section consists of both my personal work and collaborative projects. I used Firebase, Supabase, MongoDB and Redis for the backend and React for the frontend. I used various libraries such as Tailwind, Bootstrap, and Material UI to assist with custom user-interfaces.</p>
            </div>

            <div 
                className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            { portfolio.map(({id, src, demo, code}) => (
                    <div key={id}className='shadow-md shadow-gray-600 rounded-lg'>
                        <img 
                            src={src} 
                            alt='' 
                            className='rounded-md duration-300 hover:scale-110'/>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 m-4 duration-200 hover:scale-110 font-light'>
                                <a rel="noreferrer" target="_blank" href={demo}>Demo</a>
                            </button>
                            <button className='w-1/2 px-6 m-4 duration-200 hover:scale-110 font-light'>
                                <a rel="noreferrer" target="_blank" href={code}>Code</a>
                            </button>                        
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}
