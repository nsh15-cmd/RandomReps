import { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiMessageCircle,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiChevronLeft,
  FiChevronRight,
  FiCornerUpLeft,
  FiTrash2,
  FiMoreVertical,
} from "react-icons/fi";

export default function CustomerService() {
  const [activeTab, setActiveTab] = useState("All Tickets");

  // Support Metrics
  const stats = [
    { title: "Total Tickets", value: "342", icon: <FiMessageCircle /> },
    {
      title: "Open Tickets",
      value: "28",
      color: "text-amber-500",
      icon: <FiAlertCircle />,
    },
    {
      title: "Resolved",
      value: "310",
      color: "text-green-500",
      icon: <FiCheckCircle />,
    },
    { title: "Avg Response", value: "1h 45m", icon: <FiClock /> },
  ];

  // Mock Support Tickets Data
  const ticketsList = [
    {
      id: "#TKT-1024",
      customer: "John Doe",
      subject: "Where is my order?",
      priority: "High",
      status: "Open",
      date: "Today, 10:23 AM",
    },
    {
      id: "#TKT-1023",
      customer: "Jane Smith",
      subject: "Requesting a refund for damaged item",
      priority: "High",
      status: "Pending",
      date: "Yesterday, 3:45 PM",
    },
    {
      id: "#TKT-1022",
      customer: "Emily Davis",
      subject: "How do I apply a coupon code?",
      priority: "Low",
      status: "Resolved",
      date: "May 16, 2026",
    },
    {
      id: "#TKT-1021",
      customer: "Mark Wilson",
      subject: "Wrong size delivered",
      priority: "Medium",
      status: "Open",
      date: "May 15, 2026",
    },
    {
      id: "#TKT-1020",
      customer: "Sarah Connor",
      subject: "Update shipping address",
      priority: "Medium",
      status: "Resolved",
      date: "May 14, 2026",
    },
    {
      id: "#TKT-1019",
      customer: "Michael Chen",
      subject: "Account login issues",
      priority: "High",
      status: "Resolved",
      date: "May 12, 2026",
    },
  ];

  const renderPriority = (priority: string) => {
    let color = "";
    switch (priority) {
      case "High":
        color = "text-red-500 bg-red-50";
        break;
      case "Medium":
        color = "text-yellow-600 bg-yellow-50";
        break;
      case "Low":
        color = "text-blue-500 bg-blue-50";
        break;
    }
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-bold ${color}`}>
        {priority}
      </span>
    );
  };

  const renderStatus = (status: string) => {
    switch (status) {
      case "Resolved":
        return (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
            Resolved
          </span>
        );
      case "Open":
        return (
          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">
            Open
          </span>
        );
      case "Pending":
        return (
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
            Pending
          </span>
        );
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading font-black text-2xl tracking-tighter text-brand-black">
            Customer Service
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage support tickets and customer inquiries.
          </p>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex items-center gap-4 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-[#F4F7FE] flex items-center justify-center text-brand-black text-xl flex-shrink-0 z-10">
              {stat.icon}
            </div>
            <div className="z-10">
              <p className="text-xs font-bold text-gray-500 mb-1">
                {stat.title}
              </p>
              <span
                className={`font-heading font-black text-2xl tracking-tighter ${stat.color || "text-brand-black"}`}
              >
                {stat.value}
              </span>
            </div>
            <div className="absolute -right-4 -bottom-4 text-gray-50 text-7xl opacity-50 pointer-events-none">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* TICKET TABLE */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        {/* Controls */}
        <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          <div className="flex gap-2 p-1 bg-gray-50 rounded-xl border border-gray-100 w-full sm:w-auto overflow-x-auto scrollbar-hide">
            {["All Tickets", "Open", "Pending", "Resolved"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-white text-brand-black shadow-sm border border-gray-200"
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
                placeholder="Search tickets..."
                className="bg-transparent w-full outline-none text-sm placeholder-gray-400"
              />
            </div>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
              <FiFilter />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap lg:whitespace-normal">
            <thead className="bg-[#F0FDF4] border-b border-green-100">
              <tr className="text-[#2F5A41] font-semibold">
                <th className="py-4 px-6 w-10">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 accent-brand-black cursor-pointer"
                  />
                </th>
                <th className="py-4 px-6 w-32">Ticket ID</th>
                <th className="py-4 px-6 w-48">Customer</th>
                <th className="py-4 px-6 min-w-[250px]">Subject</th>
                <th className="py-4 px-6 w-32">Priority</th>
                <th className="py-4 px-6 w-32">Status</th>
                <th className="py-4 px-6 text-right w-32">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {ticketsList.map((ticket, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 accent-brand-black cursor-pointer"
                    />
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-black">
                    {ticket.id}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs">
                        {ticket.customer.charAt(0)}
                      </div>
                      <span className="font-medium text-brand-black">
                        {ticket.customer}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-brand-black block">
                      {ticket.subject}
                    </span>
                    <span className="text-xs text-gray-400 mt-1 block">
                      {ticket.date}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    {renderPriority(ticket.priority)}
                  </td>
                  <td className="py-4 px-6">{renderStatus(ticket.status)}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                        title="Reply"
                      >
                        <FiCornerUpLeft className="text-lg" />
                      </button>
                      <button
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <FiTrash2 className="text-lg" />
                      </button>
                      <button
                        className="text-gray-400 hover:text-brand-black transition-colors"
                        title="Options"
                      >
                        <FiMoreVertical className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            <FiChevronLeft /> Previous
          </button>
          <div className="text-sm text-gray-500 font-medium">Page 1 of 12</div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            Next <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
