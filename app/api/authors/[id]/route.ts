import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: string }}) {
    console.log(params)
    const author = await prisma.author.findUnique({
        where: {
            id: params.id
        }
    })
    return NextResponse.json({ data: author })
}