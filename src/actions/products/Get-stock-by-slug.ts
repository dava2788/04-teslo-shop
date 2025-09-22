'use server'

import prisma from "@/lib/prisma";

export async function GetStockBySlug(slug: string): Promise<number> {
    try {
        const product = await prisma.product.findFirst({
            where: { slug: slug },
            select: { inStock: true }
        });

        return product?.inStock ?? 0;

    } catch (error) {
        console.log(error);
        return 0;
    }


}