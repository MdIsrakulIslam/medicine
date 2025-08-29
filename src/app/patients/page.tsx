// app/patients/page.tsx
"use client";

import Header from "@/components/Header";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { useSelector } from "react-redux";
import AddPatientModal from "../../components/AddPatientModal";
import PatientModal from "../../components/PatienModal";
import Sidebar from "../../components/Sidebar";
import { Patient } from "../redux/pateientsSlice";
import { RootState } from "../redux/store";
import { RxCross2 } from "react-icons/rx";

export default function PatientsPage() {
  const { patients, totalPatients, recoveredCount, flaggedCount, activeCount } =
    useSelector((state: RootState) => state.patients);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isPatientModalOpen, setIsPatientModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [surgeryTypeFilter, setSurgeryTypeFilter] = useState("");

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsPatientModalOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Recovered":
        return "bg-green-100 text-green-800";
      case "Flagged":
        return "bg-[#FF5555] text-white";
      case "Active":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All Status" || patient.status === statusFilter;
    const matchesSurgeryType =
      !surgeryTypeFilter || patient.surgeryType === surgeryTypeFilter;
    return matchesSearch && matchesStatus && matchesSurgeryType;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("All Status");
    setSurgeryTypeFilter("");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 p-4 md:p-6">
        <Header />

        <div className="bg-gray-50 p-4 md:p-6">
          {/* Patient Management Header */}
          <div className="p-4 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Patient management ({totalPatients})
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full md:w-auto">
                <div className="w-full sm:w-auto">
                  <p className="text-black border-2 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer">
                    <CiCalendar />
                    January 2025
                  </p>
                </div>
                <div className="w-full sm:w-auto">
                  <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
                  >
                    + Add Patient
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h1 className="p-2">Search</h1>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 items-center w-full">
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-[400px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-[#8C8C8C] hidden md:block text-sm whitespace-nowrap">or filter by</p>
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Recovered</option>
                <option>Flagged</option>
              </select>

              <select
                value={surgeryTypeFilter}
                onChange={(e) => setSurgeryTypeFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="">All Surgery Types</option>
                <option value="Knee Replacement">Knee Replacement</option>
                <option value="Hip Replacement">Hip Replacement</option>
                <option value="Shoulder Surgery">Shoulder Surgery</option>
                <option value="Spine Surgery">Spine Surgery</option>
                <option value="Other">Other</option>
              </select>
              <button
                onClick={clearFilters}
                className="w-full md:w-auto px-12  border border-gray-300 rounded-md hover:bg-gray-50 whitespace-nowrap py-2 flex gap-2 items-center cursor-pointer"
              >
                <RxCross2 />
                Clear Filters
              </button>
            </div>
          </div>

          {/* Patients Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden overflow-x-auto">
            <div className="overflow-x-auto">
              <table className="min-w-[1024px] lg:w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider min-w-[200px]">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider min-w-[150px]">
                      Surgery Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider min-w-[120px]">
                      Surgery Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider min-w-[100px]">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider min-w-[120px]">
                      Last Active
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPatients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 text-sm font-medium">
                              {patient.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <button
                              onClick={() => handlePatientClick(patient)}
                              className="text-blue-600 hover:text-blue-800 font-medium text-left cursor-pointer"
                            >
                              {patient.name}
                            </button>
                            <p className="text-sm text-gray-500">
                              {patient.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {patient.surgeryType}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {patient.surgeryDate}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            patient.status
                          )}`}
                        >
                          {patient.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {patient.lastActive}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
