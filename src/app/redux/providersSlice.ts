import { createSlice } from '@reduxjs/toolkit';

interface Provider {
  id: number;
  name: string;
  email: string;
  specialization: string;
  hospital: string;
  lastActive: string;
  phone: string;
  joinDate: string;
  avatar: string;
}

const initialState = {
  providers: [
    {
      id: 1,
      name: "Dr. James Wilson",
      email: "james.wilson@lamare.com",
      specialization: "Orthopedic Surgery",
      hospital: "Dhaka Medical College Hospital",
      lastActive: "2024-01-20",
      phone: "+1 (555) 111-2222",
      joinDate: "2014-06-15",
      avatar: "JW"
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@lamare.com",
      specialization: "Cardiology",
      hospital: "Dhaka Medical College Hospital",
      lastActive: "2024-01-19",
      phone: "+1 (555) 222-3333",
      joinDate: "2016-03-22",
      avatar: "SJ"
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      email: "michael.chen@lamare.com",
      specialization: "Neurology",
      hospital: "Square Hospital",
      lastActive: "2024-01-18",
      phone: "+1 (555) 333-4444",
      joinDate: "2018-09-10",
      avatar: "MC"
    },
    {
      id: 4,
      name: "Dr. Emily Davis",
      email: "emily.davis@lamare.com",
      specialization: "Pediatrics",
      hospital: "United Hospital",
      lastActive: "2024-01-17",
      phone: "+1 (555) 444-5555",
      joinDate: "2019-11-05",
      avatar: "ED"
    },
    {
      id: 5,
      name: "Dr. Robert Brown",
      email: "robert.brown@lamare.com",
      specialization: "Dermatology",
      hospital: "Apollo Hospital",
      lastActive: "2024-01-16",
      phone: "+1 (555) 555-6666",
      joinDate: "2020-01-15",
      avatar: "RB"
    },
    {
      id: 6,
      name: "Dr. Lisa Anderson",
      email: "lisa.anderson@lamare.com",
      specialization: "Gynecology",
      hospital: "Dhaka Medical College Hospital",
      lastActive: "2024-01-15",
      phone: "+1 (555) 666-7777",
      joinDate: "2017-07-20",
      avatar: "LA"
    }
  ] as Provider[],
  totalProviders: 100,
  filteredProviders: [] as Provider[]
};

const providersSlice = createSlice({
  name: 'providers',
  initialState,
  reducers: {
    filterProviders: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredProviders = state.providers.filter(provider =>
        provider.name.toLowerCase().includes(searchTerm) ||
        provider.specialization.toLowerCase().includes(searchTerm) ||
        provider.hospital.toLowerCase().includes(searchTerm)
      );
    },
    clearFilter: (state) => {
      state.filteredProviders = [];
    }
  },
});

export const { filterProviders, clearFilter } = providersSlice.actions;
export default providersSlice.reducer;