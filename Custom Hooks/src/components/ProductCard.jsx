import { FaShoppingCart } from "react-icons/fa"


function ProductCard ({ product, onAddToCart }) {
  return (
    <div className="bg-amber-100 rounded-xl">
      <h3 className="text-gray-400 font-medium">{product.name}</h3>
      <p className="text-gray-900 font-medium">${product.price}</p>
      <button onClick={() => onAddToCart (product)}>

        <FaShoppingCart/> Add To Cart

      </button>
      
    </div>
  )
}

export default ProductCard
