import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/logo';
import { toast } from 'sonner';
import SummaryApi from '../../common/index.js';
import useFetchData from '../../hooks/useFetchData';

const SignIn = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {responseData} = await useFetchData(SummaryApi.SignIn.url , SummaryApi.SignIn.method , data)

    if (responseData.error) {
      toast.error(result.message, {
        style: {
          background: 'red',
        },
      });
    }
    if (responseData.success) {
      toast.success('login successfully ✨✨✨', {
        style: {
          background: 'green',
          color: 'white',
        },
      });
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  };



  return (
    <section
      className='flex h-screen w-screen items-center justify-center'
      id='login'
    >
      <div className='container mx-auto p-4'>
        <div className='mx-auto w-full max-w-md rounded-xl bg-white px-2 pb-5 pt-9 shadow-xl'>
          <div className='flex w-full justify-center'>
            <Logo h={100} w={100} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className='my-5 grid gap-y-1'>
              <label className='text-lg' htmlFor='email'>
                Email :
              </label>
              <div className='bg-slate-50 px-2 py-4 shadow-sm focus-within:shadow-md'>
                <input
                  required
                  name='email'
                  value={data.email}
                  onChange={handleOnChange}
                  id='email'
                  type='email'
                  placeholder='enter your email'
                  className='h-full w-full bg-transparent outline-none'
                />
              </div>
            </div>
            <div className='grid gap-y-1'>
              <label className='text-lg' htmlFor='password'>
                Password :
              </label>
              <div className='bg-slate-50 px-2 py-4 shadow-sm focus-within:shadow-md'>
                <input
                  required
                  name='password'
                  value={data.password}
                  onChange={handleOnChange}
                  id='password'
                  type='password'
                  placeholder='enter your password'
                  className='h-full w-full bg-transparent outline-none'
                />
              </div>
              <Link
                className='ml-auto block w-fit text-blue-300 transition hover:text-blue-400'
                to='/forgot-password'
              >
                Forgot Password
              </Link>
            </div>

            <button className='mx-w-[150px] my-hover mb-6 mt-10 w-full rounded-full px-6 py-2 text-xl text-white transition-all duration-300 hover:scale-95'>
              Login
            </button>
          </form>

          <p className='text-center text-sm'>
            dont have account ?{' '}
            <Link
              className='text-[1.1rem] text-blue-300 transition hover:text-blue-400'
              to='/sign-up'
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
