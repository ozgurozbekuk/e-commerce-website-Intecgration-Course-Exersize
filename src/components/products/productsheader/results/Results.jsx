import React from 'react'

function Results({products}) {

  return (
        <h2 className="title">
          Products<span style={{fontSize:"25px"}}>{products.length}</span>
        </h2>
        
  )
}

export default Results
