import { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiImage,
  FiX,
  FiEdit2,
  FiCalendar,
  FiSave,
  FiCheck,
} from "react-icons/fi";

export default function AddProduct() {
  const [isUnlimited, setIsUnlimited] = useState(true);
  const [taxIncluded, setTaxIncluded] = useState("Yes");
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [
    "bg-[#CDE3D3]",
    "bg-[#F1D1D8]",
    "bg-[#D3D8DE]",
    "bg-[#EFE8CC]",
    "bg-[#434547]",
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      {/* HEADER SECTION */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        <h1 className="font-heading font-black text-2xl tracking-tighter text-brand-black">
          Add New Product
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full xl:w-auto">
          <div className="bg-white border border-gray-200 rounded-xl flex items-center px-4 py-2 w-full sm:w-64 shadow-sm">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search product for add"
              className="bg-transparent w-full outline-none text-sm placeholder-gray-400"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none bg-brand-black text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
              Publish Product
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-gray-200 bg-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
              <FiSave /> Save to draft
            </button>
            <button className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gray-200 bg-white rounded-xl text-brand-black hover:bg-gray-50 transition-colors">
              <FiPlus />
            </button>
          </div>
        </div>
      </div>

      {/* TWO COLUMN LAYOUT */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT COLUMN: Data Entry */}
        <div className="xl:col-span-2 space-y-6">
          {/* 1. Basic Details */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-lg text-brand-black mb-6">
              Basic Details
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  defaultValue="iPhone 15"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-black transition-colors text-sm text-brand-black bg-[#F9FAFB]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-black mb-2">
                  Product Description
                </label>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-[#F9FAFB] focus-within:border-brand-black transition-colors">
                  <textarea
                    rows={4}
                    defaultValue="The iPhone 15 delivers cutting-edge performance with the A16 Bionic chip, an immersive Super Retina XDR display, advanced dual-camera system, and exceptional battery life, all encased in stunning aerospace-grade aluminum."
                    className="w-full px-4 py-3 outline-none text-sm text-brand-black bg-transparent resize-none"
                  ></textarea>
                  {/* Rich Text Editor Toolbar Mock */}
                  <div className="flex justify-end items-center gap-3 px-4 py-2 border-t border-gray-200 bg-white">
                    <button className="text-gray-400 hover:text-brand-black">
                      <FiEdit2 />
                    </button>
                    <button className="text-gray-400 hover:text-brand-black text-lg font-serif italic">
                      T
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Pricing */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-lg text-brand-black mb-6">Pricing</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2">
                  Product Price
                </label>
                <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:border-brand-black transition-colors bg-[#F9FAFB]">
                  <input
                    type="text"
                    defaultValue="$999.89"
                    className="flex-1 px-4 py-3 outline-none text-sm text-brand-black bg-transparent"
                  />
                  <div className="flex items-center gap-2 px-4 border-l border-gray-200 bg-white cursor-pointer hover:bg-gray-50">
                    <span className="text-xl">🇺🇸</span>
                    <span className="text-xs text-gray-400">▼</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-black mb-2">
                    Discounted Price{" "}
                    <span className="font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-brand-black transition-colors bg-[#F9FAFB] px-4">
                    <span className="font-bold text-brand-black mr-2">₱</span>
                    <input
                      type="text"
                      defaultValue="9000"
                      className="w-full py-3 outline-none text-sm text-brand-black bg-transparent"
                    />
                    <span className="text-xs font-bold text-brand-black whitespace-nowrap">
                      Sale= ₱9000.89
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-black mb-3">
                    Tax Included
                  </label>
                  <div className="flex items-center gap-6 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${taxIncluded === "Yes" ? "border-brand-black" : "border-gray-300"}`}
                      >
                        {taxIncluded === "Yes" && (
                          <div className="w-2 h-2 rounded-full bg-brand-black"></div>
                        )}
                      </div>
                      <input
                        type="radio"
                        name="tax"
                        className="hidden"
                        onChange={() => setTaxIncluded("Yes")}
                      />
                      <span className="text-sm text-brand-black">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${taxIncluded === "No" ? "border-brand-black" : "border-gray-300"}`}
                      >
                        {taxIncluded === "No" && (
                          <div className="w-2 h-2 rounded-full bg-brand-black"></div>
                        )}
                      </div>
                      <input
                        type="radio"
                        name="tax"
                        className="hidden"
                        onChange={() => setTaxIncluded("No")}
                      />
                      <span className="text-sm text-brand-black">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-black mb-2">
                  Expiration
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center border border-gray-200 rounded-xl px-4 bg-[#F9FAFB]">
                    <input
                      type="text"
                      placeholder="Start"
                      className="w-full py-3 outline-none text-sm bg-transparent"
                    />
                    <FiCalendar className="text-gray-400" />
                  </div>
                  <div className="flex items-center border border-gray-200 rounded-xl px-4 bg-[#F9FAFB]">
                    <input
                      type="text"
                      placeholder="End"
                      className="w-full py-3 outline-none text-sm bg-transparent"
                    />
                    <FiCalendar className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Inventory */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-lg text-brand-black mb-6">
              Inventory
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-black mb-2">
                    Stock Quantity
                  </label>
                  <input
                    type="text"
                    defaultValue="Unlimited"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none text-sm text-brand-black bg-[#F9FAFB]"
                    readOnly={isUnlimited}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-black mb-2">
                    Stock Status
                  </label>
                  <div className="border border-gray-200 rounded-xl bg-[#F9FAFB] px-4">
                    <select className="w-full py-3 outline-none text-sm text-brand-black bg-transparent appearance-none cursor-pointer">
                      <option>In Stock</option>
                      <option>Out of Stock</option>
                      <option>On Backorder</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Toggle Switch */}
                <div
                  className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-colors ${isUnlimited ? "bg-brand-black" : "bg-gray-300"}`}
                  onClick={() => setIsUnlimited(!isUnlimited)}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isUnlimited ? "translate-x-5" : "translate-x-0"}`}
                  ></div>
                </div>
                <span className="text-sm font-medium text-brand-black">
                  Unlimited
                </span>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-1 w-4 h-4 rounded border-gray-300 accent-brand-black"
                />
                <span className="text-sm text-gray-500">
                  Highlight this product in a featured section.
                </span>
              </label>

              {/* Bottom Actions inside Card */}
              <div className="flex justify-end gap-3 pt-4">
                <button className="flex items-center justify-center gap-2 border border-gray-200 bg-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                  <FiSave /> Save to draft
                </button>
                <button className="bg-brand-black text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                  Publish Product
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Media & Meta */}
        <div className="space-y-6">
          {/* 4. Upload Image */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-lg text-brand-black mb-4">
              Upload Product Image
            </h2>
            <label className="block text-sm font-bold text-brand-black mb-2">
              Product Image
            </label>

            {/* Main Image Box */}
            <div className="border border-gray-200 rounded-2xl p-4 bg-[#F9FAFB] mb-4 relative flex flex-col items-center justify-center min-h-[250px]">
              <img
                src="https://placehold.co/400x400/F0EEED/242021?text=iPhone+15"
                alt="Product"
                className="w-48 h-48 object-contain mix-blend-multiply mb-4"
              />

              <div className="absolute bottom-4 w-full px-4 flex justify-between gap-2">
                <button className="flex-1 flex justify-center items-center gap-2 bg-white border border-gray-200 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 shadow-sm">
                  <FiImage /> Browse
                </button>
                <button className="flex-1 flex justify-center items-center gap-2 bg-white border border-gray-200 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 shadow-sm">
                  <FiSearch /> Replace
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {/* Thumb 1 */}
              <div className="w-20 h-24 border border-gray-200 rounded-xl bg-white p-2 relative flex-shrink-0">
                <button className="absolute -top-2 -right-2 bg-white rounded-full p-0.5 border border-gray-200 text-gray-400 hover:text-red-500 shadow-sm">
                  <FiX className="text-xs" />
                </button>
                <img
                  src="https://placehold.co/100x100/F0EEED/242021?text=Front"
                  alt="thumb"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              {/* Thumb 2 */}
              <div className="w-20 h-24 border border-gray-200 rounded-xl bg-white p-2 relative flex-shrink-0">
                <button className="absolute -top-2 -right-2 bg-white rounded-full p-0.5 border border-gray-200 text-gray-400 hover:text-red-500 shadow-sm">
                  <FiX className="text-xs" />
                </button>
                <img
                  src="https://placehold.co/100x100/F0EEED/242021?text=Side"
                  alt="thumb"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              {/* Add New Box */}
              <button className="w-20 h-24 border-2 border-dashed border-gray-300 rounded-xl bg-[#F9FAFB] flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 hover:border-brand-black transition-colors flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-brand-black text-white flex items-center justify-center mb-1">
                  <FiPlus className="text-sm" />
                </div>
                <span className="text-[10px] font-bold text-brand-black">
                  Add Image
                </span>
              </button>
            </div>
          </div>

          {/* 5. Categories */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-lg text-brand-black mb-6">
              Categories
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2">
                  Product Categories
                </label>
                <div className="border border-gray-200 rounded-xl bg-[#F9FAFB] px-4">
                  <select className="w-full py-3 outline-none text-sm text-gray-500 bg-transparent appearance-none cursor-pointer">
                    <option>Select your product</option>
                    <option>Electronics</option>
                    <option>Smartphones</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-black mb-2">
                  Product Tag
                </label>
                <div className="border border-gray-200 rounded-xl bg-[#F9FAFB] px-4">
                  <select className="w-full py-3 outline-none text-sm text-gray-500 bg-transparent appearance-none cursor-pointer">
                    <option>Select your product</option>
                    <option>New Arrival</option>
                    <option>Best Seller</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-black mb-3">
                  Select your color
                </label>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(idx)}
                      className={`w-10 h-10 rounded-xl transition-all ${color} ${
                        selectedColor === idx
                          ? "ring-2 ring-offset-2 ring-brand-black shadow-md scale-110"
                          : "shadow-sm hover:scale-105"
                      }`}
                    >
                      {selectedColor === idx && color === "bg-[#434547]" && (
                        <FiCheck className="text-white mx-auto" />
                      )}
                      {selectedColor === idx && color !== "bg-[#434547]" && (
                        <FiCheck className="text-brand-black mx-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
