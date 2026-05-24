// src/components/FilterSidebar.tsx
import { useState } from "react";
import { FiChevronRight, FiChevronUp, FiCheck, FiX } from "react-icons/fi";

interface FilterSidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export default function FilterSidebar({
  isMobile,
  onClose,
}: FilterSidebarProps) {
  // State for active selections
  const [activeColor, setActiveColor] = useState("blue");
  const [activeSize, setActiveSize] = useState("Large");

  const categories = [
    "T-shirts",
    "Shorts",
    "Shoes",
    "Sandals",
    "Jeans",
    "Bags",
  ];
  const colors = [
    { name: "green", hex: "#00C12B" },
    { name: "red", hex: "#F50606" },
    { name: "yellow", hex: "#F5DD06" },
    { name: "orange", hex: "#F57906" },
    { name: "cyan", hex: "#06CAF5" },
    { name: "blue", hex: "#063AF5" },
    { name: "purple", hex: "#7D06F5" },
    { name: "pink", hex: "#F506A4" },
    { name: "white", hex: "#FFFFFF" },
    { name: "black", hex: "#000000" },
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  const styles = ["Casual", "Formal", "Party", "Gym"];

  return (
    <div
      className={`bg-white border border-gray-200 rounded-[20px] p-5 md:p-6 w-full ${isMobile ? "h-full overflow-y-auto" : ""}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
        <h3 className="font-heading font-bold text-xl text-brand-black">
          Filters
        </h3>
        {isMobile && (
          <button
            onClick={onClose}
            className="text-2xl text-brand-textMuted hover:text-black"
          >
            <FiX />
          </button>
        )}
        {!isMobile && <FiChevronUp className="text-xl text-brand-textMuted" />}
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-4 mb-6 pb-6 border-b border-gray-200">
        {categories.map((cat) => (
          <div
            key={cat}
            className="flex justify-between items-center cursor-pointer group"
          >
            <span className="text-brand-textMuted group-hover:text-brand-black transition-colors">
              {cat}
            </span>
            <FiChevronRight className="text-brand-textMuted group-hover:text-brand-black transition-colors" />
          </div>
        ))}
      </div>

      {/* Price (Visual Placeholder for slider) */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-heading font-bold text-lg">Price</h4>
          <FiChevronUp className="text-xl" />
        </div>
        <div className="relative h-1.5 bg-gray-200 rounded-full mt-6 mb-2">
          {/* Active track */}
          <div className="absolute left-[20%] right-[30%] h-full bg-brand-black rounded-full"></div>
          {/* Thumb 1 */}
          <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-brand-black rounded-full shadow-md cursor-pointer"></div>
          {/* Thumb 2 */}
          <div className="absolute right-[30%] top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-brand-black rounded-full shadow-md cursor-pointer"></div>
        </div>
        <div className="flex justify-between text-sm font-medium">
          <span>$50</span>
          <span>$200</span>
        </div>
      </div>

      {/* Colors */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-heading font-bold text-lg">Colors</h4>
          <FiChevronUp className="text-xl" />
        </div>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setActiveColor(color.name)}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: color.hex }}
            >
              {activeColor === color.name && (
                <FiCheck
                  className={`text-lg ${color.name === "white" ? "text-black" : "text-white"}`}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-heading font-bold text-lg">Size</h4>
          <FiChevronUp className="text-xl" />
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`px-5 py-2.5 rounded-full text-sm transition-colors ${
                activeSize === size
                  ? "bg-brand-black text-white font-medium"
                  : "bg-[#F0F0F0] text-brand-textMuted hover:bg-gray-200"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Style */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-heading font-bold text-lg">Dress Style</h4>
          <FiChevronUp className="text-xl" />
        </div>
        <div className="flex flex-col gap-4 mb-6">
          {styles.map((style) => (
            <div
              key={style}
              className="flex justify-between items-center cursor-pointer group"
            >
              <span className="text-brand-textMuted group-hover:text-brand-black transition-colors">
                {style}
              </span>
              <FiChevronRight className="text-brand-textMuted group-hover:text-brand-black transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button className="w-full bg-brand-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
        Apply Filter
      </button>
    </div>
  );
}
