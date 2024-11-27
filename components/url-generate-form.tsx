'use client'
import React, { useActionState } from 'react'
import { generateUrl } from '@/actions'
import Form from 'next/form'
import Link from 'next/link'

const UrlGenerateForm = () => {
    const [state, formAction, isPending] = useActionState(generateUrl, '')
    return (
        <>

            <Form
                action={formAction}
                className='max-w-sm space-y-4 max-sm:mx-auto'
            >
                <div
                    className='flex flex-col '
                >
                    <label
                        htmlFor='url'
                        className='font-bold text-primary pl-5 text-lg'>Link</label>
                    <input type='url' name='link'
                        id='url'
                        required
                        className='rounded-full py-3 px-5 text bg-primary text-accent 
                    font-bold
                    placeholder:text-accent
                    placeholder:font-bold
                    placeholder:opacity-60
                    drop-shadow-md
                    '
                        disabled={isPending}
                        placeholder='Enter your link here'
                    />
                </div>
                <div
                    className='flex flex-col'
                >
                    <label
                        htmlFor='shortUrl'
                        className='font-bold text-primary pl-5 text-lg'>Preferred URL</label>
                    <input type='text' name='preferredUrl'
                        id='shortUrl'
                        className='rounded-full py-3 px-5 text bg-primary text-accent 
                    font-bold
                    placeholder:text-accent
                    placeholder:font-bold
                    placeholder:opacity-60
                                        drop-shadow-md


                    '
                        disabled={isPending}

                        placeholder='Enter your preferred URL'
                    />
                    <label htmlFor="shortUrl"
                        className='text-xs tracking-tighter text-right pr-3 line-clamp-1'>
                        <span className='text-red-600 font-black'>*</span>
                        If Preferred Url is not available system will generate a random url
                    </label>
                </div>
                <button
                    type='submit'
                    className='bg-accent border-2 border-primary text-primary rounded-full py-3 px-5 min-w-full
                font-bold
                hover:bg-primary
                hover:text-accent
                transition-all
                z-10
                
                '
                    disabled={isPending}

                >

                    {isPending ? "Generating ..." : "Generate"}
                </button>
                {
                    state &&
                    <div className='bg-neutral w-full rounded-md px-3 py-2 text-sm text-center'>

                        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/${state}`}
                            rel='nofollow'
                            target='_blank'
                            className='text-blue-500 hover:text-blue-700
                        leading-tight
                        '
                        >{state && `${process.env.NEXT_PUBLIC_BASE_URL}/${state}`}</Link>
                    </div>
                }
            </Form>

        </>
    )
}

export default UrlGenerateForm