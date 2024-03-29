import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { Link } from 'react-scroll'

export const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "portfolio"
        },
        {
            id: 4,
            link: "experience"
        },
        {
            id: 5,
            link: "contact"
        }
    ]
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-10">
        <div>
            <h1 className="text-3xl font-signature uppercase font-light tracking-widest ml-2">
                <Link to="home" smooth duration={500} className='cursor-pointer'>Matthew Iwane</Link>
            </h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({id,link}) => (
                <li 
                    key={id}
                    className="px-4 cursor-pointer text-gray-300 hover:scale-110 duration-150 tracking-widest uppercase font-normal"
                >
                    <Link to={link} smooth duration={500} className="cursor-pointer">
                        {link}
                    </Link>
                </li>
            ))} 
        </ul>

        <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer pr-4 z-10 text-gray-500">
            <Hamburger toggled={nav}/>
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black text-gray-500">
                {links.map(({id,link}) => (
                <li 
                    key={id}
                    className="px-4 cursor-point py-6 text-4xl font-thin tracking-widest uppercase"
                >
                    <Link onClick={() => {setNav(!nav)}} to={link} smooth duration={500} className="cursor-pointer">
                        {link}
                    </Link>
                </li>
            ))} 
            </ul>
        )}

    </div>
  )
}



