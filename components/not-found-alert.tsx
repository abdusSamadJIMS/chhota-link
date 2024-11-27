'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NotFoundAlert = () => {
    // Show alert when the URL does not exist
    const router = useRouter()
    const searchParams = useSearchParams();
    const found = searchParams.get("found")
    const [showAlert, setShowAlert] = useState(found === "not-available" ? true : false)
    if (!found) return null

    if (found !== 'not-available') return null

    const hideAlert = () => {
        setShowAlert(false)
        router.push(process.env.NEXT_PUBLIC_BASE_URL!)
    }
    //change showAlert state in 20 seconds
    setTimeout(() => {
        hideAlert()
    }, 20000)
    return (
        showAlert ? <>
            <div
                className='fixed w-screen bg-red-400
                py-4
                px-5
                flex justify-evenly
                max-sm:text-xs
                '
            >
                <p>
                    The URL you&apos;re trying to access does not exist. Please check the URL and try again.
                </p>
                <button
                    className='bg-neutral text-accent px-4 py-1 rounded-lg
                    hover:bg-primary
                    font-black
                    '
                    onClick={hideAlert}
                >
                    X
                </button>
            </div>
        </> : null
    )
}

export default NotFoundAlert