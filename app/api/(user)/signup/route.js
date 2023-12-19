
import prisma from '@/lib/prisma';
import jwt from '@/utils/jwt';
import { NextResponse } from 'next/server';
const bcrypt = require('bcryptjs');

export async function POST(request) {

    try {
        let {name, email,password,phone} = await request.json();

        if (!name, !email,!password,!phone) {
            return NextResponse.json({
                success: false,
                error:"Bad Request"
            }, {
                status: 400,
            });
        }

        password=bcrypt.hashSync(password, 8);

        const user = await prisma.user.create({
            data: {name,email,password,phone,isAdmin:false},
        });

        user.accessToken = await jwt.signAccessToken(user);
        delete user.password;
        return NextResponse.json({
            success: true,
            data: user
        }, {
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
