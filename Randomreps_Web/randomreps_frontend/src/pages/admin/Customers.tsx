import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMoreVertical,
  FiTrendingUp,
  FiMessageSquare,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

export default function Customers() {
  const [activeChartTab, setActiveChartTab] = useState("This week");
  const [activeMetricTab, setActiveMetricTab] = useState("Active Customers");

  // NEW STATE: Tracks which customer is clicked for the right-side drawer
  const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null);

  const sideStats = [
    {
      title: "Total Customers",
      value: "11,040",
      trend: "+14.4%",
      isPositive: true,
    },
    { title: "New Customers", value: "2,370", trend: "+20%", isPositive: true },
    { title: "Visitor", value: "250k", trend: "+20%", isPositive: true },
  ];

  // Extended mock data to populate the drawer
  const customersList = [
    {
      id: "#CUST001",
      name: "John Doe",
      phone: "+1234567890",
      email: "johndoe@email.com",
      address: "123 Main St, New York, NY",
      orders: 25,
      spend: "3,450.00",
      conversion: "5.5%",
      status: "Active",
      gender: "Male",
      country: "United States",
    },
    {
      id: "#CUST002",
      name: "Jane Smith",
      phone: "+1987654321",
      email: "jane@email.com",
      address: "456 Oak Ave, London, UK",
      orders: 5,
      spend: "250.00",
      conversion: "2.1%",
      status: "Inactive",
      gender: "Female",
      country: "United Kingdom",
    },
    {
      id: "#CUST003",
      name: "Emily Davis",
      phone: "+1555123456",
      email: "emily@email.com",
      address: "789 Pine Rd, Sydney, AU",
      orders: 30,
      spend: "4,600.00",
      conversion: "8.4%",
      status: "VIP",
      gender: "Female",
      country: "Australia",
    },
    // Adding a few more to fill the table
    {
      id: "#CUST004",
      name: "Michael Chen",
      phone: "+1234567890",
      email: "mike@email.com",
      address: "123 Main St",
      orders: 25,
      spend: "3,450.00",
      conversion: "5.5%",
      status: "Active",
      gender: "Male",
      country: "Canada",
    },
    {
      id: "#CUST005",
      name: "Sarah Connor",
      phone: "+1234567890",
      email: "sarah@email.com",
      address: "123 Main St",
      orders: 5,
      spend: "250.00",
      conversion: "2.1%",
      status: "Inactive",
      gender: "Female",
      country: "US",
    },
  ];

  const renderStatus = (status: string) => {
    let colorClass = "";
    switch (status) {
      case "Active":
        colorClass = "text-green-500 bg-green-500";
        break;
      case "Inactive":
        colorClass = "text-red-500 bg-red-500";
        break;
      case "VIP":
        colorClass = "text-yellow-500 bg-yellow-500";
        break;
    }
    return (
      <span
        className={`flex items-center gap-2 text-sm font-medium ${colorClass.split(" ")[0]}`}
      >
        <span
          className={`w-2 h-2 rounded-full ${colorClass.split(" ")[1]}`}
        ></span>{" "}
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6 animate-fadeIn relative">
      {/* Header */}
      <div>
        <h1 className="font-heading font-black text-2xl tracking-tighter text-brand-black">
          Customers
        </h1>
      </div>

      {/* TOP SECTION: Grid Layout (1/3 Cards, 2/3 Chart) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: 3 Stacked Cards */}
        <div className="flex flex-col gap-6">
          {sideStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-between"
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
                <span className="text-xs font-bold flex items-center text-green-500">
                  <FiTrendingUp className="mr-1" /> {stat.trend}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Last 7 days</p>
            </div>
          ))}
        </div>

        {/* Right Column: Large Chart */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-brand-black text-lg">
              Customer Overview
            </h3>
            <div className="flex border border-gray-200 rounded-full p-1">
              {["This week", "Last week"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveChartTab(tab)}
                  className={`px-4 py-1 rounded-full text-xs font-bold transition-colors ${
                    activeChartTab === tab
                      ? "bg-white shadow-sm text-brand-black"
                      : "text-gray-400 font-medium hover:text-brand-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button className="px-2 text-gray-400">
                <FiMoreVertical />
              </button>
            </div>
          </div>

          <div className="flex justify-between border-b border-gray-100 mb-8 overflow-x-auto scrollbar-hide">
            {[
              { label: "Active Customers", value: "25k" },
              { label: "Repeat Customers", value: "5.6k" },
              { label: "Shop Visitor", value: "250k" },
              { label: "Conversion Rate", value: "5.5%" },
            ].map((metric) => (
              <button
                key={metric.label}
                onClick={() => setActiveMetricTab(metric.label)}
                className={`pb-4 px-2 flex-1 text-left border-b-2 transition-colors ${
                  activeMetricTab === metric.label
                    ? "border-brand-black"
                    : "border-transparent"
                }`}
              >
                <p className="font-heading font-black text-2xl tracking-tighter text-brand-black">
                  {metric.value}
                </p>
                <p
                  className={`text-xs mt-1 ${activeMetricTab === metric.label ? "text-gray-600 font-medium" : "text-gray-400"}`}
                >
                  {metric.label}
                </p>
              </button>
            ))}
          </div>

          <div className="flex-1 min-h-[200px] w-full bg-white rounded-xl flex items-end relative overflow-hidden">
            <div className="w-full h-32 bg-[#E8F5E9] border-t-2 border-green-700 rounded-t-full opacity-60 absolute bottom-0 left-0"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-[#E8F5E9] border border-green-300 text-center px-4 py-2 rounded-lg shadow-sm relative -top-10">
                <p className="text-xs font-bold text-brand-black mb-0.5">
                  Thursday
                </p>
                <p className="text-sm font-black text-green-700">25,409</p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-16 bg-green-300 border-dashed border-l-2"></div>
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-green-500 rounded-full z-10"></div>
              </div>
            </div>
            <div className="w-full flex justify-between px-4 pb-2 text-xs text-gray-400 absolute bottom-0">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span className="font-bold text-brand-black">Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Data Table */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#F0FDF4] border-b border-green-100">
              <tr className="text-[#2F5A41] font-semibold">
                <th className="py-4 px-6">Customer Id</th>
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Phone</th>
                <th className="py-4 px-6">Order Count</th>
                <th className="py-4 px-6">Total Spend</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customersList.map((customer, idx) => (
                <tr
                  key={idx}
                  onClick={() => setSelectedCustomer(customer)} // <--- TRIGGERS THE DRAWER
                  className="hover:bg-gray-50 transition-colors group cursor-pointer"
                >
                  <td className="py-4 px-6 font-bold text-brand-black">
                    {customer.id}
                  </td>
                  <td className="py-4 px-6 text-brand-black font-medium">
                    {customer.name}
                  </td>
                  <td className="py-4 px-6 text-gray-500">{customer.phone}</td>
                  <td className="py-4 px-6 text-brand-black font-medium">
                    {customer.orders}
                  </td>
                  <td className="py-4 px-6 text-brand-black font-medium">
                    ₱{customer.spend}
                  </td>
                  <td className="py-4 px-6">{renderStatus(customer.status)}</td>
                  <td className="py-4 px-6">
                    <div
                      className="flex items-center gap-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button className="text-gray-400 hover:text-brand-black transition-colors">
                        <FiMessageSquare className="text-lg" />
                      </button>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <FiTrash2 className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ========================================= */}
      {/* SLIDING CUSTOMER DETAIL DRAWER */}
      {/* ========================================= */}
      <AnimatePresence>
        {selectedCustomer && (
          <>
            {/* Dark Overlay Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCustomer(null)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#F9FAFB] shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Drawer Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="font-heading font-black text-xl text-brand-black">
                      Customer detail
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Customer ID:{" "}
                      <span className="font-bold">{selectedCustomer.id}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCustomer(null)}
                    className="p-2 text-gray-400 hover:text-brand-black bg-white rounded-full border border-gray-200 transition-colors"
                  >
                    <FiX className="text-xl" />
                  </button>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-6 text-center">
                  <div className="relative inline-block mb-4">
                    <img
                      src={`https://placehold.co/100x100/242021/FFFFFF?text=${selectedCustomer.name.charAt(0)}`}
                      alt="Avatar"
                      className="w-20 h-20 rounded-full mx-auto"
                    />
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <h3 className="font-bold text-xl text-brand-black">
                    {selectedCustomer.name}
                  </h3>
                  <div className="flex justify-center mt-2">
                    {renderStatus(selectedCustomer.status)}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-6">
                    <button className="flex-1 bg-brand-black text-white py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                      Message
                    </button>
                    <button className="flex-1 border border-gray-200 text-brand-black py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                      Customer order
                    </button>
                    <button className="border border-gray-200 text-brand-black p-2 rounded-xl hover:bg-gray-50 transition-colors">
                      <FiMoreVertical />
                    </button>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
                    <p className="text-xs text-gray-500 mb-1">Orders</p>
                    <p className="font-bold text-lg text-brand-black">
                      {selectedCustomer.orders}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
                    <p className="text-xs text-gray-500 mb-1">Spend</p>
                    <p className="font-bold text-lg text-brand-black">
                      ₱{selectedCustomer.spend}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
                    <p className="text-xs text-gray-500 mb-1">Conversion</p>
                    <p className="font-bold text-lg text-brand-black">
                      {selectedCustomer.conversion}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-6">
                  <h4 className="font-bold text-brand-black mb-4 flex items-center justify-between">
                    Contact info{" "}
                    <span className="text-xs font-normal text-blue-600 cursor-pointer hover:underline">
                      Edit
                    </span>
                  </h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <FiMapPin className="text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-brand-black">
                          Billing & Shipping address
                        </p>
                        <p className="text-sm text-gray-500 mt-0.5">
                          {selectedCustomer.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <FiPhone className="text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-brand-black">
                          Phone
                        </p>
                        <p className="text-sm text-gray-500 mt-0.5">
                          {selectedCustomer.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <FiMail className="text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-brand-black">
                          Email
                        </p>
                        <p className="text-sm text-gray-500 mt-0.5">
                          {selectedCustomer.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Segments */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-bold text-brand-black mb-4 flex items-center justify-between">
                    Segments{" "}
                    <span className="text-xs font-normal text-blue-600 cursor-pointer hover:underline">
                      Edit
                    </span>
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Gender</span>
                      <span className="text-sm font-medium text-brand-black">
                        {selectedCustomer.gender}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Countries</span>
                      <span className="text-sm font-medium text-brand-black">
                        {selectedCustomer.country}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Status</span>
                      {renderStatus(selectedCustomer.status)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
