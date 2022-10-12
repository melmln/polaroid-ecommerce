// Le paso la prop detail y hago el return del detail.map
import ItemCount from "../../pages/ItemListContainer/ItemCount/ItemCount"
import { useState, useContext} from "react"
import './ItemDetail.css'
import { Link } from "react-router-dom"
import loadingIcon from '../../loadingIcon.svg'
import { CartContext } from "../../context/CartContext"
import {Toaster} from 'react-hot-toast'


const ItemDetail = ({detail}) => {

  const [count, setCount] = useState(1);
  
  const [loading, setLoading] = useState(true);
  const {addToCart} = useContext(CartContext); // Acá estoy usando la función addToCart que viene del CartContext

  const onAdd = (detail) => {
    addToCart(detail, count)
  }


  return (
    <>
    <Toaster
     position="top-left"
     reverseOrder={false}
    />
       {detail.title ? 

       <div className="card-detail-container">

          <div className="card-detail">
            
              <div className="preview">
                <div className="img-container">
                  <img src={detail.img} alt={detail.id} />
                </div>

                { count < 20 &&  <ItemCount count = {count} setCount = {setCount}/>}
                
                  <div className="add-bag-container">
                    <button onClick={() =>{onAdd(detail)}} className="add-bag">Add to bag </button>                    
                  </div>

                <Link to= '/products'>
                  <button className="back-btn-detail">
                    <i className="fa-solid fa-chevron-left back-i"></i>
                  </button>
                </Link>

              </div>

              <div className="detail">
                  <h2>{detail.title}</h2>
                  <h3>€{detail.price}</h3>
                  <p>{detail.description}</p>
                  <div className="especs">{detail.especs}</div>
              </div> 

            </div>

       </div> : (loading ? <div className='loading-container'><img src= {loadingIcon} /></div> : '')}
    </>
  )
}

export default ItemDetail