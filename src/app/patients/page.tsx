// app/patients/page.tsx
"use client";

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Sidebar from '../../components/Sidebar';
import PatientModal from '../../components/PatienModal';
import AddPatientModal from '../../components/AddPatientModal';
import { Patient } from '../redux/pateientsSlice';
import { CiCalendar } from 'react-icons/ci';
import Header from '@/components/Header';

export default function PatientsPage() {
  const { patients, totalPatients, recoveredCount, flaggedCount, activeCount } = useSelector((state: RootState) => state.patients);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isPatientModalOpen, setIsPatientModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsPatientModalOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Recovered': return 'bg-green-100 text-green-800';
      case 'Flagged': return 'bg-[#FF5555] text-white';
      case 'Active': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All Status' || patient.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex min-h-screen ">
      <Sidebar />
      
      <div className="flex-1 p-6 ">
        <Header/> 
        {/* <div className=" p-4 bg-white mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-semibold">Hi Rashed Khan</h1>
              <p className="text-sm text-gray-500">Welcome back! Here's what's happening with your Lamare mobile app.</p>
            </div>
           </div>
        </div> */}

       <div className='bg-gray-50 p-6'>
         {/* Patient Management Header */}
        <div className=" p-4 mb-6 ">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-semibold">Patient management ({totalPatients})</h2>
              
            </div>
            <div className=" flex items-center gap-2">
              <div>
                
              <p className=" text-blck  border-2 px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"> <CiCalendar />January 2025</p>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsAddModalOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
                >
                  + Add Patient
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
           <h1 className='p-2'>Search</h1>
          <div className="flex gap-4 items-center justify-between">
           <div className="flex gap-6 items-center">
              <input
              
                type="text"
                placeholder="Search by name..."
                
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[400px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                
              />
             <p className='w-[100px] text-[#8C8C8C]'>or filter by</p>
            </div>
            
              <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Recovered</option>
              <option>Flagged</option>
            </select>
            

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Surgery Type</option>
              <option value="Knee Replacement">Knee Replacement</option>
              <option value="Hip Replacement">Hip Replacement</option>
              <option value="Shoulder Surgery">Shoulder Surgery</option>
              <option value="Spine Surgery">Spine Surgery</option>
              <option value="Other">Other</option>
            </select>
            <button className="w-2xs  px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              Clear Filters
            </button>
          </div>
        </div>

        {/* Patients Table */}
        <div className="bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Surgery Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Surgery Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Last Active</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-sm font-medium">
                          {patient.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <button
                          onClick={() => handlePatientClick(patient)}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {patient.name}
                        </button>
                        <p className="text-sm text-gray-500">{patient.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.surgeryType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.surgeryDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.lastActive}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       </div>

       
      </div>

      {/* Modals */}
      {selectedPatient && (
        <PatientModal
         patient={selectedPatient}
          isOpen={isPatientModalOpen}
          onClose={() => {
            setIsPatientModalOpen(false);
            setSelectedPatient(null);
          }}
        />
      )}

      <AddPatientModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
}