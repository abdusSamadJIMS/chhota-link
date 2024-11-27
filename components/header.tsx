import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header
      className='bg-primary rounded-full py-5 px-6 text-accent
      flex justify-between items-center
      md:text-xl
      max-sm:flex-col
      z-40
      '
    >
      <h1 className=' font-black'>
        <Link href={"/"}
        >
          Chhota Link
        </Link>
      </h1>
      <h2>
        Created by
        <Link href={'www.linkedin.com/in/abdus-samad-633b3425a'}

          className='font-black hover:text-neutral transition-colors duration-300 '>
          &nbsp;@Abdus Samad
        </Link>
      </h2>
    </header>
  )
}

export default Header