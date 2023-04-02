import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET({ params }: { params: { id: string }}) {
    const author = await prisma.author.findUnique({
        where: {
            id: '2c166e52-af6a-4707-a86b-075bce853a10'
        }
    })
    return NextResponse.json({ data: author })
}