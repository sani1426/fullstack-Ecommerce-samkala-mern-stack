import { useEffect, useState } from 'react';
import SummaryApi from '../../common';
import { Link } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner'
import useFetchData from '../../hooks/useFetchData';


const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllCategory = async () => {
    setLoading(true);
    const {result} = await useFetchData(SummaryApi.GetCategories.url , 'get')
    setLoading(false);
    setCategoryProduct(result);
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  return (
    <section className='container mx-auto p-4'>
{
    loading ? (
        <Spinner />
    ) : (
        <div className='scrollbar-none flex items-center justify-between gap-4 overflow-x-scroll'>
        {
        
        categoryProduct.map((cat, index) => {
          return (


            <Link to={`/category/${cat?.category}`}   key={index} className='cursor-pointer shadow-sm hover:shadow-md hover:shadow-grown-50 transition-all duration-300 rounded-full pb-5 ' >
              <div className='flex-center h-16 w-16 overflow-hidden border-2 border-grown-50 rounded-full bg-slate-200 p-4 md:h-20 md:w-20'>
                <img
                  src={cat?.productImages[0]}
                  alt={cat?.category}
                  className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all  duration-300 '
                />
              </div>
              <p className='text-center text-sm  capitalize'>
                {cat?.category}
              </p>
            </Link>
          );
        })}
      </div>
    )
}
    </section>
  );
};

export default CategoryList;
