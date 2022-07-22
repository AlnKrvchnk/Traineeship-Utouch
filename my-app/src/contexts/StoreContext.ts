import React from "react"
import { useContext } from "react"
import AppStore from "../app/mobx"

// interface AppContextType{
//     store?:AppStore
// }

const StoreContext=React.createContext <AppStore>(new AppStore())
export const useAppContext =()=>{
    const context =useContext (StoreContext)
    return context as AppStore
}
export default StoreContext