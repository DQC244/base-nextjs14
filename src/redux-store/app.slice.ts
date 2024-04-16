import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/* ------------- Initial State ------------- */
export interface IInitialState {
  isFetching: boolean;
  error: object | string | null;
  user: {
    name: string;
    email: string;
  };
}

const initialState: IInitialState = {
  isFetching: false,
  error: null,
  user: {
    name: "",
    email: "",
  },
};

/* ------------- Selector ------------- */

/* ------------- Reducers ------------- */
const reducers = {
  getUserInfo: (state: IInitialState) => {
    state.user.email = "chien@gmail.com";
    state.user.name = "chien";
  },

  // Common
  appFailure: (state: IInitialState, action: PayloadAction<any>) => {
    const error = action.payload ? action.payload : {};
    state.isFetching = false;
    state.error = error;
  },
  appReset: (state: IInitialState) => {
    state.isFetching = false;
    state.error = null;
  },
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers,
});

const appReducer = appSlice.reducer;
export default appReducer;
