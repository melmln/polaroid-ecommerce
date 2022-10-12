// Creo un componente de función
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {
  const {plusAmount} = useContext(CartContext)

  return (
    <>
      
        <div className="cart-i-container">
            <i className="fa-sharp fa-solid fa-bag-shopping cart-icon"></i>
            <div className='cart-badget'>{plusAmount}</div>
        </div> 
    </>
    )
}

export default CartWidget;