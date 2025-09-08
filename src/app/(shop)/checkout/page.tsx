import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">
        <Title title={"Veficar Orden"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl"> Ajustar Elementos </span>
            <Link href={"/cart"} className="underline mb-5" >
              Editar Carrito
            </Link>


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
              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs">
                  A Hacer click en &quot;Colocar Orden&quot; aceptas nuestros <a href="#" className="underline">Terminos y condiciones</a> y <a href="#" className="underline">Politica de Privacidad</a>
                </span>
              </p>

              <Link className="flex btn-primary justify-center" href={'/orders/123'}>
                Colocar Order
              </Link>

            </div>

          </div>


        </div>


      </div>

    </div>
  );
}