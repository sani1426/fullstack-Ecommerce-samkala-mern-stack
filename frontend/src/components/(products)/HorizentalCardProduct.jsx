import { useEffect, useRef, useState } from "react"
import fetchProductByCategory from "../../helpers/getProductByCategoryFetch"
import {Link} from 'react-router-dom'



const HorizentalCardProduct = ({category , heading}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const loadingList = new Array(13).fill(null)
  
    const [scroll, setScroll] = useState(0)
    const scrollElement = useRef()

    const fetchData = async ()=>{
      setLoading(true)
      const categoryProduct = await fetchProductByCategory(category);
      setLoading(false)

      setData(categoryProduct?.data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    


  return (
    <div className="container mx-auto px-4 my-6">
        <h2 className="text-2xl font-semibold py-2  text-grown-100">{heading}</h2>

     <div className="flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none">
     {
          data?.map((p , index)=> {
            return(
              <Link to={`/products/${p?._id}`} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex' key={index}>
              <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]'>
                  <img src={p?.productImages[0]} className='object-scale-down h-full hover:scale-110 transition-all'/>
              </div>
              <div className='p-4 grid'>
                  <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{p?.productName}</h2>
                  <p className='capitalize text-slate-500'>{p?.category}</p>
                  <div className='flex gap-3'>
                      <p className='text-blurey-50 font-medium'>${ p?.sellingPrice.toLocaleString() }</p>
                      <p className='text-primary-500 line-through'>${ p?.price.toLocaleString()  }</p>
                  </div>
                  <button className='text-sm my-hover  text-white px-3 py-[0.8px] rounded-full' >Add to Cart</button>
              </div>
          </Link>
            )
          })
        }
     </div>
      
    </div>
    
  )
}

export default HorizentalCardProduct