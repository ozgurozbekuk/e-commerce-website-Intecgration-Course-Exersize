import React from 'react'
import Results from './results/Results'
import Close from './close/Close'

function ProductsHeader({products}) {
  return (
    <div className="sub-header">
      <Results products={products}/>
      <Close/>
    </div>
  )
}

export default ProductsHeader
