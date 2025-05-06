import React, { useState } from 'react';
import { Modal } from 'antd';
import { category } from '../../helpers/productCategory';
import { FaCloudUploadAlt } from 'react-icons/fa';
import uploadImage from '../../helpers/uploadImage';
import DisplayImage from '../UI/DisplayImage';
import { MdDelete } from 'react-icons/md';
import SummaryApi from '../../common/index';
import { toast } from 'sonner';

const UploadModal = ({fetchAll}) => {
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

  const [uploadProductImageFile, setUploadProductImageFile] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    setUploadProductImageFile(file.name);

    const uploadImageCloudinary = await uploadImage(file);

    setData((preve) => {
      return {
        ...preve,
        productImages: [...preve.productImages, uploadImageCloudinary.url],
      };
    });
  };

  const [fullScreenImage, setFullScreenImage] = useState('');
  const [openFullScreen, setOpenFullScreen] = useState(false);

  const handleDeleteProductImage = async (index) => {
    const newProductImage = [...data.productImages];
    newProductImage.splice(index, 1);

    setData((preve) => {
      return {
        ...preve,
        productImages: [...newProductImage],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(SummaryApi.CreateProduct.url, {
      method: SummaryApi.CreateProduct.method,
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (responseData.success) {
      toast.success(responseData?.message, {
        style: {
          background: 'green',
          color: 'white',
        },
      });
      fetchAll()
      setIsModalOpen(false);
    }

    if (responseData.error) {
      toast.error(responseData?.message, {
        style: {
          background: 'red',
          color: 'black',
        },
      });
    }
  };

  return (
    <>
      <button
        className='my-hover rounded-full px-4 py-2 text-white'
        onClick={showModal}
      >
        Upload products
      </button>
      <Modal
        title='upload products'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit}
          className='my-4 flex flex-col gap-4 overflow-y-auto'
        >
          <div className='grid'>
            <label htmlFor='productName'>Product Name :</label>
            <input
              required
              name='productName'
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
              required
              name='brandName'
              type='text'
              className='rounded border bg-slate-100 p-2'
              onChange={handleChange}
              id='brandName'
              placeholder='enter brand name ...'
              value={data.brandName}
            />
          </div>

          <div className='grid'>
            <label htmlFor='category' className='mt-3'>
              Category :
            </label>
            <select
              required
              value={data.category}
              name='category'
              onChange={handleChange}
              className='rounded border bg-slate-100 p-2'
            >
              <option value={''}>Select Category</option>
              {category.map((el, index) => {
                return (
                  <option value={el.value} key={el.value + index}>
                    {el.lable}
                  </option>
                );
              })}
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
          <div className='flex-center gap-2'>
            {data?.productImages.length > 0 ? (
              data?.productImages.map((item, index) => (
                <div className='group relative' key={index}>
                  <img
                    src={item}
                    alt=''
                    width={70}
                    height={70}
                    className='cursor-pointer border bg-slate-100'
                    onClick={() => {
                      setOpenFullScreen(true);
                      setFullScreenImage(item);
                    }}
                  />
                  <div
                    className='absolute bottom-0 right-0 hidden cursor-pointer rounded-full bg-red-600 p-1 text-2xl text-white group-hover:block'
                    onClick={() => handleDeleteProductImage(index)}
                  >
                    <MdDelete />
                  </div>
                </div>
              ))
            ) : (
              <p className='text-sm text-red-500'>
                please upload product image
              </p>
            )}
          </div>
          <div className='grid'>
            <label htmlFor='price'>Price :</label>
            <input
              required
              type='number'
              name='price'
              className='rounded border bg-slate-100 p-2'
              onChange={handleChange}
              id='price'
              placeholder='enter price ...'
              value={data.price}
            />
          </div>

          <div className='grid'>
            <label htmlFor='sellingPrice' className='mt-3'>
              Selling Price :
            </label>
            <input
              required
              type='number'
              id='sellingPrice'
              placeholder='enter selling price'
              value={data.sellingPrice}
              name='sellingPrice'
              onChange={handleChange}
              className='rounded border bg-slate-100 p-2'
            />
          </div>

          <div className='grid'>
            <label htmlFor='description' className='mt-3'>
              Description :
            </label>
            <textarea
              required
              className='h-28 resize-none border bg-slate-100 p-1'
              placeholder='enter product description'
              rows={3}
              onChange={handleChange}
              name='description'
              value={data.description}
            ></textarea>
          </div>

          <button className='my-hover w-full rounded-full py-2 text-white'>
            upload product
          </button>
        </form>

        {openFullScreen && (
          <DisplayImage onClose={setOpenFullScreen} imgUrl={fullScreenImage} />
        )}
      </Modal>
    </>
  );
};

export default UploadModal;
