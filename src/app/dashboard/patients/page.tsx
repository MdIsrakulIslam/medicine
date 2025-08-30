"use client";

import { useState, useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi"; // Correct burger menu icon for large screens
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import AddPatientModal from "../../../components/AddPatientModal";

import Sidebar from "../../../components/Sidebar";
import { RootState } from "../../redux/store";
import { Patient } from "../../redux/pateientsSlice";
import PatientModal from "@/components/PatienModal";
import Header from "@/components/Header";

export default function PatientsPage() {
  const { patients, totalPatients, recoveredCount, flaggedCount, activeCount } =
    useSelector((state: RootState) => state.patients);

  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isPatientModalOpen, setIsPatientModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [surgeryTypeFilter, setSurgeryTypeFilter] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false); // Managing medium screen detection

  // Check screen size and adjust sidebar visibility
  useEffect(() => {
    const checkScreenSize = () => {
      const medium = window.innerWidth >= 768 && window.innerWidth < 1024;
      setIsMediumScreen(medium);
      if (medium) {
        setIsSidebarOpen(false);  // Hide sidebar on medium screens initially
      } else {
        setIsSidebarOpen(true);   // Keep sidebar open on larger screens
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener on resize
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);  // Cleanup listener
    };
  }, []);

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsPatientModalOpen(true);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);  // Toggle sidebar visibility
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);  // Close sidebar on mobile or medium screens
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

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("All Status");
    setSurgeryTypeFilter("");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar component with state handling */}
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
        onClose={closeSidebar}
      />

      <div className={`flex-1 p-4 ${isMediumScreen ? "ml-0" : ""}`}>
        {/* Mobile Header with Menu Button */}
        {isMediumScreen && (
          <div className="bg-white  px-2 py-3 flex items-center justify-between sticky top-0 z-30">
            <button
              onClick={toggleSidebar}
              className=" rounded-md hover:bg-gray-100 transition-colors"
            >
              <FiMenu className="w-5 h-5" />
            </button>
          
            <div className="w-10" />
          </div>
        )}

        {/* Header for Large Screens */}
        {/* <div className="flex items-center justify-between mb-6">
           
          <div className="flex items-center">
            {!isMediumScreen && (
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 mr-4"
              >
                <HiMenuAlt3 className="w-5 h-5" />
              </button>
            )}
           
          </div>
        </div> */}

        <div className=" ml-2 md:mt-5">
             <Header></Header>
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
          {/* Patient Management Header */}
          <div className=" mb-6">
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
          <div className="bg-white rounded-lg shadow">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-xs font-medium text-black uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-xs font-medium text-black uppercase tracking-wider">Surgery Type</th>
                    <th className="px-4 py-3 text-xs font-medium text-black uppercase tracking-wider">Surgery Date</th>
                    <th className="px-4 py-3 text-xs font-medium text-black uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-xs font-medium text-black uppercase tracking-wider">Last Active</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPatients.map((patient) => (
                    <tr
                      key={patient.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => handlePatientClick(patient)}
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 text-sm font-medium">
                              {patient.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                            <div className="text-sm text-gray-500">{patient.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm">{patient.surgeryType}</td>
                      <td className="px-4 py-4 text-sm">{patient.surgeryDate}</td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                          {patient.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm">{patient.lastActive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
