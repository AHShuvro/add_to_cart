import React from 'react'
import { products } from '../data/products'
import ProductCart from '../components/ProductCart'

function Home() {
  return (
    <div>
      <h1 className='text-3xl my-4'>List Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
      {
        products.map((product, idx) => (
          <div key={idx}>
            <ProductCart product={product} />
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Home