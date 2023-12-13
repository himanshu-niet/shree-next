
import prisma from '@/lib/prisma';
import jwt from '@/utils/jwt';
import { NextResponse } from 'next/server';
const bcrypt = require('bcryptjs');

export async function POST(request) {

    try {
        
        let {email,password} = await request.json();
        // let hashPassword=bcrypt.hashSync(password, 8);

        const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          })
          console.log("user")

return NextResponse.json({"query":"query"})
        // user.accessToken = await jwt.signAccessToken(user);
        // return NextResponse.json({
        //     success: true,
        //     data: user
        // }, {
        //     status: 201,
        // });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, {
            status: 501,
        });
    } finally {
        await prisma.$disconnect();
    }


}
