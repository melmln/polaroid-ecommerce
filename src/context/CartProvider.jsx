import { CartContext } from "./CartContext";
import { useState} from "react";
import {toast} from 'react-hot-toast'

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    

    // Función que va a agregar al carrito el producto especificando item y cantidad
    const addToCart = (item, amount) => {
        if (isInCart(item.title)) {
        
            // Busco si hay un item que tenga el mismo title que el que se va a agregar  
            const addProd = cart.find((e) => e.title === item.title)
            // Le sumo lo que va sumando el counter
            addProd.amount += amount; 
            // Finalmente lo seteo en el cart
            setCart([...cart]) 

            toast.success('Cart updated', {
                iconTheme: {
                    primary: 'black'
                  },
                style: {
                    padding: '15px',
                    fontSize: '17px',
                    fontWeight: '400'
                }
            })

        } else {
            setCart([...cart, {...item, amount}])
            toast.success('Item added to bag',{
                iconTheme: {
                    primary: 'black'
                  },
                style: {
                    padding: '15px',
                    fontSize: '17px',
                    fontWeight: '400'
                }
            })
        }
    }

    
    
    const isInCart = (title) => {
        return cart.some((item) => item.title === title);
    }

    // Función que limpia el carrito
    const clear = () => {
        setCart([])
    }

    // Función que borra el item del carrito
    const remove = (itemTitle) => {
        const deleteProduct = cart.filter((item) => item.title !== itemTitle);
        setCart([...deleteProduct])
        console.log(cart)
      }

      // Función que suma la cantidad de productos agregados al carrito
      const plusAmount = cart.reduce((plus, item)=> {
        return plus += item.amount;
      }, 0) 

      // Función que calcula el precio total de la compra
      const totalPrice = cart.reduce((total, item) => {
            return total += (parseFloat(item.price) * item.amount);
      }, 0)

  return (
    <CartContext.Provider value = {{cart, addToCart, clear, remove, plusAmount, totalPrice}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider