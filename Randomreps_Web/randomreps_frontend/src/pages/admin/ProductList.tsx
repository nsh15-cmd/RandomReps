import { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiPlus,
  FiMoreVertical,
  FiEdit2,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiEye,
  FiDownload,
} from "react-icons/fi";

export default function ProductList() {
  const [activeTab, setActiveTab] = useState("All Products");

  // Top Metrics
  const stats = [
    { title: "Total Products", value: "1,245" },
    { title: "Published", value: "1,020", color: "text-green-500" },
    { title: "Drafts", value: "210", color: "text-yellow-500" },
    { title: "Out of Stock", value: "15", color: "text-red-500" },
  ];

  // Mock Data for the Product Table
  const productsList = [
    {
      id: "#PRD001",
      name: "Apple iPhone 15 Pro",
      category: "Electronics",
      price: "₱55,990",
      stock: "Unlimited",
      status: "Published",
      img: "iPhone",
    },
    {
      id: "#PRD002",
      name: "Nike Air Jordan 4",
      category: "Footwear",
      price: "₱11,200",
      stock: "45",
      status: "Published",
      img: "Jordan",
    },
    {
      id: "#PRD003",
      name: "Premium Leather Wallet",
      category: "Accessories",
      price: "₱1,500",
      stock: "120",
      status: "Published",
      img: "Wallet",
    },
    {
      id: "#PRD004",
      name: "Sony Noise Cancelling Headphones",
      category: "Electronics",
      price: "₱18,500",
      stock: "0",
      status: "Out of Stock",
      img: "Headphones",
    },
    {
      id: "#PRD005",
      name: "Summer Graphic T-Shirt",
      category: "Apparel",
      price: "₱850",
      stock: "300",
      status: "Published",
      img: "TShirt",
    },
    {
      id: "#PRD006",
      name: "Smart LED Color Bulb",
      category: "Home & Kitchen",
      price: "₱990",
      stock: "50",
      status: "Draft",
      img: "Bulb",
    },
    {
      id: "#PRD007",
      name: "Adjustable Dumbbells Set",
      category: "Health & Fitness",
      price: "₱4,500",
      stock: "12",
      status: "Published",
      img: "Dumbbells",
    },
    {
      id: "#PRD008",
      name: "Casual Baseball Cap",
      category: "Accessories",
      price: "₱450",
      stock: "85",
      status: "Published",
      img: "Cap",
    },
  ];

  const renderStatus = (status: string) => {
    switch (status) {
      case "Published":
        return (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
            Published
          </span>
        );
      case "Draft":
        return (
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">
            Draft
          </span>
        );
      case "Out of Stock":
        return (
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
            Out of Stock
          </span>
        );
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="font-heading font-black text-2xl tracking-tighter text-brand-black">
          Product List
        </h1>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            <FiDownload /> Export
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-brand-black text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
            <FiPlus className="text-lg" /> Add Product
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
            {["All Products", "Published", "Drafts", "Out of Stock"].map(
              (tab) => (
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
              ),
            )}
          </div>

          <div className="flex items-center gap-3 w-full xl:w-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-xl flex items-center px-4 py-2 flex-1 xl:w-64">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search product..."
                className="bg-transparent w-full outline-none text-sm placeholder-gray-400"
              />
            </div>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
              <FiFilter />
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
                    className="w-4 h-4 rounded border-gray-300 accent-brand-black cursor-pointer"
                  />
                </th>
                <th className="py-4 px-6">Product Name</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Stock</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
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
                      className="w-4 h-4 rounded border-gray-300 accent-brand-black cursor-pointer"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                        <img
                          src={`https://placehold.co/100x100/F4F7FE/242021?text=${product.img.substring(0, 3)}`}
                          alt={product.name}
                          className="w-full h-full object-cover mix-blend-multiply"
                        />
                      </div>
                      <div>
                        <span
                          className="font-bold text-brand-black block truncate max-w-[200px]"
                          title={product.name}
                        >
                          {product.name}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {product.id}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-500 font-medium">
                    {product.category}
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-black">
                    {product.price}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`font-medium ${product.stock === "0" ? "text-red-500" : "text-brand-black"}`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="py-4 px-6">{renderStatus(product.status)}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="text-gray-400 hover:text-green-600 transition-colors"
                        title="View"
                      >
                        <FiEye className="text-lg" />
                      </button>
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
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-black text-white font-bold flex-shrink-0">
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
              12
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
