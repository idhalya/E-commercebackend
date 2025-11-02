import React from 'react'
import heroimg from "../../assets/colorful-shopping-bags.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <img src={heroimg}
         alt="rabbit"
         className='w-full h-[400px] md:h-[600-px] lg:h-[600px] object-fit'/>
         <div className='absolute inset-0  bg-opacity-5 flex items-center justify-center'>
            <div className='text-center text-black p-6'>
                <h1 className='text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6'>Grab more dress <br/>for less money</h1>
                <p className='text-sm tracking-tighter md:text-lg mb-6'>Fast WorldWide Shipping</p>
                <Link to="#" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">Shop Now</Link>


            </div>

         </div>
    </div>
  )
}

export default Hero
