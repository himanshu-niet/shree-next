import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
const cloudinary = require("cloudinary");

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

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


    let imagesArr = [];
    let imagesLinks=[];
    if (typeof images === "string") {
        imagesArr.push(images);
    } else {
        imagesArr = images;
    }
    if (imagesArr !== undefined) {
        for (let i = 0; i < imagesArr.length; i++) {
          const result = await cloudinary.v2.uploader.upload(imagesArr[i], {
            folder: "products-test",
          });
          imagesLinks.push(result.secure_url);
        
        }
      }
      

    const product= await prisma.product.create({
        data:{
            title,
            desc,
            price:String(price),
            discount:String(discount),
            category,
            subCategory,
            color,
            stock:String(stock),
            images: {
                create: imagesLinks.map((url) => ({ url })),
              },
            },
            include: {
                images: true,
              }
            
    })

    return NextResponse.json({
        success: true,
        data: product
    }, {
        status: 201,
    });

   
} catch (error) {
    console.log(error)
return NextResponse.json({
    success: false,
    error: error.message
}, {
    status: 501,
});}}


export async function GET(request){
    try {
        const products=await prisma.product.findMany({
            include: {
                images: {
                    select: { url: true }, // Include only title
                  },
              }
        });
        
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



