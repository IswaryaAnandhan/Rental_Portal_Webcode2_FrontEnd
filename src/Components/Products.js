import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Config } from './Config'
import Loading from './Loading';
import ProductCard from './ProductCard';

function Products() {
  const [product,setProduct]=useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(()=>{
    Prod()
  },[])
  let Prod=async()=>{
    setLoading(true);
    let prods = await axios.get(`${Config.api}/ProductsList`)
    setProduct(prods.data);
    setLoading(false);
  }
  return (
    <div className='container'>
    <div className='row'>
    {isLoading? <Loading/>:<>{
        product.map((items)=>{
          return <ProductCard item={items}/>
        })
      }</>}
      
    </div>
    </div>
  )
}

export default Products