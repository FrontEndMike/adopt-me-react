import { petApi } from "./petApiService"; // import service
import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./AdoptedPetSlice";
import searchParams from "./searchParamsSlice";

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    [petApi.reducerPath]: petApi.reducer, // add reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware), // add middleware
});

export default store;