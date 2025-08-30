import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MilesEntry {
  id: number;
  month: string;
  totalMiles: number;
  additionalMiles: number;
  goalMet: boolean;
}

interface AdditionalMilesState {
  milesData: MilesEntry[];
  goalMiles: number;
}

const initialState: AdditionalMilesState = {
  goalMiles: 26.2,
  milesData: [
    {
      id: 1,
      month: 'February',
      totalMiles: 30,
      additionalMiles: 3.8,
      goalMet: true,
    },
    {
      id: 2,
      month: 'February',
      totalMiles: 30,
      additionalMiles: 3.8,
      goalMet: true,
    },
    {
      id: 3,
      month: 'February',
      totalMiles: 30,
      additionalMiles: 3.8,
      goalMet: true,
    },
    {
      id: 4,
      month: 'February',
      totalMiles: 30,
      additionalMiles: 3.8,
      goalMet: true,
    },
    {
      id: 5,
      month: 'February',
      totalMiles: 30,
      additionalMiles: 3.8,
      goalMet: true,
    },
    {
      id: 6,
      month: 'February',
      totalMiles: 30,
      additionalMiles: 3.8,
      goalMet: true,
    },
  ],
};

const additionalMilesSlice = createSlice({
  name: 'additionalMiles',
  initialState,
  reducers: {
    setMilesData: (state, action: PayloadAction<MilesEntry[]>) => {
      state.milesData = action.payload;
    },
    updateMilesEntry: (state, action: PayloadAction<MilesEntry>) => {
      const index = state.milesData.findIndex((entry) => entry.id === action.payload.id);
      if (index !== -1) {
        state.milesData[index] = action.payload;
      }
    },
    addMilesEntry: (state, action: PayloadAction<MilesEntry>) => {
      state.milesData.push(action.payload);
    },
    deleteMilesEntry: (state, action: PayloadAction<number>) => {
      state.milesData = state.milesData.filter((entry) => entry.id !== action.payload);
    },
    setGoalMiles: (state, action: PayloadAction<number>) => {
      state.goalMiles = action.payload;
    },
  },
});

export const { 
  setMilesData, 
  updateMilesEntry, 
  addMilesEntry, 
  deleteMilesEntry, 
  setGoalMiles 
} = additionalMilesSlice.actions;

export default additionalMilesSlice.reducer;