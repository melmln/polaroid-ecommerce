import './Form.css'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc, getFirestore} from "firebase/firestore";
import {Toaster} from 'react-hot-toast';
import {toast} from 'react-hot-toast'
import moment from "moment/moment";


const Form = () => {
    const {cart,totalPrice,clear} = useContext(CartContext);
    // Seteo mi estado inicial como un array que contiene al objeto buyer: tiene los campos a rellenar vacios
    // y los productos del cart (items), el precio total y la fecha
    
    const db = getFirestore();
    
    
    const [order, setOrder] = useState({
        buyer: {
            name: '',
            phone: '',
            email: ''
        },
        items: cart, 
        total: totalPrice,
        date: moment().format('DD/MM/YYYY, h:mm:ss a'),
    })
        
    // Función que genera orden y lo guarda en la collection orders
    const createOrder = () => {
        const queryCollection = collection(db, 'orders');

        addDoc(queryCollection, order)
            .then(({id}) => {
                toast(`💳 Your purchase was generated successfully. Order code: ${id}`, {
                    style: {
                        padding: '20px',
                        fontSize: '17px',
                        fontWeight: '500'
                    },
                })
            })
            .catch(() => toast.error('Ups! 😅 Your purchase cannot be processed. Try it later.', {
                style: {
                    padding: '10px',
                },
            }))

            setTimeout(() => {
                setOrder({
                    buyer: {
                        name: '',
                        phone: '',
                        email: ''
                    },
                })  
                clear();
            }, 1000);
    }
    
    // Función que actualiza los cambios en el input del form
    const handleChange = (e) => {
        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                // Focaliza el nombre del input (name, phone, email)
                [e.target.name]: e.target.value,
            },
          
        });
    };


  return (
    <>
        <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
            duration: 5000
        }}/>

        <div className='form-principal-container'>
            <h2 className='form-message'>Almost done! Complete your contact info to finish your order. </h2>
            <img src="https://media3.giphy.com/media/xT1XGwp3lMHLBTNvFe/giphy.gif?cid=790b76110ff9440dee96dc5856b4bf7cfef434c48b8ff935&rid=giphy.gif&ct=g" alt="" />
           
            <div className='form-container'>
                <form action="">
                    <div className='input-container'>
                        <label htmlFor="">Name</label>
                        <input className='form-input' type="text" name="name" id="name-input" 
                        value={order.buyer.name} 
                        onChange={handleChange}
                        />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="">Phone</label>
                        <input className='form-input' type="number" name="phone" id="phone-input" 
                        value={order.buyer.phone} 
                        onChange={handleChange}
                        />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="">Email</label>
                        <input className='form-input' type="email" name="email" id="email-input" 
                        value={order.buyer.email} 
                        onChange={handleChange}
                        />
                    </div>
                    <div className='btn-form'>
                        <button onClick={createOrder} type='button'>Finish</button>
                    </div>
      
                </form>
            </div>
        </div>
    </>
  )
}

export default Form;