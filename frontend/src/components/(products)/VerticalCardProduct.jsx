import { useEffect, useRef, useState } from 'react';
import fetchProductByCategory from '../../helpers/getProductByCategoryFetch';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const VerticalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);

  const [scroll, setScroll] = useState(0);
  const scrollElement = useRef();

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchProductByCategory(category);
    setLoading(false);

    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };
  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };

  return (
    <div className='container relative mx-auto my-6 px-4'>
      <h2 className='py-4 text-2xl font-semibold'>{heading}</h2>

      <div
        className='scrollbar-none flex items-center gap-4 overflow-x-scroll transition-all md:gap-6'
        ref={scrollElement}
      >
        <button
          className='absolute left-0 hidden rounded-full bg-white p-1 text-lg shadow-md md:block'
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className='absolute right-0 hidden rounded-full bg-white p-1 text-lg shadow-md md:block'
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>

        {loading
          ? loadingList.map((product, index) => {
              return (
                <div
                  key={index}
                  className='flex h-36 w-full min-w-[280px] max-w-[280px] rounded-sm bg-white shadow md:min-w-[320px] md:max-w-[320px]'
                >
                  <div className='h-full min-w-[120px] animate-pulse bg-slate-200 p-4 md:min-w-[145px]'></div>
                  <div className='grid w-full gap-2 p-4'>
                    <h2 className='line-clamp-1 animate-pulse text-ellipsis rounded-full bg-slate-200 p-1 text-base font-medium text-black md:text-lg'></h2>
                    <p className='animate-pulse rounded-full bg-slate-200 p-1 capitalize text-slate-500'></p>
                    <div className='flex w-full gap-3'>
                      <p className='w-full animate-pulse rounded-full bg-slate-200 p-1 font-medium text-red-600'></p>
                      <p className='w-full animate-pulse rounded-full bg-slate-200 p-1 text-slate-500 line-through'></p>
                    </div>
                    <button className='w-full animate-pulse rounded-full bg-slate-200 px-3 py-0.5 text-sm text-white'></button>
                  </div>
                </div>
              );
            })
          : data.map((product, index) => {
              return (
                <Link
                  key={index}
                  to={`/products/${product?._id}`}
                  className='w-full min-w-[280px] max-w-[280px] rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl md:min-w-[320px] md:max-w-[320px]'
                >
                  <div className='flex-center h-48 min-w-[280px] rounded-lg bg-slate-200 p-4 md:min-w-[145px]'>
                    <img
                      src={product?.productImages[0]}
                      className='h-full rounded-t-lg object-scale-down mix-blend-multiply transition-all hover:scale-110'
                    />
                  </div>
                  <div className='grid gap-3 p-4'>
                    <h2 className='line-clamp-1 text-ellipsis text-base font-medium text-black md:text-lg'>
                      {product?.productName}
                    </h2>
                    <p className='capitalize text-slate-500'>
                      {product?.category}
                    </p>
                    <div className='flex gap-3'>
                      <p className='font-medium text-blurey-50'>
                        {product?.sellingPrice.toLocaleString()}
                      </p>
                      <p className='text-sm text-primary-500 line-through'>
                        {product?.price.toLocaleString()}
                      </p>
                    </div>
                    <button className='my-hover rounded-md px-3 py-2 text-sm text-white'>
                      Add to Cart
                    </button>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default VerticalCardProduct;
