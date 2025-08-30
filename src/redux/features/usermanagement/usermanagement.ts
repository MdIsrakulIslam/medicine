import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  email: string;
  joined: string;
  seasonComplete: boolean;
  avatar: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [
    {
      id: 1,
      name: 'Darlene',
      email: 'alex.runner@example.com',
      joined: 'Jun 1, 2024',
      seasonComplete: true,
      avatar: 'https://i.pravatar.cc/40?img=1',
    },
    {
      id: 2,
      name: 'Darlene',
      email: 'alex.runner@example.com',
      joined: 'Jun 1, 2024',
      seasonComplete: true,
      avatar: 'https://i.pravatar.cc/40?img=2',
    },
    {
      id: 3,
      name: 'Darlene',
      email: 'alex.runner@example.com',
      joined: 'Jun 1, 2024',
      seasonComplete: false,
      avatar: 'https://i.pravatar.cc/40?img=3',
    },
    {
      id: 4,
      name: 'Darlene',
      email: 'alex.runner@example.com',
      joined: 'Jun 1, 2024',
      seasonComplete: false,
      avatar: 'https://i.pravatar.cc/40?img=4',
    },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { setUsers, updateUser } = userSlice.actions;
export default userSlice.reducer;
