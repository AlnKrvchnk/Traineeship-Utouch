import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action, combineReducers } from 'redux';
import { reducer as authReducer } from './auth/slice';
import { reducer as toDoReducer } from './todo/slice';

const rootReducer = combineReducers({
    todo: toDoReducer,
    auth: authReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;

export default store;
