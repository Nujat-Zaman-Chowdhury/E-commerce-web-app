import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
    return (
        <div className='container mx-auto flex gap-10 mt-[80px]'>
            <Sidebar/>
            <div className='flex-1 grid grid-cols-1 gap-6 lg:grid-cols-3 '>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
};

export default Products;