import Image from 'next/image'
import React from 'react'

const MainBGImage
    = () => {
        return (
            <section className='relative  mt-10 h-full
            max-sm:h-72
            '>
                <Image
                    src={'./images/bgImageMain.svg'}
                    alt={'Main Background Image'}
                    fill
                    className='mix-blend-darken object-contain  object-center bg-no-repeat'
                />
            </section>
        )
    }

export default MainBGImage
