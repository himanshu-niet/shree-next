import React from 'react'
import Product from './Product'

const HomeProduct = () => {

  const data=[1,2,3,4,5,6,7,8]

  return (
    <div className="row isotope-grid">
     
    {data.map((item,idx)=>{
      return(<Product item={item}/>)
    })}
      
     
    </div>
  )
}

export default HomeProduct