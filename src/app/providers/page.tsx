"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../../components/dashboard-layout";
import ProfileModal from "../../components/providerModal";
import { clearFilter, filterProviders } from "../redux/providersSlice";
import { AppDispatch, RootState } from "../redux/store";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(
    null
  );

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

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Healthcare Professionals Management ({totalProviders})
          </h1>
        </div>

        {/* Search */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Search Providers</h3>
          <div className="relative w-full">
            <IoSearch className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or specialization..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Providers Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            {/* Medium device card view */}
            <div className="md:hidden">
              {displayProviders.map((provider) => (
                <div
                  key={provider.id}
                  className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleProviderClick(provider)}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
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
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Specialization:</span>
                      <div className="text-gray-900">{provider.specialization}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Hospital:</span>
                      <div className="text-gray-900">{provider.hospital}</div>
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium text-gray-700">Last Active:</span>
                      <div className="text-gray-900">{provider.lastActive}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table view */}
            <table className="hidden md:table w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Specialization
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Hospital or Chamber
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Last Active
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayProviders.map((provider) => (
                  <tr
                    key={provider.id}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => handleProviderClick(provider)}
                  >
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
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
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900 font-medium">
                        {provider.specialization}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {provider.hospital}
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm ">
                      {provider.lastActive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {displayProviders.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-2">
                No providers found
              </div>
              <p className="text-gray-500 text-sm">
                {searchTerm
                  ? "Try adjusting your search criteria"
                  : "No healthcare providers available"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedProvider && (
        <ProfileModal
          provider={selectedProvider}
          onClose={() => setSelectedProvider(null)}
        />
      )}
    </DashboardLayout>
  );
}