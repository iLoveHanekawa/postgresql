import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: string }}) {
    const author = await prisma.author.findUnique({
        where: {
            id: params.id
        }
    })
    return NextResponse.json({ data: author })
}