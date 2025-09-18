'use client'

import { generatePaginationNumbers } from '@/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface Props {
    totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
    const pathName = usePathname();
    const searhParams = useSearchParams();

    const pageString = searhParams.get('page') ?? 1;
    const currentPage = isNaN(+pageString) ? 1 : +pageString;
    if (currentPage < 1 || isNaN(+pageString)) redirect(pathName);

    const allPages = generatePaginationNumbers(currentPage, totalPages);

    // console.log({ pathName, searhParams, currentPage, allPages });


    const createPageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searhParams);
        // console.log(params.toString());

        if (pageNumber === '...') {
            // console.log(`${pathName}?${params.toString()}`);
            return `${pathName}?${params.toString()}`;
        }

        if (+pageNumber <= 0) {
            // console.log(`${pathName}`);
            return `${pathName}`;// href="men"
        }

        if (+pageNumber > totalPages) {// Next >
            // console.log(`${pathName}?${params.toString()}`);
            return `${pathName}?${params.toString()}`;
        }

        params.set('page', pageNumber.toString());

        // console.log(`${pathName}?${params.toString()}`);
        return `${pathName}?${params.toString()}`
    }

    // console.log(createPageUrl(currentPage));

    return (
        <div className="flex text-center justify-center mt-10 mb-32">

            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">
                    <li className="page-item">
                        <Link className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href={createPageUrl(currentPage - 1)}>
                            <IoChevronBackOutline size={30} />
                        </Link>
                    </li>
                    {
                        allPages.map((page, index) => (
                            <li key={index} className="page-item">
                                <Link className={
                                    clsx(
                                        "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded ",
                                        {
                                            "bg-blue-600 text-white hover:text-white hover:bg-blue-400 shadow-md focus:shadow-md": page === currentPage,
                                            "bg-transparent text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none": page !== currentPage
                                        }
                                    )
                                }
                                    href={createPageUrl(page)}>
                                    {page}
                                </Link>
                            </li>

                        ))
                    }

                    <li className="page-item">
                        <Link className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href={createPageUrl(currentPage + 1)}>
                            <IoChevronForwardOutline size={30} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
