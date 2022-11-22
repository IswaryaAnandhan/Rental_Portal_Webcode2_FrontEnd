import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Config } from './Config'
import ProductCard from './ProductCard';

function Products() {
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    Prod()
  },[])
  let Prod=async()=>{
    let prods = await axios.get(`${Config.api}/ProductsList`)
    setProduct(prods.data);

  }
  return (
    <div className='container'>
    <div className='row'>
      {
        product.map((items)=>{
          return <ProductCard item={items}/>
        })
      }
    </div>
    </div>
  )
}

export default Products