'use server'

import prisma from "@/lib/prisma";

// export const GetProductBySlug = async (slug :string) =>
export async function GetProductBySlug(slug: string) {

    try {
        const product = await prisma.product.findFirst({
            include: {
                ProductImage: {
                    select: {
                        url: true
                    }
                }
            },
            where: {
                slug: slug
            }
        });

        if (!product) return null;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {ProductImage, ...rest} = product;

        return {
            ...rest,
            images: product.ProductImage.map(img => img.url)
        };


    } catch (error) {
        console.log(error);
        throw new Error('Erro al obtener Producto por Slug');
    }

}