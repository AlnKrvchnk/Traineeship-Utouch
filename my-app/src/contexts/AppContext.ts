import React from "react"
import { useContext } from "react"
import AppStore from "../app/mobx"

interface AppContextType{
    store:AppStore
}

const AppContext=React.createContext <AppContextType|null>(null)
export const useAppContext =()=>{
    const context =useContext(AppContext)
    return context as AppContextType
}
export default AppContext