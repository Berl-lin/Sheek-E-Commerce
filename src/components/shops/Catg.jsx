import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Sony",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-3.png",
      cateName: "Samsung",
    },
    {
      cateImg: "./images/category/cat-4.png",
      cateName: "HP",
    },
    {
      cateImg: "./images/category/cat-5.png",
      cateName: "PlayStation",
    },
    {
      cateImg: "./images/category/cat-6.png",
      cateName: "LG",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>Check Out All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
