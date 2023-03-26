import React from "react"
import logo1 from "../../components/assets/images/logo1.svg"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
        <div className='box'>
              <img src={logo1} alt='' />
              <p>At Sheek we offer only the best <br></br>
               of brands. We understand the <br></br> 
               challenge of purchasing legit brands<br></br> 
               in Ghana and were here to solve that.<br></br>
              A one-stop shop for all. </p> 

              <button className='btn-primary'>Subscribe</button> 
              <p>Learn about new affoers, arrivals, and get <br></br>more by joining our newsletter, thank you!</p>
              </div>

          <div className='box'>
            <h2>Company</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Support</h2>
            <ul>
              <li>How-tos & FAQs</li>
              <li>Track Your Order</li>
              <li>Partners - Entities & Bulk Purchasing</li>
              <li>Help Centre</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>
          
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>West Legon, 384 Street, GA23-2537 </li>
              <li>Email: hello@sheek.com</li>
              <li>Phone: +233 000 000 0000</li>
            </ul>
        
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
                </div>
              </div>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
