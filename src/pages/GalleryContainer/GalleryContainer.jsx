import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GalleryList from '../../components/GalleryList/GalleryList'
import './GalleryContainer.css'

const GalleryContainer = () => {

    // Defino el estado y su update
    const [galleryList, setGalleryList] = useState([])
    // Traigo firestore
    const db = getFirestore();
    // Traigo de la base de datos la coleccion galeria
    const queryGallery = collection(db, 'gallery')
    const {category} = useParams()

    const getGallery = new Promise ((resolve, reject) =>{
    // Filtro por categoria (gallery) para iterar de a una img
        const queryCategory = category ? query(queryGallery, 
            where('img', '==', category)) : queryGallery
    // Traigo los documentos filtrados 
        getDocs(queryCategory)
        .then((response) => {
            // Defino una cte donde se guarda un objeto con todo lo que haya dentro de la data
            const galleryData = response.docs.map((image) => {
                return {...image.data()}
            });
            resolve(galleryData)
        })
    })

    // Monto la función y actualizacion del estado
    useEffect(() => {
        getGallery
        .then((response) => {
            setGalleryList(response)
        })
    }, [category])

    return (
            <div className='gallery-container'>
                {<div className='gallery-banner-container'>
                    <h2>Supporting creators </h2>
                    <img className = 'camera-gif' src="https://webstockreview.net/images/photograph-clipart-instant-camera-8.gif" alt="" />
                    <h3>with tools and stories.</h3>
            </div>}
                <GalleryList galleryList = {galleryList}/>
            </div>
    )
}

export default GalleryContainer