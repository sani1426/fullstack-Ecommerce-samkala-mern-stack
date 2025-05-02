import { createContext, useContext, useState } from "react";


const AppContext = createContext()



export const AppContextProvider = ({children}) => {

    const [user , setUser] = useState()

    return (
        <AppContext.Provider value={{user , setUser}}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext =()=> useContext(AppContext)