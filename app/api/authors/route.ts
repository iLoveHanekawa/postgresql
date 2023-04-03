import { NextResponse, NextRequest } from "next/server";
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
    const delAuthor = await prisma.author.delete({
        where: {
            id
        }
    })
    return NextResponse.json({ data: delAuthor })
}

//Patch is not mentioned as an available method in the docs but using it here instead of UPDATE actually works

export async function PATCH(req: NextRequest) {
    const { id, newName } = await req.json()
    console.log(id, newName)
    const updAuthor = await prisma.author.update({
        data: {
            name: newName
        },
        where: {
            id
        },
    })
    return NextResponse.json({ data: updAuthor })
}
