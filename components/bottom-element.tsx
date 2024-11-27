import Image from 'next/image'
import React from 'react'

const BottomElement = () => {
  return (
    <div className='absolute -z-10 -bottom-10 -left-10'>
      <Image
        src={'./images/bottomLeftElement.svg'}
        alt='Element'
        width={400}
        height={300}
        className='mix-blend-darken '
      />
    </div>
  )
}

export default BottomElement