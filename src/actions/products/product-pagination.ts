'use server'

import { Gender } from "@/generated/prisma";
import prisma from "@/lib/prisma"

interface PaginationOption {
    page?: number;
    take?: number;
    gender?: Gender;
}

export const getPaginatedProductsWithImages = async ({
    page = 1,
    take = 12,
    gender
}: PaginationOption) => {

    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;

    if (isNaN(Number(take))) take = 12;
    if (take < 1) take = 12;

    try {
        //1. Obtener Productos
        const products = await prisma.product.findMany({
            take: take,
            skip: (page - 1) * take,
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            },
            where:{
                gender:gender,
            }
        });

        //2. Obtener el total de paginas
        const totalCount = await prisma.product.count({
            where:{
                gender:gender
            }
        });
        
        const totalPages = Math.ceil(totalCount / take);


        return {
            currentPage: page,
            totalPages: totalPages,
            //Desestructuro propiedad ProductImage para no pasarla
            //Id y description, xq no coinciden con el nombre o tipo
            products: products.map(({ id, description, ProductImage, ...p }) => ({
                Id: id,
                description: description ?? '',
                images: ProductImage.map((image) => image.url),
                ...p,
            }))
        };


    } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        throw new Error(`No se pudo cargar los productos: ${msg}`, { cause: error });
    }
}