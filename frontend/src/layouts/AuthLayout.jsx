import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import { useEffect } from 'react';
import SummaryApi from '../common/index';
import { useAppContext } from '../context/AppContext';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../store/userSlice';

const AuthLayout = () => {
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
      <Outlet />
      <Toaster position='top-right' />
    </>
  );
};

export default AuthLayout;
