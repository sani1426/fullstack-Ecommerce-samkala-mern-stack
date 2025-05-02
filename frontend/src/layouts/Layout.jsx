
import { AppContextProvider} from '../context/AppContext';
import { Provider } from 'react-redux'
import React from 'react'

import { store } from '../store/store';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
    <Provider store={store}>
     <AppContextProvider>
<Outlet />
    </AppContextProvider>
    </Provider>
    </>
  )
}

export default Layout