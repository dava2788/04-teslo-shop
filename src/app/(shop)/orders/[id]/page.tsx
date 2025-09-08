import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function OrderPage({ params, searchParams }: Props) {
  const { id } = await params;

  // TODO verficacion
  // Redirect()


  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">
        <Title title={`Order #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-500 ': false,
                  'bg-green-700': true
                }
              )
            }>
              <IoCartOutline size={30} />
              {/* <span className="mx-2">Pendiente de Pago</span> */}
              <span className="mx-2">Order Pagada de Pago</span>
            </div>



            {/* Items del Carrito */}
            {
              productsInCart.map(p => (
                <div key={p.slug} className="flex mb-5">

                  <Image src={`/products/${p.images[0]}`} alt={p.title} width={100} height={100} className="mr-5 rounded" style={{ width: '100px', height: '100px' }} />

                  <div>
                    <p>{p.title}</p>
                    <p>${p.price} X 3</p>
                    <p className="font-bold">Subtotal: ${p.price * 3}</p>
                  </div>

                </div>
              ))
            }

          </div>

          {/* Checkout -Resumen De Orden */}
          <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl mb-2">Dirrecion de Entrega</h2>
            <div className="mb-10">
              <p className="text-xl">David P</p>
              <p>CAlle la Labor</p>
              <p>San Antonion De Belen</p>
              <p>Heredia</p>
              <p>Codigo POstal 44178</p>
              <p>Telefono 21354</p>
            </div>

            {/* Linea Divisoria */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Resumen de Order</h2>
            <div className="grid grid-cols-2">

              <span className="">Numero de Productos </span>
              <span className="text-right">3 Articulos</span>

              <span className="">Subtotal </span>
              <span className="text-right">$20</span>

              <span className="">Impuesto (15%) </span>
              <span className="text-right">$2.2</span>

              <span className="mt-5 text-2xl">Total:  </span>
              <span className="mt-5 text-2xl text-right">$2.2</span>

            </div>

            <div className="mt-5 mb-2 w-full">

              <div className={
                clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    'bg-red-500 ': false,
                    'bg-green-700': true
                  }
                )
              }>
                <IoCartOutline size={30} />
                {/* <span className="mx-2">Pendiente de Pago</span> */}
                <span className="mx-2">Order Pagada de Pago</span>
              </div>

            </div>

          </div>


        </div>


      </div>

    </div>
  );
}