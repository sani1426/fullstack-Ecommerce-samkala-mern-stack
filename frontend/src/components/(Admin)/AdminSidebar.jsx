
import {Link} from 'react-router-dom'
import { useAppContext } from '../../context/AppContext';



const AdminSidebar = () => {
    const { user } = useAppContext();
  return (
    <aside className='shadow-costume hidden md:flex md:flex-col fixed h-screen w-80 bg-slate-50'>
    <div className='h-32 bg-gray-50'>
      <div className='flex-center gap-4 px-4 py-2'>
        {user?.profilePic ? (
          <img
            src={user?.profilePic}
            alt=''
            className='h-28 w-28 rounded-full'
          />
        ) : (
          <img
            src={`${user?.gender === 'men' ? 'https://avatar.iran.liara.run/public/boy' : 'https://avatar.iran.liara.run/public/girl'}`}
            alt=''
            className='h-24 w-24'
          />
        )}
        <div className=''>
          <h1 className='text-nowrap text-xl'>{user?.name}</h1>
          <p className='text-sm'>{user?.role}</p>
        </div>
      </div>
    </div>
   
   {
    user?.role === "ADMIN" && (
      <div className="">
      <nav className='grid p-4'>
        <Link className='py-2 px-4 hover:bg-slate-100 transition' to="/admin/all-users">All Users</Link>
        <Link className='py-2 px-4 hover:bg-slate-100 transition' to="/admin/all-products">Products</Link>
      </nav>
    </div>
    )
   }

      
  </aside>
  )
}

export default AdminSidebar