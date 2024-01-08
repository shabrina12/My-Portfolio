"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='text-[#391400] list-disc pl-2'>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>NextJS</li>
        <li>ReactJS</li>
        <li>SQL</li>
        <li>ASP.Net</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='text-[#391400]'>
        <li>Bachelor of Computer Engineering at Institut Teknologi Sepuluh Nopember, Indonesia</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='text-[#391400] list-disc pl-2'>
        <li>PL-900: Microsoft Power Platform Fundamentals</li>
        <li>Full Stack Developer by Metrodata Academy</li>
        <li>Back End Developer by Fresh Graduate Academy Digitalent</li>
        <li>Cloud Computing by Bangkit Academy 2021</li>
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
      <div className='md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center sm:py-16 py-8 px-4 xl:px-16'>
        <div className='sm:mb-24 mb-0 flex flex-col items-center relative'>
          <Image src="/laptop.jpg" width={500} height={500} />
          <Image className='absolute top-[75%] left-[-3%]' src="/profile-circle.png" width={150} height={150} />
        </div>
        <div className='h-full'>
          <h4 className='text-[#EF6D58] sm:mt-4 mb-3'>SHABRINA PUTRI</h4>
          <h2 className='text-4xl text-[#391400] mb-3 font-bold'>Junior Full Stack<br/> Developer</h2>
          <p className='text-[#391400] md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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