import Image from 'next/image'
import React from 'react'

const TopElement = () => {
    return (
        <div className='absolute top-0 -right-10 -z-10'>
            <Image
                src={'./images/rightTopElement.svg'}
                alt='Element'
                width={400}
                height={300}
                className='mix-blend-darken'
            />
        </div>
    )
}

export default TopElement