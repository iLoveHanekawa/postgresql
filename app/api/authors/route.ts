import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const authors = await prisma.author.findMany()
    return NextResponse.json({
        data: authors
    })
}