import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const url = new URL(request.nextUrl.href);


        const search = url.searchParams.get('search')
        const category = url.searchParams.get('category')
        const subCategory = url.searchParams.get('subCategory')
        const color = url.searchParams.get('color')
        const sort = url.searchParams.get('sort')
        const price = url.searchParams.get('price')


        let where = {};
        let orderBy = {};

        if (search) {
            where = {
                OR: [
                    {
                        title: {
                            contains: search,
                        },
                    },
                    {
                        desc: {
                            contains: search,
                        }
                    },
                    {
                        subCategory: {
                            contains: search,
                        }
                    },
                    {
                        color: {
                            contains: search,
                        }
                    },
                ],
            }
        }


        if (category) {
            where.category = {
                contains: category
            };
        }

        if (subCategory) {
            where.subCategory = {
                contains: subCategory
            };
        }

        if (color) {
            where.color = {
                contains: color
            };
        }


        if (sort) {
            if (sort == 'high-to-low') {
                orderBy = {
                    price: 'desc'
                }
            }
            if (sort == 'low-to-high') {
                orderBy = {
                    price: 'asc'
                }
            }
        }

        if (price) {
            if (price == 0) {
                where = {
                    price: {
                        lte: 0,
                        gte: 5000
                    }
                };
            }
            if (price == 1) {
                where = {
                    price: {
                        lte: 50001,
                        gte: 10000
                    }
                };
            }
            if (price == 2) {
                where = {
                    price: {
                        lte: 10001,
                        gte: 15000
                    }
                };
            }
            if (price == 3) {
                where = {
                    price: {
                        gte: 15000
                    }
                };
            }

        }



        const products = await prisma.product.findMany({
            where,
            orderBy,
            include: {
                images: {
                    select: { url: true },
                },
            }
        });
       
        return NextResponse.json({
            success: true,
            data: products
        }, {
            status: 200
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



