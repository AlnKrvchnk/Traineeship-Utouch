import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { isNumberObject } from "util/types";
import {api} from "../../api";
import {Item} from "../../types/Item";


type State = {
    loading: boolean
    items:Item[],
    isLoad: boolean,
}

const initialState: State = {
    items:[],
    isLoad: false,
    loading:false,
}



export const slice= createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        add(state: State, action: PayloadAction<Item>) {
            state.items.unshift(action.payload)
        },
        complete(state: State, action: PayloadAction<string|number>){
            const index = state.items.findIndex((item)=>String(item.id) === String(action.payload))
            state.items[index].isCompleted = !state.items[ index ].isCompleted
        },
        delete(state: State, action: PayloadAction<number[]|string[]>){

            action.payload.forEach((value)=>{
                deleteItem(findIndex(String(value)))
            })

            function findIndex(id:string){
                return state.items.findIndex((item)=>String(item.id) === id )
            }

            function deleteItem(index:number){
                console.log(index)
                state.items.splice(index,1)
            }

        },
    },
    extraReducers: builder => {
        builder
            .addCase(getTodoThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getTodoThunk.fulfilled, (state, { payload }) => {
                state.items = payload as any
                state.loading = false
                state.isLoad = true
            })
            .addCase(getTodoThunk.rejected, (state, { payload }) => {
                state.isLoad = false
                state.items=[]
                console.log(payload)
                // state.push(payload as any)
            })

            // .addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
            //     console.log(payload)
            //     // state.push(payload as any)
            // })
            // .addCase(deleteTodoThunk.rejected, (state, { payload }) => {
            //     console.log(payload)
            //     // state.push(payload as any)
            // })

            // .addCase(addTodoThunk.fulfilled, (state, { payload }) => {
            //     console.log(payload)
            //     // state.push(payload as any)
            // })
            // .addCase(addTodoThunk.rejected, (state, { payload }) => {
            //     console.log(payload)
            //     // state.push(payload as any)
            // })
    }
})

export const getTodoThunk = createAsyncThunk('@@todo/get', async () => {
    return await api.todo.getAll();
})
export const addTodoThunk = createAsyncThunk('@@todo/get', async (item:Item) => {
    return await api.todo.create(item);
})
export const deleteTodoThunk = createAsyncThunk('@@todo/delete', async (id:string) => {
    return await api.todo.delete(id);
})
// export const updateTodoThunk = createAsyncThunk('@@todo/update', async (id:string) => {
//     return await api.todo.update(id)
// })

export const reducer = slice.reducer
export const actions = slice.actions