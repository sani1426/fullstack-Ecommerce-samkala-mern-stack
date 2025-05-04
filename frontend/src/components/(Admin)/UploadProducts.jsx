import React, { useState } from 'react';
import { Modal } from 'antd';
import { category } from '../../helpers/productCategory';
import { FaCloudUploadAlt } from 'react-icons/fa';
import uploadImage from '../../helpers/uploadImage';

const UploadModal = () => {
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

  const [data, setData] = useState({
    productName: '',
    brandName: '',
    category: '',
    productImages: [],
    description: '',
    price: '',
    selling: '',
  });

  const [uploadProductImageFile , setUploadProductImageFile]=useState("")

  const handleChange = (e) => {};

  const handleUploadImage = async (e) => {
    const file = e.target.files[0]
    setUploadProductImageFile(file.name)

    const uploadImageCloudinary = await  uploadImage(file)

    setData((preve)=>{
      return{
        ...preve,
        productImages : [ ...preve.productImages, uploadImageCloudinary.url]
      }
    })
  
    console.log(data.productImages);
   
  };
  return (
    <>
      <button className='my-hover rounded-full px-4 py-2 text-white' onClick={showModal}>
        Upload products
      </button>
      <Modal
        title='upload products'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className='my-4 flex flex-col gap-4 overflow-y-auto'>
          <div className='grid'>
            <label htmlFor='productName'>Product Name :</label>
            <input
              type='text'
              className='rounded border bg-slate-100 p-2'
              onChange={handleChange}
              id='productName'
              placeholder='enter product name ...'
              value={data.productName}
            />
          </div>

          <div className='grid'>
            <label htmlFor='brandName'>Brand Name :</label>
            <input
              type='text'
              className='rounded border bg-slate-100 p-2'
              onChange={handleChange}
              id='brandName'
              placeholder='enter brand name ...'
              value={data.brandName}
            />
          </div>

          <div className='grid'>
            <label htmlFor='category'>Category :</label>
            <select
              className='rounded border bg-slate-100 p-2'
              value={data.category}
              onChange={handleChange}
              name=''
              id=''
            >
              {category.map((item) => (
                <option key={item.id} value='item.value'>
                  {item.lable}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor='productImage'>Product Image :</label>
            <label htmlFor='uploadImage'>
              <div className='flex-center h-32 w-full cursor-pointer rounded border bg-slate-100 p-2'>
                <div className='flex-center flex-col text-slate-500'>
                  <span className='text-5xl'>
                    <FaCloudUploadAlt />
                  </span>

                  <p className='text-center text-sm'>Upload Product Image</p>
                  <input
                    type='file'
                    id='uploadImage'
                    className='hidden'
                    onChange={handleUploadImage}
                  />
                </div>
              </div>
            </label>
          </div>
          <div className=''>
            {
              data?.productImages.length > 0 ? (
             
              data?.productImages.map((item , index)=>(
                <img
                key={index}
                src={item}
                alt=''
                width={100}
                height={100}
                className='border bg-slate-100'
              />
              ))
             
              ):(
                <p>upload product</p>
              )
            }
         
          </div>
          <button className='my-hover text-white w-full py-2 rounded-full'>upload product</button>
        </form>
      </Modal>
    </>
  );
};
export default UploadModal;
