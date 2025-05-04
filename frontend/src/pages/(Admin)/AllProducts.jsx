import React, { useState } from 'react';
import UploadProducts from '../../components/(Admin)/UploadProducts';

const AllProducts = () => {
 
  return (
    <div className='md:pl-80'>
      <div>
        <div className='flex-between bg-white p-5'>
          <h1>All Products</h1>
          <UploadProducts />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
