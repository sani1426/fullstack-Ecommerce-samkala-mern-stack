import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import AuthLayout from "./layouts/AuthLayout"
import RootLayout from "./layouts/RootLayout"
import SignIn from "./pages/(Auth)/SignIn"
import SignUp from "./pages/(Auth)/SignUp"
import HomePage from "./pages/(Root)/HomePage"
import ForgotPassword from './pages/(Auth)/ForgotPassword'
import ProfilePanel from "./pages/(Root)/profilePanel"

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
                        path : '/profile-panel' ,
                        element : <ProfilePanel />
                    },
                ]
            }
        ]
    }
])


export default router