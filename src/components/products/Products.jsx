
import ProductsHeader from './productsheader/ProductsHeader'
import ProductList from './productlist/ProductList'

function Products({products,addCart}) {


  return (
    <div className='container'>
      <ProductsHeader products={products}/>
      <ProductList products={products} addCart={addCart}/>
    </div>
  )
}

export default Products
