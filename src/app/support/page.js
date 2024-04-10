import React from 'react'
import krishna from "@/assets/img/krishna.jpg"
import Image from 'next/image'

const Support = () => {
  return (
    <section>

      <div className='border border-gray-300 rounded-xl mt-12 mx-auto max-w-xl px-4 lg:w-80 lg:h-96 lg:ml-[200px] items-center'>

        <Image src={krishna} className='rounded-xl  lg:w-80 lg:h-[350px] object-contain' />

        <p className='text-center text-lg font-normal font-serif lg:absolute lg:ml-[450px] lg:-mt-[350px]'>
          SMALL FRAME - 5" X 7" PICTURE SIZE
        </p>
        <p className='text-center text-l font-light text-gray-600 lg:absolute lg:ml-[450px] lg:-mt-[310px]'>
          ₹ 900.00
        </p>
        <hr className='h-[2px] w-96 bg-gray-300 lg:absolute lg:ml-[450px] lg:-mt-[270px]'></hr>
        <p className='font-light text-gray-700 lg:absolute lg:ml-[450px] lg:-mt-[250px] md:mr-[200px]'>

          Elevate your space with our divine Shree Krishna photo frame. Radiating serenity and grace, its intricate design captures the essence of Lord Krishna's divine presence. Crafted with precision and care, it serves as a timeless symbol of love, devotion, and spiritual enlightenment. Perfect for adorning your home or gifting to loved ones seeking blessings and inspiration.
        </p>

        <button className='mx-auto md:-mt-12 border bg-black h-12 w-48  lg:ml-[450px] lg:relativecd    lg:-mt-12 lg:w-96 text-white'>
          Buy Now
        </button>

      </div>
    </section>
  )
}

export default Support