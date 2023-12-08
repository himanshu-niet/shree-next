import React from 'react'
import Product from './Product'

const HomeProduct = () => {

  const data=[
  {
    src:"images/item1.jpg",
    price:5000
  },
  {
    src:"images/item2.jpg",
    price:4500
  },
  {
    src:"images/item3.jpg",
    price:5550
  },
  {
    src:"images/item4.jpg",
    price:6400
  },

  {
    src:"images/item5.jpg",
    price:12000
  },
  {
    src:"images/item6.jpg",
    price:2000
  },
  {
    src:"images/item7.jpg",
    price:3650
  },
  {
    src:"images/item8.jpg",
    price:7850
  },
 

  ]

  return (
    <div className="row isotope-grid">
     
    {data.map((item,idx)=>{
      return(<Product item={item}/>)
    })}
      
     
    </div>
  )
}

export default HomeProduct