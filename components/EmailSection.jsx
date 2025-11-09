"use client"
import React, { useState } from 'react'
import githubIcon from "../public/github-mark.svg"
import linkedinIcon from "../public/linkedin-mark.svg"
import Link from "next/link"
import Image from 'next/image'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

         // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
            "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if(response.status === 200) {
            console.log('Message sent!');
            setEmailSubmitted(true);    
        }
    };

  return (
    <section id='contact' className='bg-[#fdf0e9] grid md:grid-cols-2 px-10 lg:px-40 sm:px-16 py-16 gap-4'>
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
            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email' className='mb-3 block text-sm font-medium'>Your Email</label>
                    <input name='email' type='email' id='email' required placeholder='youremail@mail.com' className='border border-[#f9e0d3] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5' />
                </div>
                
                <div>
                    <label htmlFor='subject' className='mb-3 block text-sm font-medium'>Subject</label>
                    <input name='subject' type='text' id='subject' required placeholder='Just saying hi' className='border border-[#f9e0d3] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5' />
                </div>    

                <div>
                    <label htmlFor='message' className='mb-3 block text-sm font-medium'>Message</label>
                    <textarea name='message' type='text' id='message' required placeholder="Let's talk about..." className='border border-[#f9e0d3] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5' />
                </div>        

                <button type='submit' className='text-white bg-[#ed7e6c] hover:bg-[#EF6C57] font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>     
                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )
                }  
            </form>
        </div>
    </section>
  )
}

export default EmailSection