export const revalidate = 60; //60seconds
// false | 0 | number

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@/generated/prisma";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ gender: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function GenderByPage({ params, searchParams }: Props) {
  const { gender } = await params;
  const queryString = await searchParams;

  // console.log({searchParams :queryString});
  // console.log({pageValue :queryString.page});

  const page = queryString.page ? parseInt(queryString.page as string) : 1;

  // console.log({pageValue :page});

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, gender:gender as Gender });
  // console.log(products[0]);
  //console.log({currentPage,totalPages});

  if (products.length === 0) redirect(`/gender/${gender}`);


  const labels: Record<string, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Todos'
  }

  // if (id === 'kids') {
  //   notFound();
  // }

  return (
    <>
      <Title title={`Articulos para ${labels[gender]}`} subtitle={"Todos los productos"} className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>

  );
}
