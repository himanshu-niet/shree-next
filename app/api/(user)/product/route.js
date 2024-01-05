import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        const url = new URL(request.nextUrl.href);
        const productId = url.searchParams.get('id');

        const product = await prisma.product.findUnique({
            where: {
              id: productId,
            },
            include: {
                images: {
                    select: { url: true }, // Include only title
                  },
              }
          })
         

        return NextResponse.json({
            success:true,
            data:product
        },{
            status:200
        })
        
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, {
            status: 501,
        });
          
    }
}



