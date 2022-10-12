import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner'
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = () => {
  return (
        
          <>
            <Banner/>
            <ItemListContainer/>
          </>   
        
  )
}

export default Home;