"use client";

import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import AddPatientModal from "../../components/AddPatientModal";
import DashboardLayout from "../../components/dashboard-layout";
import PatientModal from "../../components/PatienModal";
import { RootState } from "../redux/store";
import { Patient } from "../redux/pateientsSlice";

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
    <DashboardLayout>
      <div className="space-y-6">
        {/* Patient Management Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Patient Management ({totalPatients})
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full md:w-auto">
            <div className="text-black border border-gray-300 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white flex items-center gap-2 transition-colors cursor-pointer w-full sm:w-auto justify-center">
              <CiCalendar />
              <span className="text-sm font-medium">January 2025</span>
            </div>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2 transition-colors cursor-pointer w-full sm:w-auto justify-center"
            >
              + Add Patient
            </button>
          </div>
        </div>

        {/* Filters - Updated for large screens */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Search & Filter</h3>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col lg:flex-row gap-4 items-center w-full lg:w-auto">
              <div className="relative w-full lg:w-[400px]">
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p className="text-gray-500 hidden lg:block text-sm whitespace-nowrap">
                or filter by
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full lg:w-[400px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Recovered</option>
                <option>Flagged</option>
              </select>

              <select
                value={surgeryTypeFilter}
                onChange={(e) => setSurgeryTypeFilter(e.target.value)}
                className="w-full lg:w-[500px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
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
                className="w-full lg:w-auto px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 whitespace-nowrap flex gap-2 items-center justify-center transition-colors cursor-pointer"
              >
                <RxCross2 />
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Patients Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            {/* Medium device card view */}
            <div className="md:hidden">
              {filteredPatients.map((patient) => (
                <div
                  key={patient.id}
                  className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handlePatientClick(patient)}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm font-medium">
                        {patient.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {patient.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {patient.email}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Surgery Type:</span>
                      <div className="text-gray-900">{patient.surgeryType}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Surgery Date:</span>
                      <div className="text-gray-900">{patient.surgeryDate}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Status:</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          patient.status
                        )}`}
                      >
                        {patient.status}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Last Active:</span>
                      <div className="text-gray-900">{patient.lastActive}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table view */}
            <table className="hidden md:table min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Surgery Type
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Surgery Date
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Last Active
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPatients.map((patient) => (
                  <tr
                    key={patient.id}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => handlePatientClick(patient)}
                  >
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 text-sm font-medium">
                            {patient.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {patient.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {patient.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {patient.surgeryType}
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {patient.surgeryDate}
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          patient.status
                        )}`}
                      >
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {patient.lastActive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredPatients.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-2">
                No patients found
              </div>
              <p className="text-gray-500 text-sm">
                {searchTerm || statusFilter !== "All Status" || surgeryTypeFilter
                  ? "Try adjusting your search criteria"
                  : "No patients available"}
              </p>
            </div>
          )}
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
    </DashboardLayout>
  );
}