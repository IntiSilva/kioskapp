import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(){
    const orders = await prisma.order.findMany({
        where: {
            state: false
        }
    })
    return NextResponse.json(orders)
}

export async function POST(req) {
    if (req.method === "POST") {
        const order = await req.json()
        const newOrder = await prisma.order.create({
            data: {
                name: order.name,
                total: order.total,
                orderDetails: order.orderDetails,
                date: order.date,
            }
    })
    return NextResponse.json(newOrder)
    }
}