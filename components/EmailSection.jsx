import React from 'react'
import githubIcon from "../public/github-icon2.svg"
import linkedinIcon from "../public/linkedin-icon2.svg"
import Link from "next/link"
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className='bg-[#fdf0e9] grid md:grid-cols-2 lg:px-40 sm:px-20 py-16 gap-4'>
        <div className='flex flex-col gap-4'>
            <h5 className='text-xl font-bold my-2'>Let's Connect</h5>
            <p className='text-lg mb-4 max-w-md'>
                {" "}
                I'm currently looking for new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, i'll try my best to get back to you!
            </p>

            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/shabrina12" target="_blank">
                    <Image src={githubIcon} alt='github icon' />
                </Link>
                <Link href="https://linkedin.com/in/shabrina-putri-4705491a5" target="_blank">
                    <Image src={linkedinIcon} alt='linkedin icon' />
                </Link>
            </div>
        </div>

        <div>
            <form className='flex flex-col gap-6'>
                <div>
                    <label htmlFor='email' className='mb-3 block text-sm font-medium'>Your Email</label>
                    <input type='email' id='email' required placeholder='youremail@mail.com' className='border border-[#f9e0d3] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5' />
                </div>
                
                <div>
                    <label htmlFor='subject' className='mb-3 block text-sm font-medium'>Subject</label>
                    <input type='text' id='subject' required placeholder='Just saying hi' className='border border-[#f9e0d3] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5' />
                </div>    

                <div>
                    <label htmlFor='message' className='mb-3 block text-sm font-medium'>Message</label>
                    <textarea type='text' id='message' required placeholder="Let's talk about..." className='border border-[#f9e0d3] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5' />
                </div>        

                <button type='submit' className='bg-[#ed7e6c] hover:bg-[#EF6C57] font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>       
            </form>
        </div>
    </section>
  )
}

export default EmailSection