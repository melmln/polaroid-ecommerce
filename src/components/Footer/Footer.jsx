import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer-elements-container'>

            <div className="footer-message">
              <h1>We’re here to help.</h1>
              <h3><span>Get in touch</span> with our customer service team</h3>
            </div>

            <div className="footer-links-container">

              <div className="footer-links">
                <ul>
                  <li>Gift Cards</li>
                  <li>Careers</li>
                  <li>Collaborations</li>
                  <li>Our Brands</li>
                </ul>
              </div>

              <div  className="footer-links">
                <ul>
                  <li>Affiliate Program</li>
                  <li>Polaroid Loyalty Program</li>
                  <li>Customer Service</li>
                </ul>
              </div>

            </div>


        </div>
            <div className='social-container'>

                <a href="https://twitter.com/polaroid" target={'_blank'}>
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/polaroid/" target={'_blank'}>
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/c/PolaroidOfficial" target={'_blank'}>
                  <i className="fa-brands fa-youtube"></i>
                </a>

            </div>
            <span className="copyright">©2022 Melany Molina Verdún.</span>
  </footer>
  )
}

export default Footer