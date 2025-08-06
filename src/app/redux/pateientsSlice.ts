// redux/patientsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  surgeryType: string;
  surgeryDate: string;
  status: 'Recovered' | 'Flagged' | 'Active';
  lastActive: string;
  painLevel: number;
  mobilityLevel: number;
  moodLevel: number;
  flaggedCase?: string;
}

interface PatientsState {
  patients: Patient[];
  totalPatients: number;
  recoveredCount: number;
  flaggedCount: number;
  activeCount: number;
}

const initialState: PatientsState = {
  patients: [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      surgeryType: 'Knee Replacement',
      surgeryDate: '2024-01-15',
      status: 'Recovered',
      lastActive: '2024-01-20',
      painLevel: 2,
      mobilityLevel: 8,
      moodLevel: 9
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson2@email.com',
      phone: '+1 (555) 123-4568',
      surgeryType: 'Knee Replacement',
      surgeryDate: '2024-01-15',
      status: 'Recovered',
      lastActive: '2024-01-20',
      painLevel: 1,
      mobilityLevel: 9,
      moodLevel: 8
    },
    {
      id: '3',
      name: 'toni',
      email: 'israk.johnson3@email.com',
      phone: '+1 (555) 123-4569',
      surgeryType: 'Knee Replacement',
      surgeryDate: '2024-01-15',
      status: 'Flagged',
      lastActive: '2024-01-20',
      painLevel: 8,
      mobilityLevel: 3,
      moodLevel: 4,
      flaggedCase: 'High pain levels reported for 3 consecutive days'
    },
    {
      id: '4',
      name: 'Sarah Johnson',
      email: 'sarah.johnson4@email.com',
      phone: '+1 (555) 123-4570',
      surgeryType: 'Knee Replacement',
      surgeryDate: '2024-01-15',
      status: 'Active',
      lastActive: '2024-01-20',
      painLevel: 4,
      mobilityLevel: 6,
      moodLevel: 7
    },
    {
      id: '5',
      name: 'Sarah Johnson',
      email: 'sarah.johnson5@email.com',
      phone: '+1 (555) 123-4571',
      surgeryType: 'Knee Replacement',
      surgeryDate: '2024-01-15',
      status: 'Flagged',
      lastActive: '2024-01-20',
      painLevel: 7,
      mobilityLevel: 4,
      moodLevel: 5,
      flaggedCase: 'Mobility concerns - requires attention'
    },
    {
      id: '6',
      name: 'Sarah Johnson',
      email: 'sarah.johnson6@email.com',
      phone: '+1 (555) 123-4572',
      surgeryType: 'Knee Replacement',
      surgeryDate: '2024-01-15',
      status: 'Active',
      lastActive: '2024-01-20',
      painLevel: 3,
      mobilityLevel: 7,
      moodLevel: 8
    }
  ],
  totalPatients: 500,
  recoveredCount: 300,
  flaggedCount: 50,
  activeCount: 150
};

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<Omit<Patient, 'id'>>) => {
      const newPatient = {
        ...action.payload,
        id: Date.now().toString()
      };
      state.patients.push(newPatient);
      state.totalPatients++;
      
      // Update counts based on status
      if (newPatient.status === 'Recovered') state.recoveredCount++;
      else if (newPatient.status === 'Flagged') state.flaggedCount++;
      else if (newPatient.status === 'Active') state.activeCount++;
    }
  }
});

export const { addPatient } = patientsSlice.actions;
export default patientsSlice.reducer;