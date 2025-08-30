import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Activity {
  id: string | number;
  type: string;
  distance: string | number;
  duration: string | number;
  date: string;
}

interface User {
  id: string;
  //   name: string;
  firstName: string;
  lastName: string;
  email: string;
  joinedDate: string;
  avatarUrl: string;
}

interface UserDetailsState {
  user: User;
  activities: Activity[];
}

const initialState: UserDetailsState = {
  user: {
    id: "1",
    // name: "Alex",
    firstName: "Alex",
    lastName: "Bot",
    email: "alex.runner@example.com",
    joinedDate: "June 1, 2024",
    avatarUrl: "/avatars/alex-runner.png",
  },
  activities: [
    {
      id: "1",
      type: "Walk",
      distance: "5.2miles",
      duration: "45 min",
      date: "Jul 21, 2025",
    },
    {
      id: "2",
      type: "Walk",
      distance: "5.2miles",
      duration: "45 min",
      date: "Jul 21, 2025",
    },
    {
      id: "3",
      type: "Hike",
      distance: "5.2miles",
      duration: "45 min",
      date: "Jul 21, 2025",
    },
  ],
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setActivities(state, action: PayloadAction<Activity[]>) {
      state.activities = action.payload;
    },
    addActivity(state, action: PayloadAction<Activity>) {
      state.activities.push(action.payload);
    },
    updateActivity(state, action: PayloadAction<Activity>) {
      const index = state.activities.findIndex(
        (activity) => activity.id === action.payload.id
      );
      if (index !== -1) {
        state.activities[index] = action.payload;
      }
    },
    removeActivity(state, action: PayloadAction<string>) {
      state.activities = state.activities.filter(
        (activity) => activity.id !== action.payload
      );
    },
  },
});

export const {
  setUser,
  setActivities,
  addActivity,
  updateActivity,
  removeActivity,
} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
export type { Activity, User };
