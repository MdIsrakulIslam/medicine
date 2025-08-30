import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MonthlyThreshold {
  current: number;
  target: number;
  percentage: number;
}

interface ThresholdProgress {
  current: number;
  target: number;
  percentage: number;
}

interface Activity {
  type: string;
  distance: string;
  duration: string;
  date: string;
}

interface SeasonCompletion {
  season: string;
  months: string;
  mo1: boolean;
  mo2: boolean;
  mo3: boolean;
  met: boolean;
}

interface MonthlyMiles {
  month: string;
  miles: number;
  season: string;
  met: boolean;
}

interface DashboardState {
  loading: boolean;
  totalUsers: number;
  totalPatients: number;
  totalProviders: number;
  flaggedCases: number;
  membershipMonths: number;
  monthlyThreshold: MonthlyThreshold;
  thresholdProgress: ThresholdProgress;
  activities: Activity[];
  seasonCompletion: SeasonCompletion[];
  monthlyMiles: MonthlyMiles[];
}

const initialState: DashboardState = {
  loading: false,
  totalUsers: 0,
  totalPatients: 0,
  totalProviders: 0,
  flaggedCases: 0,
  membershipMonths: 24,
  monthlyThreshold: {
    current: 36.2,
    target: 40.2,
    percentage: 90,
  },
  thresholdProgress: {
    current: 19.2,
    target: 70.0,
    percentage: 16,
  },
  activities: [
    { type: "Walk", distance: "5.2miles", duration: "54 min", date: "Jul 31, 2025" },
    { type: "Walk", distance: "5.2miles", duration: "54 min", date: "Jul 31, 2025" },
    { type: "Hike", distance: "5.2miles", duration: "54 min", date: "Jul 31, 2025" },
  ],
  seasonCompletion: [
    { season: "Spring", months: "February - April", mo1: true, mo2: true, mo3: true, met: true },
    { season: "Summer", months: "May - June", mo1: true, mo2: true, mo3: true, met: true },
    { season: "Autumn", months: "August - October", mo1: false, mo2: false, mo3: false, met: false },
    { season: "Winter", months: "November - January", mo1: false, mo2: false, mo3: false, met: false },
  ],
  monthlyMiles: [
    { month: "February", miles: 30, season: "Spring (Feb - Apr)", met: true },
    { month: "March", miles: 35, season: "Spring (Feb - Apr)", met: true },
    { month: "April", miles: 35, season: "Summer (May - Jul)", met: false },
    { month: "May", miles: 35, season: "Autumn (Aug - Oct)", met: false },
    { month: "June", miles: 30, season: "Autumn (Aug - Oct)", met: true },
    { month: "July", miles: 35, season: "Spring (Feb - Apr)", met: true },
    { month: "August", miles: 35, season: "Spring (Feb - Apr)", met: true },
  ],
};
const dashboardSlice = createSlice({
  name: "dashboardfxs",
  initialState,  
  reducers: {
    setDashboardLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    increment: (state) => {
      state.activities
    },
    setDashboardStats: (
      state,
      action: PayloadAction<{
        totalUsers: number;
        totalPatients: number;
        totalProviders: number;
        flaggedCases: number;
      }>
    ) => {
      state.totalUsers = action.payload.totalUsers;
      state.totalPatients = action.payload.totalPatients;
      state.totalProviders = action.payload.totalProviders;
      state.flaggedCases = action.payload.flaggedCases;
    },
    updateThresholdProgress: (state, action: PayloadAction<DashboardState["thresholdProgress"]>) => {
      state.thresholdProgress = action.payload;
    },
    updateActivities: (state, action: PayloadAction<DashboardState["activities"]>) => {
      state.activities = action.payload;
    },
    updateSeasonCompletion: (state, action: PayloadAction<DashboardState["seasonCompletion"]>) => {
      state.seasonCompletion = action.payload;
    },
    updateMonthlyMiles: (state, action: PayloadAction<DashboardState["monthlyMiles"]>) => {
      state.monthlyMiles = action.payload;
    },
  },
});

export const {
  setDashboardLoading,
  setDashboardStats,
  updateThresholdProgress,
  updateActivities,
  updateSeasonCompletion,
  updateMonthlyMiles,
  increment
} = dashboardSlice.actions;


export default dashboardSlice.reducer;
