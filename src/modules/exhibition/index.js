import { Button } from '@/components/ui/button'
import React from 'react'

const SingleExhibition = ({ exhibitionData }) => {
    return (

        <section className='max-w-5xl'>

            <div className='border border-gray-300 rounded-xl mt-12 mx-auto max-w-xl px-4 lg:w-80 lg:h-96 lg:ml-[200px] items-center'>

                <img src={exhibitionData.imageURL} className='rounded-xl  lg:w-80 lg:h-[350px] object-contain' />

                <p className='text-center text-lg font-normal font-serif lg:absolute lg:ml-[450px] lg:-mt-[350px]'>
                    {exhibitionData.title}
                </p>
                <p className='text-center text-l font-light text-gray-600 lg:absolute lg:ml-[450px] lg:-mt-[310px]'>
                    ₹ {exhibitionData.price}
                </p>
                <hr className='h-[2px] w-96 bg-gray-300 lg:absolute lg:ml-[450px] lg:-mt-[270px]'></hr>
                <p className='font-light text-gray-700 lg:absolute lg:ml-[450px] lg:-mt-[250px] md:mr-[200px]'>
                    {exhibitionData.description}
                </p>

                <Button className='mx-auto md:-mt-12 lg:ml-[450px] lg:-mt-12 lg:w-96 text-white'>
                    Buy Ticket
                </Button>

            </div>
        </section>

    )
}

export default SingleExhibition