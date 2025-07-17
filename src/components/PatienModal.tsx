// components/PatientModal.tsx
"use client";

import { Patient } from '../app/redux/pateientsSlice';

interface PatientModalProps {
  patient: Patient;
  isOpen: boolean;
  onClose: () => void;
}

export default function PatientModal({ patient, isOpen, onClose }: PatientModalProps) {
  if (!isOpen) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Recovered': return 'bg-green-100 text-green-800';
      case 'Flagged': return 'bg-red-100 text-red-800';
      case 'Active': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (level: number) => {
    if (level <= 3) return 'bg-red-500';
    if (level <= 6) return 'bg-blue-500';
    return 'bg-green-500';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold">Patient Profile</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-600">{patient.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(patient.status)}`}>
                {patient.status}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>

        {patient.status === 'Flagged' && patient.flaggedCase && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-red-600 text-sm">⚠️</span>
              <span className="text-red-800 font-medium text-sm">Flagged Case</span>
            </div>
            <p className="text-red-700 text-sm">{patient.flaggedCase}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Personal Information</h4>
            <div className="space-y-2 text-sm">
              <div><span className="text-gray-500">DOB:</span> Feb-07-74</div>
              <div><span className="text-gray-500">Gender:</span> Male</div>
              <div><span className="text-gray-500">Height:</span> 5'10"</div>
              <div><span className="text-gray-500">Weight:</span> 180 lbs</div>
              <div><span className="text-gray-500">Email:</span> {patient.email}</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Surgery Details</h4>
            <div className="space-y-2 text-sm">
              <div><span className="text-gray-500">Type:</span> {patient.surgeryType}</div>
              <div><span className="text-gray-500">Date:</span> {patient.surgeryDate}</div>
              <div><span className="text-gray-500">Surgeon:</span> Dr. Lisa Thompson</div>
              <div><span className="text-gray-500">Last Active:</span> {patient.lastActive}</div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-3">Recovery Metrics</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Pain Level</span>
                <span>{patient.painLevel}/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getProgressColor(patient.painLevel)}`}
                  style={{ width: `${patient.painLevel * 10}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Mobility Level</span>
                <span>{patient.mobilityLevel}/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getProgressColor(patient.mobilityLevel)}`}
                  style={{ width: `${patient.mobilityLevel * 10}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Mood Level</span>
                <span>{patient.moodLevel}/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getProgressColor(patient.moodLevel)}`}
                  style={{ width: `${patient.moodLevel * 10}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded">
            📱 Vlog Case
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}