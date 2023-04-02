import { NextResponse } from "next/server";
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