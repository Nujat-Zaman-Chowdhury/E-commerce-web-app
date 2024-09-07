import React from 'react';

const Sidebar = () => {
    return (
        <div className='w-[200px] md:w-[263px] mx-auto'>
            <div className='flex flex-col gap-3'>
                <button className='btn bg-black font-barlow text-white font-medium shadow-none border-none'>Rocking Chair</button>
                <hr className='bg-[#F4F4F4]'/>
                <button className='btn bg-white font-barlow text-[#717171] font-medium shadow-none border-none'>Side Chair</button>
                <hr className='bg-[#F4F4F4]'/>
                <button className='btn bg-white font-barlow text-[#717171] font-medium shadow-none border-none'>Lounge Chair</button>
            </div>
        </div>
    );
};

export default Sidebar;