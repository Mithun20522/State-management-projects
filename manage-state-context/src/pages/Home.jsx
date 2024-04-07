import React, { useContext, useEffect, useState } from 'react'
import Product from '../components/Product'
import ProductContext from '../context/product/productContext.js';

const Home = () => {
  const {prodData, setProdData} = useContext(ProductContext);

  useEffect(() => {
    const getProducts = async() => {
      const res = await fetch('https://fakestoreapi.com/products?limit=20');
      const data = await res.json();
      setProdData(data);
    }
    getProducts();
  },[])

  return (
    <section className='flex flex-wrap p-5 gap-5 w-full items-center justify-center'>
      {
        prodData && prodData.map((product) => (
            <Product key={product.id} product = {product}/>
        ))
      }
    </section>
  )
}

export default Home