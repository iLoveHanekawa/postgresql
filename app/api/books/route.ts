import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const books = await prisma.book.findMany({
        include: {
            author: {
                select: {
                    name: true
                }
            }
        },
        orderBy: {
            title: 'asc'
        }
    })
    return NextResponse.json({
        data: books
    })
}

export async function POST(request: NextRequest) {
    const { title, authorId } = await request.json()
    const newBook = await prisma.book.create({
        data: {
            title,
            authorId
        }
    })
    return NextResponse.json({ data: newBook })
}

export async function DELETE(request: NextRequest) {
    const { id } = await request.json()
    const delBook = await prisma.book.delete({
        where: {
            id
        }
    })
    return NextResponse.json({ data: delBook })
}

export async function PATCH(req: NextRequest) {
    const { id, newName } = await req.json()
    const updBook = await prisma.book.update({
        data: {
            title: newName
        },
        where: {
            id
        }
    })
    return NextResponse.json({ data: updBook })
}
