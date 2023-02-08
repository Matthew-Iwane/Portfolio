import { useState } from 'react'
export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      }

    const [formDetails, setFormDetails] = useState(formInitialDetails);

    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }

    const handleSubmit = () => {
      formDetails.firstName = '';
      formDetails.lastName = '';
      formDetails.email = '';
      formDetails.message = '';
    }

  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline'>CONTACT</p>
                <p className='py-6 font-thin '>Send me an email using the form below!</p>
            </div>

            <div className='flex justify-center items-center'>
                <form 
                    action="https://getform.io/f/a8bcdb1f-02a2-4554-98b2-b04e70360015"
                    method="POST"
                    className='flex flex-col w-full md:w-1/2'
                    onSubmit={handleSubmit}
                >
                    <input 
                        type='text' 
                        value={formDetails.firstName}
                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        name="name" 
                        placeholder="First Name"
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none font-thin'
                    />
                    <input 
                        type='text' 
                        value={formDetails.lastName}
                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        name="name" 
                        placeholder="Last Name"
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none font-thin mt-4'
                    />
                    <input 
                        type="email" 
                        name="name"
                        value={formDetails.email}
                        onChange={(e) => onFormUpdate('email', e.target.value)}
                        placeholder="Email"
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none font-thin'
                    />
                    <textarea
                        placeholder="Message"
                        value={formDetails.message}
                        onChange={(e) => onFormUpdate('message', e.target.value)}
                        name="message"
                        rows="10"
                        className='p-2 bg-transparent border-2 rounded-md text-white focos:outline-none font-thin max-h-72 min-h-full'
                    >
                    </textarea>

                    <button 
                        type='submit'
                        className='font-thin text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-4 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
                      >
                        Send Message!
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
