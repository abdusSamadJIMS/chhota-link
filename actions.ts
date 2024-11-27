"use server"

import prisma from "./db";
import { generateUniqueAlphabeticString } from "./lib/utils";

export async function generateUrl(prevState: unknown, formdata: FormData) {
    const link = formdata.get("link") as string;
    const preferredUrl = formdata.get("preferredUrl") as string;

    if (!link) throw new Error("Link not found")
    if (preferredUrl) {
        const isPreferredAvailable = await prisma.url.findFirst({ where: { shortUrl: preferredUrl } })
        // const {updatedAt} = isPreferredAvailable
        // const timeDiff = (new Date().getTime() - updatedAt.getTime()) / 1000
        const shortUrl = generateUniqueAlphabeticString(link)
        const data = await prisma.url.create({
            data: {
                link,
                shortUrl: isPreferredAvailable == null ? preferredUrl : shortUrl
            }
        })
        return data.shortUrl

    }
    else {
        const shortUrl = generateUniqueAlphabeticString(link)
        const data = await prisma.url.create({
            data: {
                link,
                shortUrl
            }
        })
        return data.shortUrl
    }
}