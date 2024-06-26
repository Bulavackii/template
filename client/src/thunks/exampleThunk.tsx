import { createAsyncThunk } from '@reduxjs/toolkit';

export const exampleThunk = createAsyncThunk(
  'example/fetchData',
  async (arg, thunkAPI) => {
    // Асинхронный код
    return await fetch('/api/data').then((res) => res.json());
  }
);