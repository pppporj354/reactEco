import { XMarkIcon } from "@heroicons/react/16/solid"
import "./style.css"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className="flex  justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeProductDetail()}
          />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.images[0]}
          alt={context.productToShow.title}
          onError={(e) =>
            (e.target.src = `https://picsum.photos/400/400?random=${context.productToShow.id}`)
          }
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md">
          {context.productToShow.title}
        </span>
        <span className="font-light text-sm">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  )
}

export default ProductDetail
