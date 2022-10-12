import { Link } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import './GalleryList.css'


const GalleryList = ({galleryList}) => {
    return (
        <div className="gallery-list">
        {
            galleryList.map((images) => (
                    <Link key={images.category} to={'/gallery'}>
                        <Gallery img = {images.img}/>
                    </Link>
            ))
        }
        </div>
    )
}

export default GalleryList;