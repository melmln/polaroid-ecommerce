import './Item.css'
/* Este componente muestra el detalle del producto */

const Item = ({title, price, img}) => {
  
  return (
    <div className="card-item">
      <img width = {'200px'} src={img} alt= {title} />
      <h2>{title}</h2>
      <h3>€{price}</h3>
    </div>
  )
}

export default Item;

 