
import prisma from '@/lib/prisma';
import jwt from '@/utils/jwt';
import { NextResponse } from 'next/server';
const bcrypt = require('bcryptjs');

export async function POST(request) {

    try {
        
        let {email,password} = await request.json();


        const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          })

       let isOk=await bcrypt.compare(password,user.password)

        
       if(isOk){
          user.accessToken = await jwt.signAccessToken(user);

       delete user.password;

        return NextResponse.json({
            success: true,
            data: user
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
