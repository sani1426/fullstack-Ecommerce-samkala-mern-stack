import Logo from './logo';
import { GrSearch } from 'react-icons/gr';
import { FaUserCircle } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { toast } from 'sonner';
import SummaryApi from '../common';
import { useState } from 'react';

const Header = () => {
  const { user } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleDropMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogOut = async () => {
    const fetchData = await fetch(SummaryApi.LogOut.url, {
      method: SummaryApi.LogOut.method,
      credentials: 'include',
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success('logged out success');
    }
    if (data.error) {
      toast.error(data.message);
    }
    setMenuOpen(false);
  };

  return (
    <header className='h-16 bg-white shadow-md'>
      <div className='container mx-auto flex h-full items-center justify-between px-4'>
        <Link to='/'>
          <Logo w={70} h={40} />
        </Link>

        <div className='hidden w-full max-w-sm items-center justify-between rounded-full border shadow-sm focus-within:shadow-md md:flex'>
          <input
            type='text'
            placeholder='Search for Product'
            className='w-full rounded-full pl-4 outline-none'
          />
          <div className='flex-center my-gradient h-8 min-w-[50px] rounded-r-full text-2xl text-white'>
            <GrSearch />
          </div>
        </div>

        <div className='flex items-center gap-6'>
          <div className=''>
            {user ? (
              <p>{user?.name}</p>
            ) : (
              <Link
                to='/login'
                className='my-hover rounded-full px-4 py-2 text-sm text-white'
              >
                Login
              </Link>
            )}
          </div>

          <div
            className={`cursor-pointer border-l border-slate-700 py-2 pl-5 text-2xl ${user ? 'hidden' : ''}`}
          >
            <FaUserCircle />
          </div>
          <div
            className={`${!user ? 'hidden' : 'relative cursor-pointer py-2'} `}
          >
            {user?.profilePic ? (
              <img
                onClick={toggleDropMenu}
                src={user?.profilePic}
                alt=''
                className='dropdown-trigger h-10 w-10 rounded-full'
              />
            ) : (
              <img
                onClick={toggleDropMenu}
                src={`${user?.gender === "men" ? "https://avatar.iran.liara.run/public/boy" : "https://avatar.iran.liara.run/public/girl"}`}
                alt=''
                className='dropdown-trigger h-10 w-10 rounded-full'
              />
            )}
            <div
              className={`${menuOpen ? 'pointer-events-auto opacity-[1]' : 'pointer-events-none opacity-0'} top-15 absolute -left-8 rounded-lg shadow-md transition-all duration-300`}
            >
              <ul className='mt-2 flex flex-col text-nowrap rounded-lg bg-white text-sm'>
                <li className='w-full px-8 py-3 transition-all duration-300 hover:bg-slate-200'>
                  <Link to='/profile-panel'>Profile</Link>
                </li>
                <li
                  onClick={handleLogOut}
                  className='w-full px-8 py-3 text-red-600 transition-all duration-300 hover:bg-slate-200'
                >
                  logOut
                </li>
              </ul>
            </div>
          </div>
          <div className='relative cursor-pointer text-2xl'>
            <span>
              <FaCartShopping />
            </span>
            <div className='flex-center absolute -right-3 -top-3 h-4 w-4 rounded-full bg-primary-500 p-1 text-white'>
              <p className='text-xs'>3</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
