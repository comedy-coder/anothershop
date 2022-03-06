import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products = useSelector(state => state.allProducts.products)
  
  console.log(products)
  return (
    <div className="four column wide">
      <div className="ui link card">
  <div className="image">
    <img  />
  </div>
  <div className="content">
    <div className="header">{products.title}</div>
    <div className="meta">
      <span className="date">Joined in 2013</span>
    </div>
    <div className="description">
      Kristy is an art director living in New York.
    </div>
  </div>
  <div className="extra content">
    <a href='/'>
      <i className="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
     </div>
     
  )
}

export default ProductComponent