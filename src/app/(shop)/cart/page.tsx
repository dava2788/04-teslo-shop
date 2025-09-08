import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function CartPage() {


  // redirect('/empty');


  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">
        <Title title={"Carrito"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl"> Agregar mas Items </span>
            <Link href={"/"} className="underline mb-5" >
              Continua Comprando
            </Link>


            {/* Items del Carrito */}
            {
              productsInCart.map(p => (
                <div key={p.slug} className="flex mb-5">

                  <Image src={`/products/${p.images[0]}`} alt={p.title} width={100} height={100} className="mr-5 rounded" style={{ width: '100px', height: '100px' }} />

                  <div>
                    <p>{p.title}</p>
                    <p>${p.price}</p>
                    <QuantitySelector quantity={3} />
                    <button className="underline mt-3"> Remover </button>
                  </div>

                </div>
              ))
            }

          </div>

          {/* Checkout -Resumen De Orden */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">

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

              <Link className="flex btn-primary justify-center" href={'/checkout/address'}>
                Checkout
              </Link>

            </div>

          </div>


        </div>


      </div>

    </div>
  );
}