import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ shortUrl?: string }> }
) {
    try {
        const shortUrl = (await params).shortUrl || ""
        if (!shortUrl) return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL!}?found=not-available`)

        const data = await prisma.url.findUnique({ where: { shortUrl } })
        if (!data?.link) return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL!}?found=not-available`)


        return NextResponse.redirect(data.link, { status: 308 })
    } catch (error) {
        console.error(error)
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL!}?found=not-available`)
    }
}