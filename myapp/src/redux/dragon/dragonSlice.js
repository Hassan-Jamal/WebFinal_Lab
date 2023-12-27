import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/dragons';

const initialState = {
  dragon: [],
  isLoading: false,
  error: null,
  reservedDragon: [],
};

// fetch books from the books API
export const fetchDragon = createAsyncThunk('dragon/fetchRockes', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return rejectWithValue('something went wrong');
  }
});

// create slice
const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    reserveDragon: (state, { payload }) => {
      const { dragon } = state;
      const updatedDragon = dragon.map((dragon) => {
        if (dragon.id === payload) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      });
      state.dragon = updatedDragon;
      state.reservedDragon = updatedDragon.filter((dragon) => dragon.reserved);
    },
    cancelReserved: (state, { payload }) => {
      const { dragon } = state;
      const updatedDragon = dragon.map((dragon) => {
        if (dragon.id === payload) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      });
      state.dragon = updatedDragon;
      state.reservedDragon = state.reservedDragon.filter((dragon) => dragon.id !== payload);
    },
  },
  // handle states of promises
  extraReducers: (builder) => {
    builder
      // fetch books
      .addCase(fetchDragon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDragon.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const result = [];

        payload.forEach((dragon) => {
          const newDragon= {
            id: dragon.id,
            dragonName: dragon.name,
            dragonDescription: dragon.description,
            flickrImages: dragon.flickr_images,
          };
          result.push(newDragon);
        });

        state.dragon = result;
      })
      .addCase(fetchDragon.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reserveDragon, cancelReserved } = dragonSlice.actions;
export default dragonSlice.reducer;
