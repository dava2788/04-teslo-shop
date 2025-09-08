import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: Category }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const seedProducts = initialData.products;

export default async function CartegoryPage({ params }: Props) {
  const { id } = await params;

  const labels: Record<Category, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Todos'
  }

  // if (id === 'kids') {
  //   notFound();
  // }

  const products = seedProducts.filter(x => x.gender === id);

  return (
    <>
      <Title title={`Articulos para ${labels[id]}`} subtitle={"Todos los productos"} className="mb-2" />
      <ProductGrid products={products} />
    </>

  );
}
