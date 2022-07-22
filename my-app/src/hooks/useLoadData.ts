import {useTypedSelectorHook} from "./useTypedSelector";

export default function useLoad() {
    
    const isLoad = useTypedSelectorHook(state => state.todo.isLoad)
    return  isLoad
}