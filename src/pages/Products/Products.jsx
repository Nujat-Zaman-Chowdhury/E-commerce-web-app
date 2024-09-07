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
            <div>
            <div className='flex-1 grid grid-cols-1 gap-6 lg:grid-cols-3 '>
                {
                    products.map(product=><ProductCard key={product.id} product={product}/>)
                }
            </div>
            {/* pagination btn */}
        <div className="flex items-center justify-center space-x-1 mt-[64px]">
    {/* Previous Button */}
    <button className="px-4 py-2 text-gray-500 bg-[#C4CDD5] rounded-md cursor-not-allowed">
        &lt;
    </button>
    
    {/* Page Numbers */}
    <button className="px-4 py-2 text-black border border-gray-300 rounded-md bg-white">
        1
    </button>
    <button className="px-4 py-2 text-gray-500 border border-gray-300 rounded-md bg-white">
        2
    </button>
    <span className="px-1 lg:px-4 py-2">...</span>
    <button className="px-4 py-2 text-gray-500 border border-gray-300 rounded-md bg-white">
        9
    </button>
    <button className="px-4 py-2 text-gray-500 border border-gray-300 rounded-md bg-white">
        10
    </button>

    {/* Next Button */}
    <button className="px-4 py-2 text-gray-500 bg-gray-200 rounded-md">
        &gt;
    </button>
</div>
            </div>
        </div>
        
        

        </div>
    );
};

export default Products;