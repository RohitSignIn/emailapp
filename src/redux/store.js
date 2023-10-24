import { configureStore } from "@reduxjs/toolkit";

import EmailSlice from "./slices/EmailSlice";

const store = configureStore({
  reducer: {
    emails: EmailSlice,
  },
  devTools: true,
});

export default store;
