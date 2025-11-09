'use client'
import React from 'react'
import Image from 'next/image'
import { Fraunces, Mulish } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const fraunces = Fraunces({subsets: ['latin']});
const mulish = Mulish({subsets: ['latin']});

const HeroSection = () => {
  return (
    <section className='bg-[#32334C]'>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} 
        className='h-[700px] grid grid-cols-1 md:grid-cols-12 py-24 sm:py-28 md:py-0'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 style={fraunces.style} className='text-white font-semibold mb-6 text-4xl lg:text-6xl'>
            Hello, world! <br/> I'm {" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Shabrina Putri',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ color: '#EF6D58' }}
              repeat={Infinity}
            />
          </h1>
          <p style={mulish.style} className='text-white opacity-60 mb-6 font-semibold text-base sm:text-lg lg:text-xl'>shabbrina5@gmail.com</p>
          <button style={mulish.style} className='bg-[#EF6D58] text-white w-full sm:w-fit px-8 py-2 font-bold rounded-md'>Contact Me</button>
        </div>

        <div className='col-span-5 place-self-center mt-12 lg:mt-0 relative'>
          <div className='rounded-full bg-[#3A3C56] w-[350px] h-[350px] absolute top-[10%] md:top-[30%] right-[10%] md:right-[40%]'></div>
          <div className='rounded-tl-full rounded-tr-full bg-[#F7CC47] relative w-full h-full flex justify-center items-end'>
            <Image 
              className='md:block hidden' src="/profile.png" alt='hero image' 
              width={300} height={200}
            />   
            <Image 
              className='block md:hidden' src="/profile.png" alt='hero image' 
              width={250} height={150}
            /> 
          </div>
        </div>
      </motion.div>

      {/* <div className='sm:mt-24 md:mt-0 lg:m-8 py-6 text-center flex justify-center'>
        <div className='w-1/2'>
          <p style={fraunces.style} className='text-white text-xl lg:text-3xl leading-8'>Currently <span className='text-[#F7CC47]'>@ BTPN Indonesia </span>
          as<br/> Junior Full Stack Developer.
          </p>
        </div>
      </div> */}
    </section>
  )
}

export default HeroSection