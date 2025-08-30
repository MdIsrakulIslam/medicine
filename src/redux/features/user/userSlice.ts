import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../../../interfaces/global";
import { RootState } from "../../store"; // Correct import of RootState

const initialState: {
  user: UserProfile | null;
  token: string | null;
  userId?: string | null;
} = {
  user: null,
  token: null,
  userId: null,
};

const userSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setUserOnlyId: (state, action) => {
      state.userId = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userId = null;
    },
  },
});

export const selectUser = (state: RootState) => state.user; // Corrected selector with RootState without generics

export const { setUser, logout, setUserOnlyId } = userSlice.actions;
export default userSlice.reducer;
