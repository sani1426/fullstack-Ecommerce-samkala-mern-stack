import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

const AuthLayout = () => {
  return (
    <>
      <Outlet />
      <Toaster position='top-right' />
    </>
  );
};

export default AuthLayout;
