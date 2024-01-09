"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Link from 'next/link'
import { Fraunces, Mulish } from 'next/font/google';

const fraunces = Fraunces({subsets: ['latin']});
const mulish = Mulish({subsets: ['latin']});

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul style={mulish.style} className='text-[#391400] list-disc pl-2'>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>NextJS</li>
        <li>ReactJS</li>
        <li>SQL</li>
        <li>C# ASP.Net</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul style={mulish.style} className='text-[#391400]'>
        <li>Bachelor of Computer Engineering at Institut Teknologi Sepuluh Nopember, Indonesia</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul style={mulish.style} className='text-[#391400] list-disc pl-2'>
        <li className='hover:cursor-pointer hover:text-[#EF6D58]'><Link href="https://drive.google.com/file/d/1612Qr6f7W3U7kC715v4vFbdkv0Gh4KGs/view" target="_blank">PL-900: Microsoft Power Platform Fundamentals</Link></li>
        <li className='hover:cursor-pointer hover:text-[#EF6D58]'><Link href="https://drive.google.com/file/d/1yIjL0lG8RIAuiBpM80moaiLQtrU-viEK/view?usp=sharing" target="_blank">Full Stack Developer by Metrodata Academy</Link></li>
        <li className='hover:cursor-pointer hover:text-[#EF6D58]'><Link href="https://drive.google.com/file/d/13pxxUM2QOxaiYzbhnGo-uea9f7q17L45/view?usp=sharing" target="_blank">Back End Developer by Fresh Graduate Academy Digitalent</Link></li>
        <li className='hover:cursor-pointer hover:text-[#EF6D58]'><Link href="https://drive.google.com/file/d/1igLHEKlEam9IJkr-hGYWRmhxUymVGsnL/view?usp=sharing" target="_blank">Cloud Computing by Bangkit Academy 2021</Link></li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id='about' className='bg-[#fdf0e9] px-16 py-8'>
      <div className='md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center sm:py-16 lg:py-24 py-8 px-4 xl:px-16'>
        <div className='sm:mb-24 mb-0 flex flex-col items-center relative'>
          <div className='bg-[#F9E5DA] z-0 absolute top-[-25%] left-[2%] sm:w-96 md:w-60 md:h-60 lg:w-96 lg:h-72'></div>
          <Image src="/laptop.jpg" className='z-1 relative' width={480} height={480} />
          <Image className='absolute top-[80%] left-[-3%]' src="/profile-circle.png" width={150} height={150} />
        </div>
        <div className='h-full'>
          <h4 className='text-[#EF6D58] sm:mt-4 mb-3'>ABOUT</h4>
          <h2 style={fraunces.style} className='text-4xl text-[#391400] mb-3 font-bold'>Junior Full Stack<br/> Developer</h2>
          <p style={mulish.style} className='text-[#391400] md:text-lg text-left'>
          I'm well-versed in a variety of technologies, including but not limited to HTML, CSS, JavaScript, and popular frameworks like NextJS and React on the front end. On the server side, I've worked with ASP.Net and Node.js, and my database skills include SQL database.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              {" "}
              Certifications{" "}
            </TabButton>            
          </div>
          <div className='mt-4'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection