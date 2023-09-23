import React from 'react'

const ServiceSection = () => {
  return (
    <section className='bg-[#fdf0e9] p-16'>
        <h4 className='text-lg text-center text-[#EF6D58]'>SERVICE</h4>
        <h1 className='text-[#391400] text-4xl font-bold text-center'>How I Can Help<br/> You With</h1>
        <div className='mt-6 mx-24 flex'>
            <div className='p-8 border-solid border-[1px] border-[#EF6D58]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            
            <div className='p-8 border-solid border-[1px] border-[#EF6D58] border-l-0'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
        </div>
    </section>
  )
}

export default ServiceSection