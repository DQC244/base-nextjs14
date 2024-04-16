import { configureStore } from "@reduxjs/toolkit";
import { EnvConstant } from "@root/constant";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import appReducer, { appSlice } from "./app.slice";

/* ------------- Actions ------------- */
export const appActions = appSlice.actions;

/* ------------- Assemble The Reducers ------------- */
const store = configureStore({
  reducer: {
    appReducer,
  },
  devTools: EnvConstant.IS_DEV,
});

export type IAppReduxState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<IAppReduxState> = useSelector;

export default store;
