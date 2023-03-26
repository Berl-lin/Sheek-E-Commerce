import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Speed Delivery",
      decs: "All Deliveries in 72-hours Accra only. We will be coming to you soon.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence",
      decs: "Your safety is our priority. Shop knowing we've got you covered.",
    },
    {
      cover: <i class='fa fa-credit-card'></i>,
      title: "Multiple Payment Options",
      decs: "Our options range from Cash on delivery, Momo, to VISA.",
    },
    {
      cover: <i class='fa fa-thumbs-up'></i>,
      title: "Awesome Reviews",
      decs: "Speed Delivery & 24/7 Support - We are the best choice!",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
