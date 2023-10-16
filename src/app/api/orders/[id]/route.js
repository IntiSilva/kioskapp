import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(req, { params }) {
    if (req.method === "POST") {

       const { id } = params

       const updatedOrder = await prisma.order.update({
            where: {
                id: parseInt(id)
            },
            data: {
                state: true
            }
       })
       return NextResponse.json(updatedOrder)
    }
}

//Added delete order functionality to keep db clean
export async function DELETE(req, {params}) {
    if (req.method === 'DELETE'){
        const { id } = params
        await prisma.order.delete({
            where:{
                id: parseInt(id)
            }
        })
        return new Response(null, {status: 204})
    }
}