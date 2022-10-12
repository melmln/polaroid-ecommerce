import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import loadingIcon from '../../../src/loadingIcon.svg'
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'


const ItemListContainer = () => {

  // Orden: 1° useState, 2° useEffect
  
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();

  
  const getProducts = new Promise ((resolve, reject) => {

    // FIREBASE
    // 1° inicializo mi base de datos
    const db = getFirestore();
    // 2° configuro mi query: paso la base de datos y la collection que quiero, por ej items
    const queryCollection = collection(db, 'items');
    // Filtrado por categoría
    // Si la categoría existe
    setTimeout(() => {
        const queryCategory = category ? query(queryCollection,
        where('category', '==', category)) : queryCollection
      
        getDocs(queryCategory)
        
        .then((response) => {
          const data = response.docs.map((product) => {
            return {id: product.id, ...product.data()};
          });
          resolve(data);
        });
    }, 1000);
  }) 

  
  useEffect(() => {
      getProducts
      .then((response) => {
        setProductList(response)
      })
      .finally(() =>
      {
        setLoading(false)
      });
    },[category]);



    
  return (
      <>
        <div>
          {
            loading ? <div className='loading-container'><img height={'160px'} src= {loadingIcon} /></div> : 

            (category === 'instant-film'? (
                <img className="banner" width={'100%'} src="https://cdn.sanity.io/images/66aqnbcn/production/2b5aec952070bc3c43b81b49d040190c9cc0fef4-1800x700.jpg?w=3840&q=75&fit=clip&auto=format"/>
              ) : 
              (
                (category === 'accessories'? (
                  <img className="banner" width={'100%'} src="https://cdn.sanity.io/images/66aqnbcn/production/1356238c9346791f21d152d97a08e6e98e818967-1800x700.jpg?w=3840&q=75&fit=clip&auto=format"/>
                ) : 
                
                (
                  (category === 'instant-cameras' ? (
                    <img width={'100%'} src='https://cdn.sanity.io/images/66aqnbcn/production/ff850e83b6193e6b4122e877df101e7c3e0bbd6a-1800x700.jpg?w=3840&q=75&fit=clip&auto=format'/>
                  ) : '')
                
                ))
              ))
            
          }
        </div>  
        <ItemList productList = {productList}/>
      </>

  )
}

export default ItemListContainer;

