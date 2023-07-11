import React from 'react'
import './Style.css'

function Product({product}) {
  return (

    
    <div class="container2">
    <div class="products">
       <div class="product">
         
           <div class="image">
               <img src={product.imgdata} alt="{item.images}"/>
             </div>
           <div class="namePrice">
               <h3>{product.rname}</h3>
               <span>{product.price}&euro;</span>
           </div>
           <p>{product.rating}</p>
           <div class="bay">
               <button > bay now </button>
           </div>
   
       </div> 
       </div>   
    </div>
  )
}

export default Product