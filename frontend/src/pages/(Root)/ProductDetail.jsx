import { useParams } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData'
import SummaryApi from '../../common'
import { useEffect, useState } from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa6'
import VerticalCardProduct from '../../components/(products)/VerticalCardProduct'

const ProductDetail = () => {
  const [data, setData] = useState({
    productName: '',
    brandName: '',
    category: '',
    productImages: [],
    description: '',
    price: '',
    sellingPrice: '',
  })
  const [cat, setCat] = useState('')
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const fetchData = async () => {
    setLoading(true)
    const { result } = await useFetchData(
      `${SummaryApi.GetProductDetails.url}/${id}`,
      'get'
    )
    setLoading(false)
    setData(result)
    setActiveImage(result?.productImages[0])
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id)
    // fetchUserAddToCart()
  }

  // /////////////////////////////////////////////////////

  const productImageListLoading = new Array(4).fill(null)
  const [activeImage, setActiveImage] = useState('')

  const handleMouseEnterProduct = (imageURL) => {
    setActiveImage(imageURL)
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>
        {/***product Image */}
        <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
          <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2'>
            <img
              src={activeImage}
              className='h-full w-full object-scale-down mix-blend-multiply'
            />
          </div>

          <div className='h-full'>
            {loading ? (
              <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                {productImageListLoading.map((el, index) => {
                  return (
                    <div
                      className='h-20 w-20 bg-slate-200 rounded animate-pulse'
                      key={'loadingImage' + index}
                    ></div>
                  )
                })}
              </div>
            ) : (
              <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                {data?.productImages?.map((imgURL, index) => {
                  return (
                    <div
                      className={`h-20 w-20 bg-slate-200 rounded p-1 ${activeImage === imgURL ? 'border-4 border-blurey-50' : ''}`}
                      key={imgURL}
                    >
                      <img
                        src={imgURL}
                        className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer'
                        onClick={() => {
                          handleMouseEnterProduct(imgURL)
                          setActiveImage(imgURL)
                        }}
                        onMouseEnter={() => handleMouseEnterProduct(imgURL)}
                      />
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/***product details */}
        {loading ? (
          <div className='grid gap-1 w-full'>
            <p className='bg-slate-200 animate-pulse  h-6 lg:h-8 w-full rounded-full inline-block'></p>
            <h2 className='text-2xl lg:text-4xl font-medium h-6 lg:h-8  bg-slate-200 animate-pulse w-full'></h2>
            <p className='capitalize text-slate-400 bg-slate-200 min-w-[100px] animate-pulse h-6 lg:h-8  w-full'></p>

            <div className='text-red-600 bg-slate-200 h-6 lg:h-8  animate-pulse flex items-center gap-1 w-full'></div>

            <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1 h-6 lg:h-8  animate-pulse w-full'>
              <p className='text-red-600 bg-slate-200 w-full'></p>
              <p className='text-slate-400 line-through bg-slate-200 w-full'></p>
            </div>

            <div className='flex items-center gap-3 my-2 w-full'>
              <button className='h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></button>
              <button className='h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></button>
            </div>

            <div className='w-full'>
              <p className='text-slate-600 font-medium my-1 h-6 lg:h-8   bg-slate-200 rounded animate-pulse w-full'></p>
              <p className=' bg-slate-200 rounded animate-pulse h-10 lg:h-12  w-full'></p>
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-1'>
            <p className='bg-blurey-50 text-blurey-800 px-2 rounded-full inline-block w-fit'>
              {data?.brandName}
            </p>
            <h2 className='text-2xl lg:text-4xl font-medium'>
              {data?.productName}
            </h2>
            <p className='capitalize text-slate-400'>{data?.category}</p>

            <div className='text-yellowrey-50 flex items-center gap-1'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>

            <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
              <p className='text-blurey-50'>
                ${data.sellingPrice.toLocaleString()}
              </p>
              <p className='text-primary-500 text-[1.3rem] line-through'>
                ${data.price.toLocaleString()}
              </p>
            </div>

            <div className='flex items-center gap-3 my-2'>
              <button className='border-2 border-grown-100 rounded-md px-3 py-1 min-w-[120px] text-grown-100 font-medium hover:bg-grown-100 hover:text-white transition-all duration-500'>
                Buy
              </button>
              <button
                className=' my-button-gradient '
                onClick={(e) => handleAddToCart(e, data?._id)}
              >
                Add To Cart
              </button>
            </div>

            <div>
              <p className='text-slate-600 font-medium my-1'>Description : </p>
              <p>{data?.description}</p>
            </div>
          </div>
        )}
      </div>

      {data.category && (
        <VerticalCardProduct category={data?.category} heading='Recommended' />
      )}
    </div>
  )
}

export default ProductDetail
