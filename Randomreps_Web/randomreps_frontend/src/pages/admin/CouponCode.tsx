import { useState } from "react";
import {
  FiMoreVertical,
  FiPlus,
  FiSearch,
  FiFilter,
  FiEdit2,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiCopy,
} from "react-icons/fi";

export default function CouponCode() {
  const [activeTab, setActiveTab] = useState("All Coupons");

  // Summary Metrics
  const stats = [
    { title: "Total Coupons", value: "124" },
    { title: "Active", value: "86", color: "text-green-500" },
    { title: "Expired", value: "38", color: "text-red-500" },
    { title: "Total Usage", value: "8,405" },
  ];

  // Mock Data for Coupons
  const couponsList = [
    {
      id: 1,
      code: "SUMMER26",
      type: "Percentage",
      discount: "20%",
      usage: "340 / 500",
      minSpend: "₱1,000",
      expiry: "2026-08-31",
      status: "Active",
    },
    {
      id: 2,
      code: "WELCOME10",
      type: "Percentage",
      discount: "10%",
      usage: "1,205 / ∞",
      minSpend: "₱0",
      expiry: "No Expiry",
      status: "Active",
    },
    {
      id: 3,
      code: "FREESHIP",
      type: "Fixed Amount",
      discount: "₱150",
      usage: "890 / 1000",
      minSpend: "₱2,500",
      expiry: "2026-12-31",
      status: "Active",
    },
    {
      id: 4,
      code: "VIP500",
      type: "Fixed Amount",
      discount: "₱500",
      usage: "50 / 50",
      minSpend: "₱5,000",
      expiry: "2026-05-01",
      status: "Expired",
    },
    {
      id: 5,
      code: "FLASH50",
      type: "Percentage",
      discount: "50%",
      usage: "500 / 500",
      minSpend: "₱0",
      expiry: "2026-01-15",
      status: "Expired",
    },
    {
      id: 6,
      code: "HOLIDAY25",
      type: "Percentage",
      discount: "25%",
      usage: "0 / 200",
      minSpend: "₱1,500",
      expiry: "2026-12-25",
      status: "Active",
    },
  ];

  const renderStatus = (status: string) => {
    return status === "Active" ? (
      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
        Active
      </span>
    ) : (
      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
        Expired
      </span>
    );
  };

  // Function to simulate copying coupon code to clipboard
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    // In a real app, you'd trigger a small toast notification here!
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="font-heading font-black text-2xl tracking-tighter text-brand-black">
          Coupon Code
        </h1>
        <button className="flex items-center justify-center gap-2 bg-brand-black text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto">
          <FiPlus className="text-lg" /> Create Coupon
        </button>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-500 text-sm">{stat.title}</h3>
              <button className="text-gray-400 hover:text-brand-black transition-colors">
                <FiMoreVertical />
              </button>
            </div>
            <span
              className={`font-heading font-black text-3xl tracking-tighter ${stat.color || "text-brand-black"}`}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* MAIN TABLE CONTAINER */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        {/* Table Controls (Tabs & Search) */}
        <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          <div className="flex gap-2 p-1 bg-gray-50 rounded-xl border border-gray-100 w-full sm:w-auto overflow-x-auto scrollbar-hide">
            {["All Coupons", "Active", "Expired"].map((tab) => (
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
                placeholder="Search coupon code..."
                className="bg-transparent w-full outline-none text-sm placeholder-gray-400"
              />
            </div>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
              <FiFilter />
            </button>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#F4F7FE]">
              <tr className="text-brand-black font-semibold">
                <th className="py-4 px-6">Coupon Code</th>
                <th className="py-4 px-6">Type</th>
                <th className="py-4 px-6">Discount</th>
                <th className="py-4 px-6">Usage</th>
                <th className="py-4 px-6">Min. Spend</th>
                <th className="py-4 px-6">Expiry Date</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {couponsList.map((coupon) => (
                <tr
                  key={coupon.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-brand-black bg-gray-100 px-2 py-1 rounded">
                        {coupon.code}
                      </span>
                      <button
                        onClick={() => handleCopy(coupon.code)}
                        className="text-gray-400 hover:text-brand-black transition-colors"
                        title="Copy Code"
                      >
                        <FiCopy />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-500 font-medium">
                    {coupon.type}
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-black">
                    {coupon.discount}
                  </td>
                  <td className="py-4 px-6 text-gray-500">{coupon.usage}</td>
                  <td className="py-4 px-6 text-brand-black font-medium">
                    {coupon.minSpend}
                  </td>
                  <td className="py-4 px-6 text-gray-500">{coupon.expiry}</td>
                  <td className="py-4 px-6">{renderStatus(coupon.status)}</td>
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
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            <FiChevronLeft /> Previous
          </button>

          <div className="flex items-center gap-1">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-black text-white font-bold">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-500 font-medium">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-500 font-medium">
              3
            </button>
            <span className="px-2 text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-500 font-medium">
              12
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            Next <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
