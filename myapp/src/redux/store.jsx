import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragon/dragonSlice';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    dragon: dragonReducer,
    missions: missionsReducer,
  },
});

export default store;
