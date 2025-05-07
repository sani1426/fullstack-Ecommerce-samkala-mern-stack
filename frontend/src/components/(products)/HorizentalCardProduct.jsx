import { useEffect, useRef, useState } from "react"
import fetchProductByCategory from "../../helpers/getProductByCategoryFetch"




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

     <div className="flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-non">
     {
          data?.map((p , index)=> {
            return(
              <div key={index} className="w-full min-w-[200px] md:min-w-[320px] h-36 bg-white rounded-sm shadow-md">
              <div className="bg-slate-200 h-full p-2 min-w-[120px] md:min-w-[145px]">
                <img src={p?.productImages[0]} alt={p?.productName} className="object-scale-down h-full hover:scale-110 transition-all" />
              </div>
      </div>
            )
          })
        }
     </div>
      
    </div>
    
  )
}

export default HorizentalCardProduct