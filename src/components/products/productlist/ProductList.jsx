
import SingleProduct from './singleproduct/SingleProduct'


function ProductList({products,addCart}) {

    
  return (
    <div className="thumb-wrapper">
      {products.map(product => {
        return (
          <SingleProduct key={product.id} title={product.title} price={product.price} image={product.image} addCart={addCart} />
        )
        
    })}
     </div>
  )
}

export default ProductList
