import React from 'react';

const Sidebar = () => {
    return (
        <div className='w-[263px]'>
            <div className='flex flex-col gap-3'>
                <button className='btn bg-white font-barlow text-[#717171] font-medium'>Rocking Chair</button>
                <button className='btn bg-white font-barlow text-[#717171] font-medium'>Side Chair</button>
                <button className='btn bg-white font-barlow text-[#717171] font-medium'>Lounge Chair</button>
            </div>
        </div>
    );
};

export default Sidebar;