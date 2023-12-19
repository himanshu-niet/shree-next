import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request){
try {

    const {
        title,
        desc,
        price,
        discount,
        category,
        subCategory,
        color,
        stock,
        images
    }=await request.json();

    if (!title,
        !desc,
        !price,
        !discount,
        !category,
        !subCategory,
        !color,
        !stock,
        !images) {
        return NextResponse.json({
            success: false,
            error:"Bad Request"
        }, {
            status: 400,
        });
    }
    const product= await prisma.product.create({
        data:{
            title,
            desc,
            price,
            discount,
            category,
            subCategory,
            color,
            stock,
            images
        }
    })

    return NextResponse.json({
        success: true,
        data: product
    }, {
        status: 201,
    });
  
} catch (error) {
return NextResponse.json({
    success: false,
    error: error.message
}, {
    status: 501,
});}}


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



