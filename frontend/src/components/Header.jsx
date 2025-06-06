import Logo from './logo';
import { GrSearch } from 'react-icons/gr';
import { FaUserCircle } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { toast } from 'sonner';
import SummaryApi from '../common';
import { useEffect, useState } from 'react';
import ProfileDropdown from './UI/ProfileDropDown.jsx/ProfileDropdown';

const Header = () => {
  const { user } = useAppContext();
  useEffect(() => {
 console.log(user);
  }, [])
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleDropMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <header className='h-16 bg-white shadow-md fixed w-full z-50'>
      <div className='container mx-auto flex h-full items-center justify-between px-4'>
        <Link to='/'>
          <Logo w={70} h={40} />
        </Link>

        <div className='hidden w-full max-w-sm items-center justify-between rounded-full border border-grown-50  shadow-sm focus-within:shadow-md md:flex'>
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
              <p className='text-blurey-50'>{user?.name}</p>
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
                className='dropdown-trigger h-10 w-10 rounded-full border-2 border-blurey-50'
              />
            ) : (
              <img
                onClick={toggleDropMenu}
                src={`${user?.gender === "men" ? "https://avatar.iran.liara.run/public/boy" : "https://avatar.iran.liara.run/public/girl"}`}
                alt=''
                className='dropdown-trigger h-10 w-10 rounded-full border-2 border-blurey-50'
              />
            )}
            <div
              className={`${menuOpen ? 'pointer-events-auto opacity-[1]' : 'pointer-events-none opacity-0'} top-14 absolute  -right-6 rounded-lg shadow-md transition-all duration-300 z-50`}
            >
              {/* <ul className='mt-2 flex flex-col text-nowrap rounded-lg bg-white text-sm'>
                <li className='w-full px-8 py-3 transition-all duration-300 hover:bg-slate-200'>
                  <Link className='text-blurey-50' to='/profile-panel'>Profile</Link>
                </li>
                <li
                  onClick={handleLogOut}
                  className='w-full px-8 py-3 text-red-600 transition-all duration-300 hover:bg-slate-200'
                >
                  logOut
                </li>
              </ul> */}
              <ProfileDropdown user={user} />
            </div>
          </div>
          <div className='relative cursor-pointer text-2xl'>
            <span>
              <FaCartShopping />
            </span>
            <div className='flex-center absolute -right-3 -top-3 h-4 w-4 rounded-full bg-blurey-50 p-1 text-white'>
              <p className='text-xs'>3</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
