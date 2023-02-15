import { configureStore} from "@reduxjs/toolkit";

import {useAppDispatch} from "./hooks";
import{useDispatch} from "react-redux";
import { Login } from "../features/Login/login-api-slice";
import { Players } from "../features/Players/players-api-slice";
export const store =configureStore({
reducer:{
    [Login.reducerPath]:Login.reducer,
    [Players.reducerPath]:Players.reducer,
},
middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(Login.middleware,Players.middleware);
}

});


export type AppDispatch=typeof store.dispatch;
export const useTypedDispatch=()=> useDispatch<AppDispatch>();
export type RouteState= ReturnType<typeof store.getState>;