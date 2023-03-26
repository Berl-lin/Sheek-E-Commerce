import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fas fa-map-marker-alt'></i>
            <label>Deliver to Ghana </label>
             <div> 
             <label> -- -Accra </label >
             </div>
          </div>
          <div className='center row CText'>
          <marquee width="60%" direction="right" height="20px">
            <i className='fa-duotone fas fa-umbrella'></i>
            The rains are coming, get your SHEEK on! 
             </marquee>
            </div>
          <div className='right row RText'>
             <i className='fa fa-toggle-on'></i>
             <i className='fa fa-question-circle'></i>
          <label>Live Users</label>
            <div> 
             <label>200</label >
             </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Head
