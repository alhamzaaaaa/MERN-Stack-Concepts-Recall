import React from 'react';
import CartItem  from "./CartItem.jsx"

function Cart({ cart, onUpdateQuantity, onRemove, total }) {

  if (cart.length === 0) {

    return (
      <div>
        This Cart is Empty.
      </div>
    )
  }

  return (
       <div>
        <h2>Shopping Cart</h2>
        {cart.map((item) => (
          <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
          />
        ))}

        <div>
          <h3>
          Total: ${typeof total === "string" ? total : total.toFixed(2)}
          </h3>
          <button className='bg-gray-700 rounded-xl border-gray-300 hover:bg-amber-500 transition-all ease-in-out duration-300'>Checkout</button>
        </div>
       </div>
  )
}
export default Cart
