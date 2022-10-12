import './ItemCount.css'

/* 
Creo componente ItemCount y desestructuro para pasar parametros. En App.js especifico las const y las funciones.
Paso como props las funciones a los componentes necesarios.
*/

const ItemCount = ({count, setCount}) => {
  const stock = 20
  const addition = () => count < stock ? setCount(count + 1) : console.log('We are out of stock for this product')
  const substraction = () => count > 0 ? setCount(count - 1) : console.log('Add at least one item')

  
  return (
    
    <div className="counter-container">
        <div className="stock-title">Stock: {stock}</div>
        <div className="counter">
          <button onClick={substraction} className= 'subs-button'><i className="fa-sharp fa-solid fa-circle-minus"></i></button>
          <div> {count} </div>
          <button onClick={addition} className = 'add-button'><i className="fa-sharp fa-solid fa-circle-plus"></i></button>
        </div>
    </div>
  )
}

export default ItemCount;