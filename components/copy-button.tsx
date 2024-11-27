'use client'

import Image from "next/image"
import copyIcon from '@/public/icons/copy.png'
import correctIcon from '@/public/icons/correct.svg'
import { useState } from "react"


const CopyButton = ({ text }: { text: string }) => {
    const [isCopyClicked, setIsCopyClicked] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        setIsCopyClicked(true)
    }
    return (
        <button
            type="button"
            onClick={handleCopy}
            className="bg-accent
            rounded-md p-1
            border
            "

        >
            {
                isCopyClicked ?
                    <Image
                        src={correctIcon}
                        alt="copy"
                        width={20}
                        height={20}
                        className="inline-block p-1 
                
                text-sm
                
                "
                    /> :
                    <Image
                        src={copyIcon}
                        alt="copy"
                        width={20}
                        height={20}
                        className="inline-block p-1 
                
                text-sm
                
                "
                    />
            }


        </button>
    )
}

export default CopyButton