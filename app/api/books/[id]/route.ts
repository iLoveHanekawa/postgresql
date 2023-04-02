import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: any, { params }: { params: { id: string }}) {
    const book = await prisma.book.findUnique({
        where: {
            id: params.id
        }
    })
    return NextResponse.json({
        data: book
    })
}