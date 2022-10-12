import banner from '../../banner.mp4'
import './Banner.css'

const Banner = () => {
  return (
    <div className='home-banner'>
        <video loop autoPlay muted>
          <source src={banner}></source>
        </video>
      </div>
  )
}

export default Banner;