import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

export default function CartProvider({children}) {

  const [cart, setCart] = useState([])
  const [subtotal, setSubtotal] = useState([])
  const [frete, setFrete] = useState([])
  const [total, setTotal] = useState([])

  useEffect(() => {
    let subtotal = 0
    let frete = 0
    let total = 0

    cart.map(Product => {
      subtotal += Product.price
    })

    cart.map(() => {
      frete = cart.length * 10
    })

    cart.map(() => {
      total = subtotal + frete
    })
    
    if(frete > 250) {
      frete = 0
    }
    
    setSubtotal(subtotal.toFixed(2))
    setFrete(frete)
    setTotal(total)
  },[cart])


  function add(Product) {
    const newCart = cart
    newCart.push(Product)

    setCart([...newCart])
  }

  function del(Product) {
    const newCart = cart
    newCart.pop(Product)

    setCart([...newCart])
  }

  const store = {
    add,
    del,
    cart,
    subtotal,
    frete,
    total
  }

  return (
    <CartContext.Provider value={store}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  const { add, del, cart, subtotal, frete, total } = context

  return {
    add, del, cart, subtotal, frete, total
  }

}