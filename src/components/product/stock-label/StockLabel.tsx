'use client'

import { GetStockBySlug } from '@/actions';
import { titleFont } from '@/config/fonts'
import React, { useEffect, useState } from 'react'

interface Props {
    slug: string;
}


export const StockLabel = ({ slug }: Props) => {
    const [Stock, setStock] = useState(0);
    const [Loading, setLoading] = useState(true);

    const getStock = async () => {
        const inStock = await GetStockBySlug(slug);
        setStock(inStock);
        setLoading(false);
    }

    useEffect(() => {
        getStock();
    },)


    return (
        <>
            {
                Loading ? (
                    <h1 className={`${titleFont.className} antialiased font-bold text-lg animate-pulse bg-gray-200`}>
                        &nbsp;
                    </h1>
                ) : (
                    <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
                        Stock: {Stock}
                    </h1>

                )
            }
        </>
    )
}
