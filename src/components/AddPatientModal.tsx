// components/AddPatientModal.tsx
"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPatient } from '../app/redux/pateientsSlice';

interface AddPatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  
}

export default function AddPatientModal({ isOpen, onClose }: AddPatientModalProps) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    surgeryType: '',
    surgeryDate: '',
    status: 'Active' as 'Active' | 'Recovered' | 'Flagged'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newPatient = {
      ...formData,
      lastActive: new Date().toISOString().split('T')[0],
      painLevel: 5,
      mobilityLevel: 5,
      moodLevel: 5
    };
    
      //   Show patient data in the console
     console.log("New Patient Data:", newPatient);

    dispatch(addPatient(newPatient));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      surgeryType: '',
      surgeryDate: '',
      status: 'Active'
    });
    
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-40 flex items-center justify-center z-modal">
      <div className="bg-white  rounded-lg p-6 w-full max-w-md mx-4 shadow-xl">
        <div className="flex justify-between items-center mb-4 ">
          <h3 className="text-lg font-semibold">Add New Patient</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Surgery Type
            </label>
            <select
              name="surgeryType"
              value={formData.surgeryType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Surgery Type</option>
              <option value="Knee Replacement">Knee Replacement</option>
              <option value="Hip Replacement">Hip Replacement</option>
              <option value="Shoulder Surgery">Shoulder Surgery</option>
              <option value="Spine Surgery">Spine Surgery</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Surgery Date
            </label>
            <input
              type="date"
              name="surgeryDate"
              value={formData.surgeryDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Active">Active</option>
              <option value="Recovered">Recovered</option>
              <option value="Flagged">Flagged</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer" 
            >
              Add Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}