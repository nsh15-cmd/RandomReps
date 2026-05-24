import { useState } from "react";
import {
  FiMoreVertical,
  FiTrendingUp,
  FiTrendingDown,
  FiPlus,
  FiSearch,
  FiFilter,
  FiList,
  FiMoreHorizontal,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiClock,
  FiTruck,
  FiXCircle,
} from "react-icons/fi";

export default function OrderManagement() {
  const [activeTab, setActiveTab] = useState("All order (240)");

  const stats = [
    {
      title: "Total Orders",
      value: "1,240",
      trend: "+14.4%",
      isPositive: true,
      time: "Last 7 days",
    },
    {
      title: "New Orders",
      value: "240",
      trend: "+20%",
      isPositive: true,
      time: "Last 7 days",
    },
    {
      title: "Completed Orders",
      value: "960",
      trend: "85%",
      isPositive: true,
      time: "Last 7 days",
    },
    {
      title: "Canceled Orders",
      value: "87",
      trend: "-5%",
      isPositive: false,
      time: "Last 7 days",
    },
  ];

  const tabs = ["All order (240)", "Completed", "Pending", "Canceled"];

  const orders = [
    {
      no: "1",
      id: "#ORD0001",
      product: "Wireless Bluetooth Headphones",
      date: "01-01-2025",
      price: "49.99",
      payment: "Paid",
      status: "Delivered",
    },
    {
      no: "2",
      id: "#ORD0002",
      product: "Men's T-Shirt",
      date: "01-01-2025",
      price: "14.99",
      payment: "Unpaid",
      status: "Pending",
    },
    {
      no: "3",
      id: "#ORD0003",
      product: "Men's Leather Wallet",
      date: "01-01-2025",
      price: "49.99",
      payment: "Paid",
      status: "Delivered",
    },
    {
      no: "4",
      id: "#ORD0004",
      product: "Memory Foam Pillow",
      date: "01-01-2025",
      price: "39.99",
      payment: "Paid",
      status: "Shipped",
    },
    {
      no: "5",
      id: "#ORD0005",
      product: "Adjustable Dumbbells",
      date: "01-01-2025",
      price: "14.99",
      payment: "Unpaid",
      status: "Pending",
    },
    {
      no: "6",
      id: "#ORD0006",
      product: "Coffee Maker",
      date: "01-01-2025",
      price: "79.99",
      payment: "Unpaid",
      status: "Cancelled",
    },
    {
      no: "7",
      id: "#ORD0007",
      product: "Casual Baseball Cap",
      date: "01-01-2025",
      price: "49.99",
      payment: "Paid",
      status: "Delivered",
    },
    {
      no: "8",
      id: "#ORD0008",
      product: "Full HD Webcam",
      date: "01-01-2025",
      price: "39.99",
      payment: "Paid",
      status: "Delivered",
    },
    {
      no: "9",
      id: "#ORD0009",
      product: "Smart LED Color Bulb",
      date: "01-01-2025",
      price: "79.99",
      payment: "Unpaid",
      status: "Delivered",
    },
    {
      no: "10",
      id: "#ORD0010",
      product: "Men's T-Shirt",
      date: "01-01-2025",
      price: "14.99",
      payment: "Unpaid",
      status: "Delivered",
    },
  ];

  // Helper function to render status tags with icons
  const renderStatus = (status: string) => {
    switch (status) {
      case "Delivered":
        return (
          <span className="flex items-center gap-1.5 text-green-600 font-medium">
            <FiCheckCircle /> Delivered
          </span>
        );
      case "Pending":
        return (
          <span className="flex items-center gap-1.5 text-amber-500 font-medium">
            <FiClock /> Pending
          </span>
        );
      case "Shipped":
        return (
          <span className="flex items-center gap-1.5 text-brand-black font-medium">
            <FiTruck /> Shipped
          </span>
        );
      case "Cancelled":
        return (
          <span className="flex items-center gap-1.5 text-red-500 font-medium">
            <FiXCircle /> Cancelled
          </span>
        );
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="font-heading font-black text-2xl tracking-tighter text-brand-black">
          Order List
        </h1>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-brand-black text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
            <FiPlus className="text-lg" /> Add Order
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            More Action <FiMoreVertical />
          </button>
        </div>
      </div>

      {/* 4 STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-brand-black">{stat.title}</h3>
              <button className="text-gray-400 hover:text-black transition-colors">
                <FiMoreVertical />
              </button>
            </div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-heading font-black text-3xl tracking-tighter text-brand-black">
                {stat.value}
              </span>
              <span
                className={`text-xs font-bold flex items-center ${stat.isPositive ? "text-green-500" : "text-red-500"}`}
              >
                {stat.isPositive ? (
                  <FiTrendingUp className="mr-1" />
                ) : (
                  <FiTrendingDown className="mr-1" />
                )}
                {stat.trend}
              </span>
            </div>
            <p className="text-xs text-gray-400">{stat.time}</p>
          </div>
        ))}
      </div>

      {/* MAIN TABLE CONTAINER */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        {/* Table Controls (Tabs & Search) */}
        <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 p-1 bg-gray-50 rounded-xl border border-gray-100 w-full xl:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-[#E8F5E9] text-green-700 shadow-sm"
                    : "text-gray-500 hover:text-brand-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search & Filters */}
          <div className="flex items-center gap-3 w-full xl:w-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-xl flex items-center px-4 py-2 flex-1 xl:w-64">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search order report"
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

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#F4F7FE]">
              <tr className="text-brand-black font-semibold">
                <th className="py-4 px-6 w-10">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 accent-brand-black"
                  />
                </th>
                <th className="py-4 px-4">No.</th>
                <th className="py-4 px-4">Order Id</th>
                <th className="py-4 px-4">Product</th>
                <th className="py-4 px-4">Date</th>
                <th className="py-4 px-4">Price</th>
                <th className="py-4 px-4">Payment</th>
                <th className="py-4 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order, idx) => (
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
                  <td className="py-4 px-4 text-gray-500 font-medium">
                    {order.no}
                  </td>
                  <td className="py-4 px-4 font-bold text-brand-black">
                    {order.id}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={`https://placehold.co/100x100/F0EEED/000000?text=Prod`}
                          alt=""
                          className="w-full h-full object-cover mix-blend-multiply"
                        />
                      </div>
                      <span className="font-medium text-brand-black">
                        {order.product}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-500">{order.date}</td>
                  <td className="py-4 px-4 font-bold text-brand-black">
                    ${order.price}
                  </td>
                  <td className="py-4 px-4">
                    <span className="flex items-center gap-2 text-brand-black font-medium">
                      <span
                        className={`w-2 h-2 rounded-full ${order.payment === "Paid" ? "bg-green-500" : "bg-red-500"}`}
                      ></span>
                      {order.payment}
                    </span>
                  </td>
                  <td className="py-4 px-6">{renderStatus(order.status)}</td>
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
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#E8F5E9] text-green-700 font-bold flex-shrink-0">
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
