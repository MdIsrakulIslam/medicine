"use client";

import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header";
import ProfileModal from "../../../components/providerModal";
import Sidebar from "../../../components/Sidebar";
import { clearFilter, filterProviders } from "../../redux/providersSlice";
import { AppDispatch, RootState } from "../../redux/store";

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

export default function ProvidersPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { providers, totalProviders, filteredProviders } = useSelector(
    (state: RootState) => state.providers
  );
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(
    null
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const displayProviders =
    filteredProviders.length > 0 || searchTerm ? filteredProviders : providers;

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.trim()) {
      dispatch(filterProviders(value));
    } else {
      dispatch(clearFilter());
    }
  };

  const handleProviderClick = (provider: Provider) => {
    setSelectedProvider(provider);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
        onClose={closeSidebar}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isMobile ? "" : "ml-0"
        }`}
      >
        {/* Mobile Header with Menu Button - only visible on mobile */}
        {isMobile && (
          <div className="bg-white  px-4 py-4 flex items-center justify-between sticky top-0 z-30">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <FiMenu className="w-5 h-5" />
            </button>

            <div className="w-10" />
          </div>
        )}

        <div className="p-6">
          <Header />
          <div className="bg-slate-50 p-5 overflow-x-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">
                Healthcare professionals management ({totalProviders})
              </h1>
            </div>

            <div className="mb-6">
              <div className="relative w-full">
                <IoSearch className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Table */}
            <div className="rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full overflow-x-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Specialization
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                        Hospital or chamber
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider whitespace-nowrap">
                        Last active
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {displayProviders.map((provider) => (
                      <tr
                        key={provider.id}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleProviderClick(provider)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                              {provider.avatar}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {provider.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {provider.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            {provider.specialization}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {provider.hospital}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {provider.lastActive}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {selectedProvider && (
        <ProfileModal
          provider={selectedProvider}
          onClose={() => setSelectedProvider(null)}
        />
      )}
    </div>
  );
}
