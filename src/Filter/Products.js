import React from 'react'
import Product from '../Filter/Product'

function Products(props) {
  return (
    <div className='products'>
 {props.products.map(product=>(
  <Product key ={product.id} product=
  {product}/>
 ))}
   </div>
  )
}

export default Products