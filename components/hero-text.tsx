import Image from 'next/image'
import React from 'react'
import smallIcon from '@/public/images/small.svg'

const HeroText = () => {
    return (
        <section className='
        
        md:text-5xl 
        text-4xl
        font-bold space-y-5 mt-10 md:mb-20 mb-10'>
            <h3 className=''>Generate your</h3>
            <h3 >
                <span className='font-normal italic bg-secondary px-3 py-1 text-accent'>
                    Chhota Link
                </span>
                <Image
                    src={smallIcon}
                    alt='small icon'
                    width={50}
                    height={50}
                    className='inline-block p-1 ml-1'
                />
                Now
            </h3>
        </section>
    )
}

export default HeroText