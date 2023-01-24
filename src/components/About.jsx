import React from 'react'

export const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='font-100 max-w-screen-lg flex flex-col w-full h-fulljustify-center mx-auto p-4'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-10 '> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore aliquam rerum cupiditate officia rem, expedita aut quos saepe tempore delectus recusandae odio. Molestiae harum cum, voluptatibus nulla laborum illo facilis possimus quia ipsa reiciendis molestias natus quo vel similique earum aperiam, laboriosam illum ipsam doloremque corrupti. Alias, illum possimus.
        </p>

        <br/>

        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nemo laudantium libero quae atque voluptate, nihil obcaecati impedit. Quaerat natus porro aut. Numquam eos nisi sit unde accusantium, voluptas amet quia sed tempore, sapiente nostrum debitis vero fuga quae. Et odit repellendus quis minus corrupti molestias saepe enim repudiandae voluptate!
        </p>
      </div>
    </div>
  )
}