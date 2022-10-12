import './Gallery.css'
const Gallery = ({img}) => {
  return (
    <div className='image-container'>
      <img src={img} alt="" />  
    </div>
  )
}

export default Gallery