import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from './features/dashboard/dashboardslice';
import profileReducer from './features/profile/profile';
import userAccountReducer from './features/usermanagement/usermanagement';
import userActivitiesReducer from './features/UserActivites/useractivites';
import completedSeasonReducer from './features/CompletedSeason/completedseason';
import additionalMilesReducer from './features/AdditionalMile/additionalmile';
import adminuserReducer from './features/AdminDashboard/admindashboard';
import userDetailsReducer from './features/UserDetails/userdetails';

import { persistReducer, persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import userReducer from "./features/user/userSlice";
import baseApi from "./api/baseApi";

// Create a noop storage for SSR
const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem() {
    return Promise.resolve();
  },
  removeItem() {
    return Promise.resolve();
  },
});

// Use real storage on client, noop on server
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
  blacklist: [baseApi.reducerPath],
};

const rootReducer = combineReducers({
  user: userReducer,
  userDashboard: dashboardReducer,
  profile: profileReducer,
  userAccount: userAccountReducer,
  userActivities: userActivitiesReducer,
  completedSeason: completedSeasonReducer,
  additionalMiles: additionalMilesReducer,
  adminuser: adminuserReducer,
  userDetails: userDetailsReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

// Infer the type of store
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
