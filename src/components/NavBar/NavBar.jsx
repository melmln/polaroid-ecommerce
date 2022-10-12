import './NavBar.css'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

        return (
            <nav>
                <ul className="nav-list">
                    <Link to={'/products'} style={{textDecoration: 'none', color:'black'}}>
                        <li className="nav-item all">All</li>
                    </Link>
                    <NavLink to={'/category/instant-cameras'} style={{textDecoration: 'none', color:'black'}}>
                         <li className="nav-item instant-cameras">Instant Cameras</li>
                    </NavLink>
                    <NavLink to={'/category/instant-film'} style={{textDecoration: 'none', color:'black'}}>
                        <li className="nav-item instant-film">Instant Film</li>
                    </NavLink>
                    <NavLink to={'/category/accessories'} style={{textDecoration: 'none', color:'black'}}>
                        <li className="nav-item accessories">Accessories</li>
                    </NavLink>
                    <Link to={'/gallery'} style={{textDecoration: 'none', color:'black'}}>
                        <li className="nav-item gallery">Gallery</li>
                    </Link>
                </ul>
            </nav> 
            
        )
}

export default NavBar; 