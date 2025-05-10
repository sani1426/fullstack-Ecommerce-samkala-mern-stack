import { Link } from 'react-router-dom'
import './ProfileDropdown.css'
import SummaryApi from '../../../common';

const ProfileDropdown = ({user}) => {
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
    <div className="card">
    <center>
      <div className="profileimage">
        <img src={`${user?.gender === "men" ? "https://avatar.iran.liara.run/public/boy" : "https://avatar.iran.liara.run/public/girl"}`} alt="" />
    
      </div>
      <div className="Name">
        <p>{user?.name}</p>
      </div>
      <div className="socialbar flex">
      <ul className='mt-2 flex flex-col text-nowrap rounded-lg bg-white text-sm'>
                <li className='w-full px-8 py-3 transition-all duration-300 hover:bg-slate-200'>
                  <Link className='text-blurey-50' to='/profile-panel'>Profile</Link>
                </li>
                <li
                  onClick={handleLogOut}
                  className='w-full px-8 py-3 text-red-600 transition-all duration-300 hover:bg-slate-200'
                >
                  logOut
                </li>
              </ul>
        
      </div>      
      </center>
      
  </div>
  )
}

export default ProfileDropdown
