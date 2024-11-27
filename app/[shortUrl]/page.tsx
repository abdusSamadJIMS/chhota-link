import prisma from '@/lib/db';
import { permanentRedirect, redirect } from 'next/navigation';

// export const revalidate = 0

const Page = async ({ params }: { params: Promise<{ shortUrl?: string }> }) => {
    const shortUrl = (await params).shortUrl
    const baseUrl = process.env.BASE_URL
    if (!shortUrl) {
        redirect(`${baseUrl}?found=not-available`)
    }

    const data = await prisma.url.findUnique({ where: { shortUrl } })
    if (!data?.link) redirect(`${baseUrl}?found=not-available`)
    permanentRedirect(data.link)

}

export default Page