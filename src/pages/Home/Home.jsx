import Banner from '../../components/Banner/Banner'
import { useEffect, useState } from 'react';
import {  getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {

  const [mainProducts, setMainProducts] = useState([]);

  useEffect(() => {
    getMainProducts()
  }, []);
  

  const getMainProducts = () => {
    const db = getFirestore();
    const queryCollection = collection(db, 'items');
    const queryFilter = query(queryCollection, where('main', '==', true));
    getDocs(queryFilter)
    .then(response => {
      const data = response.docs.map(item => ({id: item.id, ...item.data()}));
      setMainProducts(data);
    });

  };

  return (
        
          <>
            <Banner/>
            <div className='card-home-container'>
              <div className='main-message'>Our favorites products from Polaroid's collection</div>
            {mainProducts.map((item) => {
              return (
                <Link style={{textDecoration: 'none', color: 'black'}}
                  to={'/products/detail/' + item.id}
                  key = {item.id}>

                  <div className='card-home'>
                    <img width = {'200px'} src={item.img} alt= {item.title} />
                    <h2>{item.title}</h2>
                    <h3>€{item.price}</h3>
                  </div>

                </Link>
              )
            })}
            </div>
          </>   
        
  )
}

export default Home;