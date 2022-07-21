import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "../index";
import {api} from "../../api";
import { User } from "../../types/User";

type State = {
    loading: boolean
    user?: User
    isAuth: boolean
}

const initialState: State = {
    loading: false,
    isAuth: true,
    // isAuth: false
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        // setUser(state: State, action: PayloadAction<User | undefined>) {
        //     const {payload} = action
        //     state.user = payload
        //     state.isAuth = payload != null
        //     state.loading = false
        // },
        // setLoading(state: State, action: PayloadAction<boolean>) {
        //     state.loading = action.payload
        // }

        exit(state: State, action: PayloadAction<User | undefined>){
            localStorage.clear()
            state.loading = false
            state.user = undefined
            state.isAuth = false
        }
        
    },
    extraReducers: builder => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                localStorage.setItem('isAuth', 'true')
                state.loading = false
                state.user = payload as any
                state.isAuth = true
            })
            .addCase(loginThunk.rejected, (state, { payload }) => {
                state.loading = false
                state.user = undefined
                state.isAuth = false
            })
    }
})


export const loginThunk = createAsyncThunk('@@auth/login', async (user:User) => {
    return await api.auth.signIn(user);
})



export const reducer = slice.reducer
export const actions = slice.actions