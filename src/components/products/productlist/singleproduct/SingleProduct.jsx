import React, { useState } from 'react'

function SingleProduct({title,price,image,addCart}) {
  
  const [liked,setLiked] = useState(false)

  function handleClick(){
    setLiked(!liked)
  }



  return (
    
        <div className="thumb-unit" >
          <div className="heading">
            <span>${price}</span>
            <span onClick={handleClick}>
              <i className={liked ? "fa fa-heart" : "fa fa-heart-o"}  />
            </span>
          </div>
          <div className="box" style={{backgroundImage:`url(${image})`}}/>
          <div className="info">
            <p>{title}</p>
            <span className="icon">
              <i className="fa fa-shopping-cart" onClick={addCart}/>
            </span>
          </div>
        </div>
      
    
  )
}

export default SingleProduct
