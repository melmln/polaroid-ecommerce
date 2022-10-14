import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


import './Cart.css'



const Cart = () => {
    const {cart, clear, remove, totalPrice} = useContext(CartContext);
    console.log(cart)
  

  return (
      <div>
        <Link to={'/products'}>
            <button className="back-btn">
                <i className="fa-solid fa-chevron-left"></i>
            </button>
        </Link>
         <div className="cart-items-count">
            <h1>Your Bag</h1> 
            <div className="clear-btn-container"> 
                <button className="clear-btn" onClick={clear}>
                <i className="fa-solid fa-arrow-rotate-right"></i>
                </button>
            </div>

        </div>
        <table>
            <tbody>
            <tr>
                <th></th>
                <th>Product</th>
                <th>Item</th>
                <th>Price</th>
            </tr>
            </tbody>
        </table>
        {cart.length === 0 ?
            <div className="empty-container">
                <div className="empty-message">Your bag is empty 🙁</div>
                <Link to={'/products'} style= {{textDecoration: 'none', color: 'whitesmoke'}}>
                    <button className="shop-btn">Shop Now</button>
                </Link>
            </div>

            : cart.map((item => (
                <div key={item.title} className="cart">
                    <div className= 'cart-container'>
                        <div className="cart-card">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="td-img">
                                            <img src={item.img} alt={item.id} />
                                        </td>
                                        <td>
                                            <h2>{item.title}</h2>
                                        </td>
                                        <td>
                                            {item.amount}
                                        </td>
                                        <td>
                                            <h3>€{item.price}</h3>
                                        </td>
                                        <td className="delete-td">
                                            <button className="delete-btn" onClick={() => remove(item.title)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )))
        }
        {cart.length !== 0 ?  
        <div className = 'total-container'> 
            <span>Total</span>
            <div className="total">€{(totalPrice).toFixed(2)}</div>
            <Link to={'/form'}>
                 <button>Finish order</button>
            </Link>
        </div> : 
        ''}
    </div>
  )
}

export default Cart;