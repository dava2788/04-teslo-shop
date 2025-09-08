import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ProductPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const product = initialData.products.find(p => p.slug === slug);

  if (!product) notFound()

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slide Show */}
      <div className="col-span-1 md:col-span-2">

        {/* Mobile SlideShow */}
        <ProductMobileSlideShow images={product.images} title={product.title} className="block md:hidden"/>

        {/* Desktop SlideShow */}
        <ProductSlideShow images={product.images} title={product.title} className="hidden md:block" />
      </div>

      {/* Details */}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Selector de Tallas */}
        <SizeSelector selectedSize={product.sizes[1]} availableSizes={product.sizes} />

        {/* Select de Cantidad */}
        <QuantitySelector quantity={1} />

        {/* Button */}
        <button className="btn-primary my-5">
          Agregar al Carrito
        </button>

        {/* Button */}
        <h3 className="font-bold text-sm ">Descripcion</h3>
        <p className="font-light">{product.description}</p>


      </div>

    </div>
  );
}