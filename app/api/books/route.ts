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
    await prisma.book.create({
        data: {
            title,
            authorId
        }
    })
}

export async function DELETE(request: NextRequest) {
    const { id } = await request.json()
    await prisma.book.delete({
        where: {
            id
        }
    })
}