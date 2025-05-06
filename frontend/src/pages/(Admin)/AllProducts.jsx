import React, { useEffect, useState } from 'react';
import UploadProducts from '../../components/(Admin)/UploadProducts';
import SummaryApi from '../../common';
import AdminProductCard from '../../components/UI/AdminProductCard';

const AllProducts = () => {

  const [allProductsData , setAllProductsData]=useState([]);

  const fetchAllProducts = async ()=> {
    const responseData = await fetch(SummaryApi.GetAllProduct.url)

    const result = await responseData.json()

    setAllProductsData(result.data)
  }

  useEffect(() => {
      fetchAllProducts()
  }, [])
  
 
  return (
    <div className='md:pl-80'>
      <div className=''>
        <div className='flex-between bg-white p-5'>
          <h1>All Products</h1>
          <UploadProducts fetchAll={fetchAllProducts} />

        
        </div>
        <div className="flex items-center gap-5">
              {
                allProductsData?.map(product => (
          <AdminProductCard data={product} key={product?._id} fetchAll={fetchAllProducts} />
                ))
              }
          </div>
      </div>
    </div>
  );
};

export default AllProducts;
