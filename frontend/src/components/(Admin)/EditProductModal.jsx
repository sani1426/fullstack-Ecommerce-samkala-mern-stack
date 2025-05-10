import React, { useState } from 'react';
import { Modal } from 'antd';
import {category} from '../../helpers/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from '../../helpers/uploadImage';
import DisplayImage from '../UI/DisplayImage';
import { MdDelete } from "react-icons/md";
import SummaryApi from '../../common/index';
import {toast} from 'sonner'
import { MdEdit } from 'react-icons/md';
import useFetchData from '../../hooks/useFetchData';



const EditProductModal = ({
    productData,
    fetchdata
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const [data,setData] = useState({
    ...productData,
    productName : productData?.productName,
    brandName : productData?.brandName,
    category : productData?.category,
    productImages : productData?.productImages || [],
    description : productData?.description,
    price : productData?.price,
    sellingPrice : productData?.sellingPrice
  })


  const [openFullScreenImage,setOpenFullScreenImage] = useState(false)
  const [fullScreenImage,setFullScreenImage] = useState("")

  
  const handleOnChange = (e)=>{
    const { name, value} = e.target

    setData((preve)=>{
      return{
        ...preve,
        [name]  : value
      }
    })
}


const handleUploadProduct = async(e) => {
    const file = e.target.files[0]
    const uploadImageCloudinary = await uploadImage(file)

    setData((preve)=>{
      return{
        ...preve,
        productImages : [ ...preve.productImages, uploadImageCloudinary.url]
      }
    })
  }


  const handleDeleteProductImage = async(index)=>{
 
    
    const newProductImage = [...data.productImages]
    newProductImage.splice(index,1)

    setData((preve)=>{
      return{
        ...preve,
        productImages : [...newProductImage]
      }
    })
    
  }

  
  {/**upload product */}
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const {responseData} = await useFetchData(`${SummaryApi.EditProduct.url}/${productData._id}` ,SummaryApi.EditProduct.method , data)

    if(responseData.success){
        toast.success(responseData?.message)
        handleOk()
        fetchdata()
    }


    if(responseData.error){
      toast.error(responseData?.message)
    }
  

  }



  return (
    <>
      <button   className='cursor-pointer rounded-full bg-green-100 p-2 transition-all hover:bg-green-500 hover:text-white' onClick={showModal}>
        <MdEdit  />
      </button>
      <Modal
        title='Edit Product'
        open={isModalOpen}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >

       <form className='grid p-4 gap-2  pb-5' onSubmit={handleSubmit}>
         <label htmlFor='productName'>Product Name :</label>
         <input 
           type='text' 
           id='productName' 
           placeholder='enter product name' 
           name='productName'
           value={data.productName} 
           onChange={handleOnChange}
           className='p-2 bg-slate-100 border rounded'
           required
         />


         <label htmlFor='brandName' className='mt-3'>Brand Name :</label>
         <input 
           type='text' 
           id='brandName' 
           placeholder='enter brand name' 
           value={data.brandName} 
           name='brandName'
           onChange={handleOnChange}
           className='p-2 bg-slate-100 border rounded'
           required
         />

           <label htmlFor='category' className='mt-3'>Category :</label>
           <select required value={data.category} name='category' onChange={handleOnChange} className='p-2 bg-slate-100 border rounded'>
               <option value={""}>Select Category</option>
               {
                 category.map((el,index)=>{
                   return(
                     <option value={el.value} key={el.value+index}>{el.lable}</option>
                   )
                 })
               }
           </select>

           <label htmlFor='productImage' className='mt-3'>Product Image :</label>
           <label htmlFor='uploadImageInput'>
           <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
                     <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                       <span className='text-4xl'><FaCloudUploadAlt/></span>
                       <p className='text-sm'>Upload Product Image</p>
                       <input type='file' id='uploadImageInput'  className='hidden' onChange={handleUploadProduct}/>
                     </div>
           </div>
           </label> 
           <div>
               {
                 data?.productImages[0] ? (
                     <div className='flex items-center gap-2'>
                         {
                           data.productImages.map((el,index)=>{
                             return(
                               <div className='relative group'>
                                   <img 
                                     src={el} 
                                     alt={el} 
                                     width={70} 
                                     height={70}  
                                     className='bg-slate-100 border cursor-pointer'  
                                     onClick={()=>{
                                       setOpenFullScreenImage(true)
                                       setFullScreenImage(el)
                                     }}/>

                                     <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer' onClick={()=>handleDeleteProductImage(index)}>
                                       <MdDelete/>  
                                     </div>
                               </div>
                               
                             )
                           })
                         }
                     </div>
                 ) : (
                   <p className='text-red-600 text-xs'>*Please upload product image</p>
                 )
               }
               
           </div>

           <label htmlFor='price' className='mt-3'>Price :</label>
           <input 
             type='number' 
             id='price' 
             placeholder='enter price' 
             value={data.price} 
             name='price'
             onChange={handleOnChange}
             className='p-2 bg-slate-100 border rounded'
             required
           />


           <label htmlFor='sellingPrice' className='mt-3'>Selling Price :</label>
           <input 
             type='number' 
             id='sellingPrice' 
             placeholder='enter selling price' 
             value={data.sellingPrice} 
             name='sellingPrice'
             onChange={handleOnChange}
             className='p-2 bg-slate-100 border rounded'
             required
           />

           <label htmlFor='description' className='mt-3'>Description :</label>
           <textarea 
             className='h-28 bg-slate-100 border resize-none p-1' 
             placeholder='enter product description' 
             rows={3} 
             onChange={handleOnChange} 
             name='description'
             value={data.description}
           >
           </textarea>





           <button className='px-3 py-2 text-white mb-10 my-hover'>Update Product</button>
       </form> 



   
 



    {/***display image full screen */}
    {
     openFullScreenImage && (
        <DisplayImage onClose={setOpenFullScreenImage} imgUrl={fullScreenImage} />
     )
    }
     


      </Modal>
    </>
  );
};
export default EditProductModal;
