import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import AuthLayout from "./layouts/AuthLayout"
import RootLayout from "./layouts/RootLayout"
import SignIn from "./pages/(Auth)/SignIn"
import SignUp from "./pages/(Auth)/SignUp"
import HomePage from "./pages/(Root)/HomePage"
import ForgotPassword from './pages/(Auth)/ForgotPassword'
import ProfilePanel from "./pages/(Root)/profilePanel"
import AdminLayout from "./layouts/AdminLayout"
import AllUsers from "./pages/(Admin)/AllUsers"
import AllProducts from "./pages/(Admin)/AllProducts"
import CategoryProduct from "./pages/(Root)/CategoryProduct"

const router = createBrowserRouter([
  
    {
        element : <Layout /> ,
        children : [
            {
                element: <AuthLayout />,
                children :[
                    {
                        path: 'login',
                        element : <SignIn />
                    },
                    {
                        path : "sign-up",
                        element: <SignUp />
                    },
                    {
                        path : "forgot-password",
                        element: <ForgotPassword />
                    },
                ]
            },
            {
                element : <RootLayout />,
                children: [
                    {
                        path : '/' ,
                        element : <HomePage />
                    },
                    {
                        path : '/category/:name' ,
                        element : <CategoryProduct />
                    },
                    {
                        path : '/profile-panel' ,
                        element : <ProfilePanel />
                    },
                ]
            },
            {
                element :<AdminLayout /> ,
                children : [
                    {
                        element : <AllUsers /> ,
                        path : "/admin/all-users"
                    },
                    {
                        element : <AllProducts /> ,
                        path : "/admin/all-products"
                    },
                ]
            }
        ]
    }
])


export default router