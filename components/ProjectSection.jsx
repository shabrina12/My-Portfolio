import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: 'lorem ipsum',
        desc: 'lorem ipsum lalala',
        image: "1.png",
        tag: ["All", "Web"],
        git: "https://github.com/shabrina12/FullStack-Ecommerce-Clothing-Web",
        preview: "https://full-stack-ecommerce-clothing-web.vercel.app/"
    },
    {
        id: 2,
        title: 'lorem ipsum',
        desc: 'lorem ipsum lalala',
        image: "1.png",
        tag: ["All", "Web"],
        git: "https://github.com/shabrina12/Vangia-Front-End-Web",
        preview: "https://vangia-front-end-web-git-main-shabrina12.vercel.app/"
    },
    {
        id: 3,
        title: 'lorem ipsum',
        desc: 'lorem ipsum lalala',
        image: "1.png",
        tag: ["All", "Web"],
        git: "https://github.com/shabrina12/BEU-Music-Front-End-Landing-Page",
        preview: "https://beu-music-front-end-web.vercel.app/"
    },
]

const ProjectSection = () => {
  return (
    <section className='bg-[#32334C] text-white p-16'>
        <div className='lg:mx-24 sm:mb-8 flex justify-between items-end'>
            <div>
                <h4 className='text-[#EF6D58]'>PORTFOLIO</h4>
                <h1 className='text-4xl font-bold'>Latest Work</h1>
            </div>
            <div>
                <button className='text-sm font-semibold border-[1px] border-white rounded-md px-4 py-2'>EXPLORE MORE</button>
            </div>            
        </div>

        <div className='lg:mx-24 lg:my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} desc={project.desc} imgUrl={project.image} gitUrl={project.git} previewUrl={project.preview} />)}
        </div>
    </section>
  )
}

export default ProjectSection