import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function GET() {
    const categories = await prisma.category.findMany({
        include: {
          products: true,
        },
      });
      return NextResponse.json(categories) //fijarse si va el return o no
}