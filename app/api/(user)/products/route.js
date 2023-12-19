import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        const products=await prisma.product.findMany();
        return NextResponse.json({
            success:true,
            data:products
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



