import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: 500,
  patients: 156,
  providers: 50,
  flaggedCases: 30,
  chartData: Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    completed: Math.floor(Math.random() * 80) + 10,
  
  })),
  notifications: [
    { heading:'New flagged case', type: 'flag',  message: 'Robert flagged case ',  time: '2 mins ago' },
    { heading:'New Patient Registration', type: 'new', message: 'Mike registered as knee patient', time: '15 mins ago' },
     { heading:'New flagged case', type: 'flag', message: 'Robert flagged case ', time: '2 mins ago' },
    { heading:'New Patient Registration', type: 'new', message: 'Mike registered as knee patient', time: '15 mins ago' },
    
  ],
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
});

export default statsSlice.reducer;
