"use server"

import slugify from "slugify";
import prisma from "./db";
import { generateUniqueAlphabeticString } from "./utils";

export async function generateUrl(prevState: unknown, formdata: FormData) {
    const link = formdata.get("link") as string;
    const preferredUrl = formdata.get("preferredUrl") as string || "";
    const slufigyPrefferedUrl = slugify(preferredUrl, { replacement: "-", remove: /[*+~.()'"!:@]/g })

    if (!link) throw new Error("Link not found");

    if (preferredUrl) {
        const isPreferredAvailable = await prisma.url.findFirst({
            where: { shortUrl: slufigyPrefferedUrl }
        });

        if (isPreferredAvailable) {
            const { updatedAt } = isPreferredAvailable;
            const timeDiffInSeconds = (new Date().getTime() - updatedAt.getTime()) / 1000;
            const twoWeeksInSeconds = 14 * 24 * 60 * 60; // 2 weeks

            if (timeDiffInSeconds > twoWeeksInSeconds) {
                // Replace the preferred URL
                const data = await prisma.url.update({
                    where: { shortUrl: slufigyPrefferedUrl },
                    data: {
                        link,
                        updatedAt: new Date() // Update the timestamp
                    }
                });
                return data.shortUrl;
            } else {
                // Generate a new unique URL if the preferred one is not replacable
                const shortUrl = generateUniqueAlphabeticString(link);
                const data = await prisma.url.create({
                    data: {
                        link,
                        shortUrl: slugify(shortUrl, { replacement: "-", remove: /[*+~.()'"!:@]/g })
                    }
                });
                return data.shortUrl;
            }
        } else {
            // Create with preferred URL if it doesn't already exist
            const data = await prisma.url.create({
                data: {
                    link,
                    shortUrl: slufigyPrefferedUrl
                }
            });
            return data.shortUrl;
        }
    } else {
        // Generate a new short URL if no preferred URL is provided
        const shortUrl = generateUniqueAlphabeticString(link);
        const data = await prisma.url.create({
            data: {
                link,
                shortUrl: slugify(shortUrl, { replacement: "-", remove: /[*+~.()'"!:@]/g })
            }
        });
        return data.shortUrl;
    }
}


// export async function generateUrl(prevState: unknown, formdata: FormData) {
//     const link = formdata.get("link") as string;
//     const preferredUrl = formdata.get("preferredUrl") as string;

//     if (!link) throw new Error("Link not found")
//     if (preferredUrl) {
//         const isPreferredAvailable = await prisma.url.findFirst({ where: { shortUrl: preferredUrl } })
//         // const {updatedAt} = isPreferredAvailable
//         // const timeDiff = (new Date().getTime() - updatedAt.getTime()) / 1000
//         const shortUrl = generateUniqueAlphabeticString(link)
//         const data = await prisma.url.create({
//             data: {
//                 link,
//                 shortUrl: isPreferredAvailable == null ? preferredUrl : shortUrl
//             }
//         })
//         return data.shortUrl

//     }
//     else {
//         const shortUrl = generateUniqueAlphabeticString(link)
//         const data = await prisma.url.create({
//             data: {
//                 link,
//                 shortUrl
//             }
//         })
//         return data.shortUrl
//     }
// }