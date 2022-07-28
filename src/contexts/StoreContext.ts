import { createContext, useContext } from "react";
import AppStore from "../app/mobx";

interface AppContextType extends AppStore {
  store?: AppStore;
}

const StoreContext = createContext<AppContextType>(new AppStore());
export const useAppContext = () => {
  const context = useContext(StoreContext);
  return context as AppContextType;
};
export default StoreContext;
