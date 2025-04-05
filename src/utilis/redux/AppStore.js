import { configureStore } from "@reduxjs/toolkit";
import CartReducers from "./CartReducers";

const AppStore = configureStore({
  reducer: {
    ourcart: CartReducers
  }
});

export default AppStore;