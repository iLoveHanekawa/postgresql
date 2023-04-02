import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const authors = await prisma.author.findMany()
    return NextResponse.json({
        data: authors
    })
}

export async function POST(request: NextRequest) {
    const { name, book } = await request.json()
    const author = await prisma.author.create({
        data: {
            name: name,
            books: {
                create: {
                    title: book
                }
            }
        }
    })
    return NextResponse.json({
        data: author
    })
}

export async function DELETE (req: NextRequest) {
    const { id } = await req.json()
    await prisma.author.delete({
        where: {
            id
        }
    })
}
