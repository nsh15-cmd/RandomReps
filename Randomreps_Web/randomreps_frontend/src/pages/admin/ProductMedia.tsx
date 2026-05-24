import { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiUploadCloud,
  FiMoreVertical,
  FiTrash2,
  FiEye,
  FiImage,
  FiVideo,
  FiFolder,
} from "react-icons/fi";

export default function ProductMedia() {
  const [activeTab, setActiveTab] = useState("All Media");

  // Top Metrics for Storage
  const stats = [
    { title: "Total Files", value: "1,204", icon: <FiFolder /> },
    {
      title: "Storage Used",
      value: "45.2 GB",
      subtext: "of 100 GB limit",
      icon: <FiUploadCloud />,
    },
    { title: "Images", value: "1,150", icon: <FiImage /> },
    { title: "Videos", value: "54", icon: <FiVideo /> },
  ];

  // Mock Data for Media Grid
  const mediaFiles = [
    {
      id: 1,
      name: "iphone_15_pro_max_front.png",
      size: "2.4 MB",
      date: "May 18, 2026",
      type: "image",
      img: "iPhone",
    },
    {
      id: 2,
      name: "nike_jordan_4_red.jpg",
      size: "1.8 MB",
      date: "May 17, 2026",
      type: "image",
      img: "Jordan",
    },
    {
      id: 3,
      name: "leather_wallet_open.webp",
      size: "840 KB",
      date: "May 15, 2026",
      type: "image",
      img: "Wallet",
    },
    {
      id: 4,
      name: "summer_tshirt_model_01.jpg",
      size: "3.1 MB",
      date: "May 14, 2026",
      type: "image",
      img: "TShirt",
    },
    {
      id: 5,
      name: "coffee_maker_action.mp4",
      size: "12.5 MB",
      date: "May 12, 2026",
      type: "video",
      img: "Coffee",
    },
    {
      id: 6,
      name: "sony_headphones_black.png",
      size: "1.2 MB",
      date: "May 10, 2026",
      type: "image",
      img: "Headphones",
    },
    {
      id: 7,
      name: "baseball_cap_green.jpg",
      size: "920 KB",
      date: "May 08, 2026",
      type: "image",
      img: "Cap",
    },
    {
      id: 8,
      name: "smart_bulb_colors.gif",
      size: "4.5 MB",
      date: "May 05, 2026",
      type: "image",
      img: "Bulb",
    },
    {
      id: 9,
      name: "iphone_15_promo.mp4",
      size: "45.0 MB",
      date: "May 01, 2026",
      type: "video",
      img: "iPhoneVid",
    },
    {
      id: 10,
      name: "adjustable_dumbbells.jpg",
      size: "2.1 MB",
      date: "Apr 28, 2026",
      type: "image",
      img: "Dumbbells",
    },
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="font-heading font-black text-2xl tracking-tighter text-brand-black">
          Product Media
        </h1>
        <button className="flex items-center justify-center gap-2 bg-brand-black text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto shadow-sm">
          <FiUploadCloud className="text-lg" /> Upload Files
        </button>
      </div>

      {/* STORAGE STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#F4F7FE] flex items-center justify-center text-brand-black text-xl flex-shrink-0">
              {stat.icon}
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500">{stat.title}</p>
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-black text-2xl tracking-tighter text-brand-black">
                  {stat.value}
                </span>
              </div>
              {stat.subtext && (
                <p className="text-[10px] text-gray-400 mt-0.5">
                  {stat.subtext}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* MEDIA GALLERY CONTAINER */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col min-h-[500px]">
        {/* Gallery Controls (Tabs & Search) */}
        <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          <div className="flex gap-2 p-1 bg-gray-50 rounded-xl border border-gray-100 w-full sm:w-auto overflow-x-auto scrollbar-hide">
            {["All Media", "Images", "Videos", "Unused Files"].map((tab) => (
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
                placeholder="Search by filename..."
                className="bg-transparent w-full outline-none text-sm placeholder-gray-400"
              />
            </div>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
              <FiFilter />
            </button>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
              <FiMoreVertical />
            </button>
          </div>
        </div>

        {/* Media Grid */}
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {mediaFiles.map((file) => (
              <div key={file.id} className="group flex flex-col">
                {/* Thumbnail Box */}
                <div className="bg-[#F4F7FE] border border-gray-100 rounded-2xl aspect-square mb-3 relative overflow-hidden flex items-center justify-center cursor-pointer">
                  {/* Decorative background logo/text mimicking your placeholder style */}
                  <img
                    src={`https://placehold.co/400x400/F4F7FE/242021?text=${file.img}`}
                    alt={file.name}
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Video Indicator */}
                  {file.type === "video" && (
                    <div className="absolute top-2 right-2 bg-brand-black text-white p-1.5 rounded-lg shadow-sm">
                      <FiVideo className="text-xs" />
                    </div>
                  )}

                  {/* Hover Overlay Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-black hover:scale-110 transition-transform shadow-lg"
                      title="View Fullsize"
                    >
                      <FiEye />
                    </button>
                    <button
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 hover:scale-110 transition-transform shadow-lg"
                      title="Delete"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>

                {/* File Details */}
                <div className="px-1">
                  <p
                    className="text-sm font-bold text-brand-black truncate"
                    title={file.name}
                  >
                    {file.name}
                  </p>
                  <div className="flex justify-between items-center mt-1 text-xs text-gray-400 font-medium">
                    <span>{file.size}</span>
                    <span>{file.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions / load more */}
        <div className="mt-auto p-6 border-t border-gray-100 flex justify-center">
          <button className="px-6 py-2 border border-gray-200 rounded-xl text-sm font-medium text-brand-black hover:bg-gray-50 transition-colors shadow-sm">
            Load More Media
          </button>
        </div>
      </div>
    </div>
  );
}
