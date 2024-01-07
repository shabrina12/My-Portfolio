import React from 'react'

const ServiceSection = () => {
  return (
    <section id='about' className='bg-[#fdf0e9] p-16'>
        <h4 className='text-center text-[#EF6D58]'>SERVICE</h4>
        <h1 className='text-[#391400] text-4xl font-bold text-center'>How I Can Help<br/> You With</h1>
        <div className='mt-6 lg:mx-24 flex sm:flex-col md:flex-row'>
            <div className='p-8 border-solid border-[1px] border-[#EF6D58]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            
            <div className='p-8 border-solid border-[1px] border-[#EF6D58] sm:border-t-0 md:border-l-0 md:border-t-[1px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>
    </section>
  )
}

export default ServiceSection