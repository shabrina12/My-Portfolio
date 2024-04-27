"use client"
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: 'Dine Market Clothing Web',
        desc: 'HTML CSS NextJS Sanity Stripe',
        image: "header-dinemarket.png",
        tag: ["All", "Full Stack"],
        git: "https://github.com/shabrina12/FullStack-Ecommerce-Clothing-Web",
        preview: "https://full-stack-ecommerce-clothing-web.vercel.app/"
    },
    {
        id: 2,
        title: 'Vangia Cosmetics',
        desc: 'HTML CSS JavaScript ReactJS',
        image: "header-vangia.png",
        tag: ["All", "Front End"],
        git: "https://github.com/shabrina12/Vangia-Front-End-Web",
        preview: "https://vangia-front-end-web-git-main-shabrina12.vercel.app/"
    },
    {
        id: 3,
        title: 'BEU Music',
        desc: 'HTML CSS JavaScript ReactJS',
        image: "header-beu.png",
        tag: ["All", "Front End"],
        git: "https://github.com/shabrina12/BEU-Music-Front-End-Landing-Page",
        preview: "https://beu-music-front-end-web.vercel.app/"
    },
    {
        id: 4,
        title: 'Learn It Course',
        desc: 'HTML CSS JavaScript ReactJS',
        image: "header-learnit.png",
        tag: ["All", "Front End"],
        git: "https://github.com/shabrina12/LearnIt-Front-End-Landing-Page",
        preview: "https://learn-it-front-end-webpage.vercel.app/"
    },
    {
        id: 5,
        title: 'EzStay',
        desc: 'HTML CSS Bootstrap',
        image: "ezstay.png",
        tag: ["All", "Front End"],
        git: "https://github.com/shabrina12/EzStay-Landing-Page",
        preview: "https://polite-meringue-03be1c.netlify.app/"
    },
    {
        id: 6,
        title: 'Easy Bank Landing Page',
        desc: 'HTML CSS JavaScript ReactJS',
        image: "header-easybank.png",
        tag: ["All", "Front End"],
        git: "https://github.com/shabrina12/Easybank-Landing-Page",
        preview: "https://cerulean-pastelito-7b8f60.netlify.app/"
    },
    {
        id: 7,
        title: 'Travel Landing Page',
        desc: 'HTML CSS NextJS Typescript',
        image: "travlog_homepage.png",
        tag: ["All", "Front End"],
        git: "https://github.com/shabrina12/Travel-Landing-Page",
        preview: "https://travlog-landing-page-zeta.vercel.app/"
    },

]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

  return (
    <section id='projects' className='bg-[#32334C] text-white p-16'>
        <div className='lg:mx-24 mb-8 flex justify-between items-end'>
            <div>
                <h4 className='text-[#EF6D58]'>PORTFOLIO</h4>
                <h1 className='text-4xl font-bold'>Latest Work</h1>
            </div>
            <div>
                <button className='text-sm font-semibold border-[1px] border-white rounded-md px-4 py-2'>EXPLORE MORE</button>
            </div>            
        </div>

        <div className='lg:mx-24 flex flex-row justify-center items-center gap-4 py-2'>
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"} />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Front End" 
                isSelected={tag === "Front End"} />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Full Stack" 
                isSelected={tag === "Full Stack"} />
        </div>

        <ul ref={ref} className='lg:mx-24 lg:my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredProjects.map((project, index) => (
            <motion.li 
                key={index}
                variants={cardVariants}
                initia="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }} 
            >
            <ProjectCard 
                key={project.id} 
                title={project.title} 
                desc={project.desc} 
                imgUrl={project.image} 
                gitUrl={project.git} 
                previewUrl={project.preview} />
            </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectSection