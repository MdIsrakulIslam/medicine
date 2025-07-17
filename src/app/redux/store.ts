


// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import statsReducer from './statsSlice';
import patientsReducer from './pateientsSlice';

export const store = configureStore({
  reducer: {
    stats: statsReducer,
    patients: patientsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
