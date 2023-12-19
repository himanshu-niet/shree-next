
import prisma from '@/lib/prisma';
import jwt from '@/utils/jwt';
import { NextResponse } from 'next/server';
const bcrypt = require('bcryptjs');

export async function POST(request) {

    try {
        
        let {email,password} = await request.json();

        const admin = await prisma.user.findUnique({
            where: {
              email: email,
              isAdmin:true
            },
          })

       let isOk=await bcrypt.compare(password,admin.password)

        
       if(isOk){
        admin.accessToken = await jwt.signAccessToken(admin);

       delete admin.password;

        return NextResponse.json({
            success: true,
            data: admin
        },
         {
            status: 201,
        });
       }
 
       return NextResponse.json({
        success: false,
        error: "Credentials Not Match"
    },
     {
        status: 201,
    });

    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, {
            status: 501,
        });
    } 
}
