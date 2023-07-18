import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies/movieSlice";
import watchlistSlice from "./movies/watchlistSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    cart: watchlistSlice
  },
});

