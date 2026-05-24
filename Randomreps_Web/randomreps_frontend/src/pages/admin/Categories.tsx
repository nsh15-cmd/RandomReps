import { useState } from "react";
import {
  FiPlus,
  FiMoreVertical,
  FiSearch,
  FiFilter,
  FiMoreHorizontal,
  FiEdit2,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function Categories() {
  const [activeTab, setActiveTab] = useState("All Product (145)");

  // Mock Data for the top Category Cards
  const categoriesList = [
    { name: "Electronics", img: "Electronics" },
    { name: "Fashion", img: "Fashion" },
    { name: "Accessories", img: "Accessories" },
    { name: "Home & Kitchen", img: "Home" },
    { name: "Sports & Outdoors", img: "Sports" },
    { name: "Toys & Games", img: "Toys" },
    { name: "Health & Fitness", img: "Health" },
    { name: "Books", img: "Books" },
  ];

  // Mock Data for the Product Table
  const productsList = [
    {
      no: "1",
      name: "Wireless Bluetooth Headphones",
      date: "01-01-2025",
      orders: 25,
    },
    { no: "1", name: "Men's T-Shirt", date: "01-01-2025", orders: 20 },
    { no: "1", name: "Men's Leather Wallet", date: "01-01-2025", orders: 35 },
    { no: "1", name: "Memory Foam Pillow", date: "01-01-2025", orders: 40 },
    { no: "1", name: "Coffee Maker", date: "01-01-2025", orders: 45 },
    { no: "1", name: "Casual Baseball Cap", date: "01-01-2025", orders: 55 },
    { no: "1", name: "Full HD Webcam", date: "01-01-2025", orders: 20 },
    { no: "1", name: "Smart LED Color Bulb", date: "01-01-2025", orders: 16 },
    { no: "1", name: "Men's T-Shirt", date: "01-01-2025", orders: 10 },
    { no: "1", name: "Men's Leather Wallet", date: "01-01-2025", orders: 35 },
  ];

  const tableTabs = [
    "All Product (145)",
    "Featured Products",
    "On Sale",
    "Out of Stock",
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="font-heading font-black text-2xl tracking-tighter text-brand-black">
          Discover
        </h1>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-brand-black text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
            <FiPlus className="text-lg" /> Add Product
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            More Action <FiMoreVertical />
          </button>
        </div>
      </div>

      {/* CATEGORY GRID SECTION */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categoriesList.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-3 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={`https://placehold.co/100x100/F0EEED/242021?text=${cat.img.substring(0, 3)}`}
                  alt={cat.name}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform"
                />
              </div>
              <p className="font-bold text-brand-black text-sm">{cat.name}</p>
            </div>
          ))}
        </div>
        {/* Floating Arrow Button (Decorative matching the UI) */}
        <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-500 hover:text-brand-black hidden xl:flex">
          <FiChevronRight className="text-xl" />
        </button>
      </div>

      {/* DATA TABLE SECTION */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        {/* Table Controls (Tabs & Search) */}
        <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          {/* Tabs */}
          <div className="flex gap-2 p-1 bg-gray-50 rounded-xl border border-gray-100 w-full sm:w-auto overflow-x-auto scrollbar-hide">
            {tableTabs.map((tab) => (
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

          {/* Search & Filters */}
          <div className="flex items-center gap-3 w-full xl:w-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-xl flex items-center px-4 py-2 flex-1 xl:w-64">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search your product"
                className="bg-transparent w-full outline-none text-sm placeholder-gray-400"
              />
            </div>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
              <FiFilter />
            </button>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
              <FiPlus />
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
                <th className="py-4 px-4">No.</th>
                <th className="py-4 px-4">Product</th>
                <th className="py-4 px-4">Created Date</th>
                <th className="py-4 px-4">Order</th>
                <th className="py-4 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {productsList.map((product, idx) => (
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
                    {product.no}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <span className="text-xl">🎧</span>{" "}
                        {/* Placeholder for actual product images */}
                      </div>
                      <span className="font-medium text-brand-black">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-500">{product.date}</td>
                  <td className="py-4 px-4 font-bold text-brand-black">
                    {product.orders}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <button className="text-gray-400 hover:text-blue-500 transition-colors">
                        <FiEdit2 className="text-lg" />
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
