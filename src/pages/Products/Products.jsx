import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
    const [products,setProducts]= useState([])

    useEffect(()=>{
        window.scroll(0,0)
    },[])

    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setProducts(data)
        })
    },[])

    return (
        <div className='container mx-auto mt-[80px]'>
            <div className='flex flex-col md:flex-row gap-10 '>
            <Sidebar/>
            <div className='flex-1 grid grid-cols-1 gap-6 lg:grid-cols-3 '>
                {
                    products.map(product=><ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
        
        </div>
    );
};

export default Products;