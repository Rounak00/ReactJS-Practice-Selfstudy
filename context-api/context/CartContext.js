import React, { createContext, useState } from 'react'

export const Cart = createContext();

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);
    console.log(cart);
    
  return (
    <Cart.Provider
        value={{
            cart,
            setCart
        }}
    >
        {children}
    </Cart.Provider>
  )
}

export default CartContext