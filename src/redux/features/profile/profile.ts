import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber: string;
  newPassword: string;
  oldPassword: string;
  confirmPassword: string;
  profilePhoto: string | null;
  memberName: string;
  memberEmail: string;
  hasStrava?: boolean;
}

interface UpdateProfilePayload {
  field: keyof ProfileState;
  value: string;
}

const initialState: ProfileState = {
  //   name: 'Alex Bot',
  firstName: "Alex",
  lastName: "Bot",
  email: "alex.runner@example.com",
  phoneNumber: "+1354798781",
  newPassword: "••••••••",
  oldPassword: "••••••••",
  confirmPassword: "••••••••",
  profilePhoto: null,
  memberName: "Alex Runner",
  memberEmail: "alex.runner@example.com",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile(state, action: PayloadAction<UpdateProfilePayload>) {
      const { field, value } = action.payload;
      (state[field] as string) = value;
    },
    changePhoto(state, action: PayloadAction<string>) {
      state.profilePhoto = action.payload;
    },
  },
});

export const { updateProfile, changePhoto } = profileSlice.actions;
export default profileSlice.reducer;
