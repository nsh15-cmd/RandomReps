import { useState } from "react";
import {
  FiMoreVertical,
  FiTrendingUp,
  FiSearch,
  FiFilter,
  FiPlus,
  FiMoreHorizontal,
  FiEdit2,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
} from "react-icons/fi";

export default function Brand() {
  const [activeTab, setActiveTab] = useState("All Brands");

  // Top Metrics
  const stats = [
    { title: "Total Brands", value: "48", trend: "+4", isPositive: true },
    { title: "Active Brands", value: "45", trend: "+2", isPositive: true },
    { title: "Top Brand", value: "Versace", subtext: "₱1.2M Sales" },
    { title: "New This Month", value: "3", trend: "15%", isPositive: true },
  ];

  // Mock Data mapped from your homepage brands
  const brandsList = [
    {
      id: "#BRD001",
      name: "Versace",
      category: "Luxury Fashion",
      products: 124,
      sales: "₱1,250,000",
      status: "Active",
      rating: 4.9,
    },
    {
      id: "#BRD002",
      name: "Zara",
      category: "Fast Fashion",
      products: 450,
      sales: "₱840,000",
      status: "Active",
      rating: 4.5,
    },
    {
      id: "#BRD003",
      name: "Gucci",
      category: "Luxury Fashion",
      products: 85,
      sales: "₱960,000",
      status: "Active",
      rating: 4.8,
    },
    {
      id: "#BRD004",
      name: "Prada",
      category: "Luxury Accessories",
      products: 62,
      sales: "₱720,000",
      status: "Active",
      rating: 4.7,
    },
    {
      id: "#BRD005",
      name: "Calvin Klein",
      category: "Apparel & Underwear",
      products: 210,
      sales: "₱530,000",
      status: "Active",
      rating: 4.6,
    },
    {
      id: "#BRD006",
      name: "Nike",
      category: "Sportswear",
      products: 320,
      sales: "₱1,100,000",
      status: "Active",
      rating: 4.9,
    },
    {
      id: "#BRD007",
      name: "Adidas",
      category: "Sportswear",
      products: 280,
      sales: "₱980,000",
      status: "Active",
      rating: 4.7,
    },
    {
      id: "#BRD008",
      name: "Balenciaga",
      category: "High Fashion",
      products: 45,
      sales: "₱450,000",
      status: "Inactive",
      rating: 4.2,
    },
  ];

  const renderStatus = (status: string) => {
    return status === "Active" ? (
      <span className="flex items-center gap-2 text-sm font-medium text-green-600">
        <span className="w-2 h-2 rounded-full bg-green-500"></span> Active
      </span>
    ) : (
      <span className="flex items-center gap-2 text-sm font-medium text-red-500">
        <span className="w-2 h-2 rounded-full bg-red-500"></span> Inactive
      </span>
    );
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="font-heading font-black text-2xl tracking-tighter text-brand-black">
          Brand Management
        </h1>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-brand-black text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
            <FiPlus className="text-lg" /> Add Brand
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            Export <FiMoreVertical />
          </button>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-500 text-sm">{stat.title}</h3>
              <button className="text-gray-400 hover:text-brand-black transition-colors">
                <FiMoreVertical />
              </button>
            </div>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="font-heading font-black text-3xl tracking-tighter text-brand-black">
                {stat.value}
              </span>
              {stat.trend && (
                <span
                  className={`text-xs font-bold flex items-center ${stat.isPositive ? "text-green-500" : "text-red-500"}`}
                >
                  {stat.isPositive && <FiTrendingUp className="mr-1" />}{" "}
                  {stat.trend}
                </span>
              )}
            </div>
            {stat.subtext && (
              <p className="text-xs text-blue-500 font-bold mt-2">
                {stat.subtext}
              </p>
            )}
            {!stat.subtext && (
              <p className="text-xs text-gray-400 mt-2">
                Compared to last month
              </p>
            )}
          </div>
        ))}
      </div>

      {/* MAIN TABLE CONTAINER */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        {/* Table Controls (Tabs & Search) */}
        <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          <div className="flex gap-2 p-1 bg-gray-50 rounded-xl border border-gray-100 w-full sm:w-auto overflow-x-auto scrollbar-hide">
            {["All Brands", "Active", "Inactive"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-white text-green-700 shadow-sm border border-gray-200"
                    : "text-gray-500 hover:text-brand-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full xl:w-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-xl flex items-center px-4 py-2 flex-1 xl:w-64">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search brands..."
                className="bg-transparent w-full outline-none text-sm placeholder-gray-400"
              />
            </div>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
              <FiFilter />
            </button>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
              <FiMoreHorizontal />
            </button>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#F0FDF4] border-b border-green-100">
              <tr className="text-[#2F5A41] font-semibold">
                <th className="py-4 px-6 w-10">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 accent-brand-black"
                  />
                </th>
                <th className="py-4 px-6">Brand Name</th>
                <th className="py-4 px-6">Main Category</th>
                <th className="py-4 px-6">Items</th>
                <th className="py-4 px-6">Total Sales</th>
                <th className="py-4 px-6">Rating</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {brandsList.map((brand, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 accent-brand-black"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center border border-gray-200">
                        <span className="font-heading font-black text-brand-black text-lg">
                          {brand.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-brand-black block">
                          {brand.name}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {brand.id}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-500">{brand.category}</td>
                  <td className="py-4 px-6 font-medium text-brand-black">
                    {brand.products}
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-black">
                    {brand.sales}
                  </td>
                  <td className="py-4 px-6">
                    <span className="flex items-center gap-1 text-brand-black font-medium">
                      <FiStar className="text-yellow-400 fill-yellow-400" />{" "}
                      {brand.rating}
                    </span>
                  </td>
                  <td className="py-4 px-6">{renderStatus(brand.status)}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                        title="Edit"
                      >
                        <FiEdit2 className="text-lg" />
                      </button>
                      <button
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <FiTrash2 className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
            <FiChevronLeft /> Previous
          </button>

          <div className="flex items-center gap-1 overflow-x-auto max-w-full pb-2 sm:pb-0 scrollbar-hide">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C1F0C8] text-green-800 font-bold flex-shrink-0">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-500 font-medium flex-shrink-0">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-500 font-medium flex-shrink-0">
              3
            </button>
            <span className="px-2 text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-500 font-medium flex-shrink-0">
              5
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
            Next <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
