import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async() => {
      const res = await fetch('https://fakestoreapi.com/products?limit=6');
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  },[])

  return (
    <section className='flex flex-wrap p-5 gap-5 w-full items-center justify-center'>
        <Product/>
        <Product/>
        <Product/>   
    </section>
  )
}

export default Home