import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=3a29092d&s=${term}&type=movie`
    );

    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=3a29092d&s=${term}&type=series`
    );

    return response.data;
  }
);

export const fetchAsyncDetail = createAsyncThunk(
  "movies/fetchAsyncDetail",
  async (id) => {
    const response = await axios.get(
     `http://www.omdbapi.com/?apikey=3a29092d&i=${id}&Plot=full`
    );

    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  details: {},
  error: "",
  status: 'idle',
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers:{
    removeSelectedFilm: (state)=>{
      state.details={}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state) => {
      state.status='loading'
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.status='idle'
    });
    builder.addCase(fetchAsyncMovies.rejected, (state) => {
      state.status='error'
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      state.shows = action.payload;
      state.status='idle'
    });
    builder.addCase(fetchAsyncDetail.fulfilled, (state, action) => {
      state.details = action.payload;
      state.status='idle'
    });
  },
});

export const {removeSelectedFilm} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedDetail = (state) => state.movies.details;
export default movieSlice.reducer;
