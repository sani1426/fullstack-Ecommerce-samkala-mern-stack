
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { Toaster } from 'sonner'
import Footer from '../components/Footer'
import AdminSidebar from '../components/(Admin)/AdminSidebar'

const AdminLayout = () => {
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