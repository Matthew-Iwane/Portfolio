import React from "react"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>Linkedin <FaLinkedin size={30}/></>
            ),
            href: "https://www.linkedin.com/in/matthew-iwane-0b65031b8/",
            style: 'rounded-tr-md'
        },        
        {
            id: 2,
            child: (
                <>Github <FaGithub size={30}/></>
            ),
            href: "https://github.com/Matthew-Iwane?tab=repositories",
        },        
        {
            id: 3,
            child: (
                <>Mail <HiOutlineMail size={30}/></>
            ),
            href: "mailto: mattiwane@gmail.com",
        },        
        {
            id: 4,
            child: (
                <>Resume <BsFillPersonLinesFill size={30}/></>
            ),
            href: "/MatthewIwaneRESUME.pdf",
            style: 'rounded-br-md',
        }
    ]


    return (
        <div className="hidden xl:flex flex-col top-[35%] left-0 fixed font-thin">
        <ul>
            {links.map(({id, child, href, style, download}) => (
                <li 
                    key={id} 
                    className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" 
                    + " " + style}
                >
                <a 
                    href={href} 
                    className="flex justify-between items-center w-full text-white"
                    target="_blank"
                    rel= "noreferrer"
                >
                    {child}
                 </a>
            </li>  
            ))}
        </ul>
    </div>
    )
}