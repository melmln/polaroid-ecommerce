import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import CartProvider from './context/CartProvider'

// Components 
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/NavBar/CartWidget/CartWidget';
import ItemListContainer from '../src/pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/pages/ItemDetailContainer/ItemDetailContainer';
import Home from './pages/Home/Home';
import GalleryContainer from './pages/GalleryContainer/GalleryContainer';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import Form from './pages/Form/Form';

function App() {
  const [products, setItems] = useState(0)
 
  return (
    <CartProvider>
      <BrowserRouter>
        <>
          <header>
            <div className='logo-container'>
              <Link to={'/'}><img src={logo}/></Link>
            </div>
           <NavBar/>
          <NavLink to={'/cart'} style={{textDecoration: 'none', color:'black'}}>
              <CartWidget products = {products} />
          </NavLink>
          </header>
          <Routes>
            <Route path='/gallery' element={<GalleryContainer/>}/>
            <Route path='/' element = {<Home/>}/>
            <Route path = '/products' element = {<ItemListContainer/>} />
            <Route path = '/products/detail/:id' element = {<ItemDetailContainer/>} />
            <Route path='category/:category' element= {<ItemListContainer/>}/>
            <Route path= '/cart' element = {<Cart/>}/>
            <Route path= '/cart' element = {<CartWidget/>}/>
            <Route path='/form' element= {<Form/>}/>
          </Routes>
          <Footer/>
        </>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
