import Item from "../Item/Item";
import './ItemList.css'
import { Link } from "react-router-dom";

const ItemList = ({productList}) => {
  return (
    <div className="card-container">
      {productList.map((product) => (

          <Link style={{textDecoration: 'none', color: 'black'}}
            to={'/products/detail/' + product.id}
            key = {product.id}>
            <Item 
            title = {product.title} 
            price = {product.price} 
            img = {product.img} 
            />
          </Link>

        ))}
    </div>
  )
}

export default ItemList;




