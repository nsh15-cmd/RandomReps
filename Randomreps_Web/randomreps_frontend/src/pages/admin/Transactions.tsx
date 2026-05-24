import { useState } from "react";
import {
  FiMoreVertical,
  FiTrendingUp,
  FiSearch,
  FiFilter,
  FiList,
  FiMoreHorizontal,
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
} from "react-icons/fi";

export default function Transaction() {
  const [activeTab, setActiveTab] = useState("All order (240)");

  // Top Metrics Data
  const stats = [
    {
      title: "Total Revenue",
      value: "₱15,045",
      trend: "+14.4%",
      isPositive: true,
    },
    {
      title: "Completed Transactions",
      value: "3,150",
      trend: "+20%",
      isPositive: true,
    },
    {
      title: "Pending Transactions",
      value: "150",
      trend: "85%",
      isPositive: true,
    },
    {
      title: "Failed Transactions",
      value: "75",
      trend: "15%",
      isPositive: false,
    },
  ];

  // Table Data
  const transactionsList = [
    {
      id: "#CUST001",
      name: "John Doe",
      date: "01-01-2025",
      total: "₱2,904",
      method: "CC",
      status: "Complete",
    },
    {
      id: "#CUST001",
      name: "John Doe",
      date: "01-01-2025",
      total: "₱2,904",
      method: "PayPal",
      status: "Complete",
    },
    {
      id: "#CUST001",
      name: "John Doe",
      date: "01-01-2025",
      total: "₱2,904",
      method: "CC",
      status: "Complete",
    },
    {
      id: "#CUST001",
      name: "John Doe",
      date: "01-01-2025",
      total: "₱2,904",
      method: "Bank",
      status: "Complete",
    },
    {
      id: "#CUST001",
      name: "Jane Smith",
      date: "01-01-2025",
      total: "₱2,904",
      method: "CC",
      status: "Canceled",
    },
    {
      id: "#CUST001",
      name: "Emily Davis",
      date: "01-01-2025",
      total: "₱2,904",
      method: "PayPal",
      status: "Pending",
    },
    {
      id: "#CUST001",
      name: "Jane Smith",
      date: "01-01-2025",
      total: "₱2,904",
      method: "Bank",
      status: "Canceled",
    },
    {
      id: "#CUST001",
      name: "John Doe",
      date: "01-01-2025",
      total: "₱2,904",
      method: "CC",
      status: "Complete",
    },
    {
      id: "#CUST001",
      name: "Emily Davis",
      date: "01-01-2025",
      total: "₱2,904",
      method: "PayPal",
      status: "Pending",
    },
    {
      id: "#CUST001",
      name: "Jane Smith",
      date: "01-01-2025",
      total: "₱2,904",
      method: "Bank",
      status: "Canceled",
    },
  ];

  const renderStatus = (status: string) => {
    let dotColor = "";
    let textColor = "";

    switch (status) {
      case "Complete":
        dotColor = "bg-green-500";
        textColor = "text-green-600";
        break;
      case "Canceled":
        dotColor = "bg-red-500";
        textColor = "text-red-500";
        break;
      case "Pending":
        dotColor = "bg-yellow-400";
        textColor = "text-yellow-600";
        break;
    }

    return (
      <span className={`flex items-center gap-2 font-medium ${textColor}`}>
        <span className={`w-2 h-2 rounded-full ${dotColor}`}></span> {status}
      </span>
    );
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER */}
      <div>
        <h1 className="font-heading font-black text-2xl tracking-tighter text-brand-black">
          Transaction
        </h1>
      </div>

      {/* TOP METRICS & PAYMENT METHOD CARD */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: 4 Stat Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-brand-black">{stat.title}</h3>
                <button className="text-gray-400 hover:text-brand-black transition-colors">
                  <FiMoreVertical />
                </button>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-heading font-black text-3xl tracking-tighter text-brand-black">
                  {stat.value}
                </span>
                <span
                  className={`text-xs font-bold flex items-center ${stat.isPositive ? "text-green-500" : "text-red-500"}`}
                >
                  {stat.isPositive && <FiTrendingUp className="mr-1" />}{" "}
                  {stat.trend}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Last 7 days</p>
            </div>
          ))}
        </div>

        {/* Right Side: Payment Method Widget */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between lg:col-span-1">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-brand-black">Payment Method</h3>
            <button className="text-gray-400 hover:text-brand-black transition-colors">
              <FiMoreVertical />
            </button>
          </div>

          <div className="flex flex-col xl:flex-row gap-4 mb-6">
            {/* The Digital Credit Card */}
            <div className="flex-1 bg-gradient-to-br from-teal-400 to-emerald-700 rounded-xl p-4 text-white shadow-md relative overflow-hidden min-w-[200px]">
              {/* Decorative shapes */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-white opacity-10 rounded-full"></div>
              <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-black opacity-10 rounded-full"></div>

              <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold tracking-wider">Finaci</span>
                  <div className="flex">
                    <div className="w-6 h-6 rounded-full bg-white opacity-60"></div>
                    <div className="w-6 h-6 rounded-full bg-white opacity-60 -ml-3"></div>
                  </div>
                </div>
                <div className="font-mono text-lg tracking-widest mt-2">
                  **** **** **** 2345
                </div>
                <div className="flex justify-between items-end mt-2">
                  <div>
                    <p className="text-[8px] opacity-70 uppercase tracking-wider">
                      Card Holder name
                    </p>
                    <p className="text-xs font-bold">Noman Manzoor</p>
                  </div>
                  <div>
                    <p className="text-[8px] opacity-70 uppercase tracking-wider">
                      Expiry Date
                    </p>
                    <p className="text-xs font-bold">02/30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Stats next to it */}
            <div className="flex flex-col justify-center space-y-2 text-sm">
              <p className="text-gray-500">
                Status: <span className="font-bold text-green-500">Active</span>
              </p>
              <p className="text-gray-500">
                Transactions:{" "}
                <span className="font-bold text-brand-black">1,250</span>
              </p>
              <p className="text-gray-500">
                Revenue:{" "}
                <span className="font-bold text-brand-black">$50,000</span>
              </p>
              <button className="text-blue-500 font-medium text-xs hover:underline text-left mt-1">
                View Transactions
              </button>
            </div>
          </div>

          {/* Card Actions */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm font-medium text-brand-black hover:bg-gray-50 transition-colors">
              <FiPlus /> Add Card
            </button>
            <button className="px-4 py-2.5 border border-red-200 text-red-500 rounded-xl text-sm font-medium hover:bg-red-50 transition-colors">
              Deactivate
            </button>
          </div>
        </div>
      </div>

      {/* TRANSACTION DATA TABLE */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        {/* Controls */}
        <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          {/* Tabs */}
          <div className="flex gap-2 p-1 bg-gray-50 rounded-xl border border-gray-100 w-full sm:w-auto overflow-x-auto scrollbar-hide">
            {["All order (240)", "Completed", "Pending", "Canceled"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-[#E8F5E9] text-green-700 shadow-sm border border-green-100"
                      : "text-gray-500 hover:text-brand-black"
                  }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>

          {/* Search & Filters */}
          <div className="flex items-center gap-3 w-full xl:w-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-xl flex items-center px-4 py-2 flex-1 xl:w-64">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search payment history"
                className="bg-transparent w-full outline-none text-sm placeholder-gray-400"
              />
            </div>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
              <FiFilter />
            </button>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
              <FiList />
            </button>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
              <FiMoreHorizontal />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#F0FDF4] border-b border-green-100">
              <tr className="text-[#2F5A41] font-semibold text-center md:text-left">
                <th className="py-4 px-6">Customer Id</th>
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Total</th>
                <th className="py-4 px-6">Method</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactionsList.map((tx, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition-colors group text-center md:text-left"
                >
                  <td className="py-4 px-6 text-brand-black font-medium">
                    {tx.id}
                  </td>
                  <td className="py-4 px-6 text-gray-500">{tx.name}</td>
                  <td className="py-4 px-6 text-gray-500">{tx.date}</td>
                  <td className="py-4 px-6 font-bold text-brand-black">
                    {tx.total}
                  </td>
                  <td className="py-4 px-6 text-gray-500">{tx.method}</td>
                  <td className="py-4 px-6 flex justify-center md:justify-start">
                    {renderStatus(tx.status)}
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-blue-500 hover:text-blue-700 font-medium transition-colors">
                      View Details
                    </button>
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
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-500 font-medium flex-shrink-0">
              4
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-500 font-medium flex-shrink-0">
              5
            </button>
            <span className="px-2 text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-500 font-medium flex-shrink-0">
              24
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
