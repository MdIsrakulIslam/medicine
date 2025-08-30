import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserActivity {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
  status: 'Active' | 'Inactive';
  avatarUrl: string;
}

interface UserActivitiesState {
  users: UserActivity[];
}

const initialState: UserActivitiesState = {
  users: [
    {
      id: '1',
      name: 'Darlene',
      email: 'alex.runner@example.com',
      joinedDate: 'Jun 1, 2024',
      status: 'Active',
      avatarUrl: '/avatars/avatar1.png',
    },
    {
      id: '2',
      name: 'Samuel',
      email: 'samuel.dev@example.com',
      joinedDate: 'May 15, 2024',
      status: 'Active',
      avatarUrl: '/avatars/avatar2.png',
    },
    {
      id: '3',
      name: 'Lina',
      email: 'lina.marketing@example.com',
      joinedDate: 'Apr 20, 2024',
      status: 'Inactive',
      avatarUrl: '/avatars/avatar3.png',
    },
    {
      id: '4',
      name: 'Harvey',
      email: 'harvey.doe@example.com',
      joinedDate: 'Mar 10, 2024',
      status: 'Active',
      avatarUrl: '/avatars/avatar4.png',
    },
    {
      id: '5',
      name: 'Angela',
      email: 'angela.hr@example.com',
      joinedDate: 'Feb 28, 2024',
      status: 'Active',
      avatarUrl: '/avatars/avatar5.png',
    },
    {
      id: '6',
      name: 'Jacob',
      email: 'jacob.fin@example.com',
      joinedDate: 'Jan 5, 2024',
      status: 'Inactive',
      avatarUrl: '/avatars/avatar6.png',
    },
    {
      id: '7',
      name: 'Monica',
      email: 'monica.sales@example.com',
      joinedDate: 'Dec 22, 2023',
      status: 'Active',
      avatarUrl: '/avatars/avatar7.png',
    },
  ],
};


const userActivitiesSlice = createSlice({
  name: 'userActivities',
  initialState,
  reducers: {
    setUserActivities(state, action: PayloadAction<UserActivity[]>) {
      state.users = action.payload;
    },
  },
});

export const { setUserActivities } = userActivitiesSlice.actions;
export default userActivitiesSlice.reducer;
export type { UserActivity };
