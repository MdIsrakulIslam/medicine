import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the MonthlyRegistrations type
interface MonthlyRegistrations {
  month: string;
  registrations: number;
}

// Define the AdminDash interface
export interface AdminDash {
  completedSeasonUsers: number;
  completedSeasonDelta: number;
  totalUsers: number;
  totalUsersDelta: number;
  totalActivities: number;
  totalActivitiesDelta: number;
  totalDistance: number;
  totalDistanceDelta: number;
  userRegistrations: MonthlyRegistrations[]; // Ensure this is included and typed correctly
}

const initialState: AdminDash = {
  completedSeasonUsers: 10,
  completedSeasonDelta: 5,
  totalUsers: 10,
  totalUsersDelta: 5,
  totalActivities: 120,
  totalActivitiesDelta: 30,
  totalDistance: 40.5,
  totalDistanceDelta: 80.2,
  userRegistrations: [
    { month: "Apr", registrations: 2 },
    { month: "May", registrations: 3 },
    { month: "Jun", registrations: 4 },
    { month: "Jul", registrations: 1 },
  ], // Ensure this matches the type defined above
};

const userStatsSlice = createSlice({
  name: "adminuser",
  initialState,
  reducers: {
    setUserStats: (_, action: PayloadAction<AdminDash>) => {
      return action.payload;
    },
  },
});

export const { setUserStats } = userStatsSlice.actions;
export default userStatsSlice.reducer;
