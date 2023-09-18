import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './booksAPI';

const initialState = {
  books:[],
  status: 'idle',
};


// typically used to make async requests.
export const fetchAsync = createAsyncThunk(
  //"action type"
  'books/fetchBooks',
  async () => {
    const response = await fetchBooks();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  
  reducers: {
   
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.books = action.payload;
      });
  },
});

// export const { } = booksSlice.actions;



export default booksSlice.reducer;
