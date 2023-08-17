import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const body = await request.json();
        const { title, description } = body;
        const newPost = await prisma.Post.create({
            data: {
                title,
                description
            }
        })
        return NextResponse.json(newPost);
    } catch (error) {
        return NextResponse.json({ message: 'Error While Post Data', error }, { status: 500 })
    }
}

export const GET = async () => {
    try {
        const postlist = await prisma.post.findMany()
        return NextResponse.json(postlist);
    } catch (error) {
        return NextResponse.json({ message: 'Error While Post Data', error }, { status: 500 })
    }
}