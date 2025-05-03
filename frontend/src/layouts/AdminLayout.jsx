
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { Toaster } from 'sonner'
import Footer from '../components/Footer'
import AdminSidebar from '../components/(Admin)/AdminSidebar'
import { useEffect } from 'react';
import SummaryApi from '../common/index';
import { useAppContext } from '../context/AppContext';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../store/userSlice';

const AdminLayout = () => {
  const { user, setUser } = useAppContext();

  const dispatch = useDispatch();

  const fetchUserDetail = async () => {
    const dataResponse = await fetch(SummaryApi.UserDetail.url, {
      method: SummaryApi.UserDetail.method,
      credentials: 'include',
    });

    //   Context Api ... //
    const dataApi = await dataResponse.json();
    if (dataApi.success) {
      setUser(dataApi.data);
    }

    //  Redux and Redux-Tolkit ... //
    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }
  };
  useEffect(() => {
    fetchUserDetail();
  }, []);
  return (
    <>
       <Header />
       <AdminSidebar />
      <main className='min-h-[calc(100vh-120px)]'>
        <Outlet />
        <Toaster position='top-right' />
      </main>

      <Footer />
    </>
  )
}

export default AdminLayout