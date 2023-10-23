import { configureStore } from "@reduxjs/toolkit";

import EmailSlice from "./slices/EmailSlice";
import EmailBodySlice from "./slices/EmailBodySlice";

const store = configureStore({
  reducer: {
    emails: EmailSlice,
  },
  devTools: true,
});

export default store;
