// src/components/user/Category.tsx
import { useState } from "react";
import {
  FiChevronRight,
  FiSliders,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import FilterSidebar from "../../components/user/FilterSidebar";
import ProductCard from "../../components/user/ProductCard";
import { categoryProducts } from "../../data/products";

export default function Category() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-brand-textMuted text-sm mb-6">
        <a href="/" className="hover:text-brand-black transition-colors">
          Home
        </a>
        <FiChevronRight />
        <span className="text-brand-black">Casual</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* DESKTOP SIDEBAR (Hidden on mobile) */}
        <div className="hidden lg:block w-[295px] flex-shrink-0">
          <FilterSidebar />
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <h1 className="font-heading font-black text-3xl md:text-4xl text-brand-black">
              Casual
            </h1>

            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <span className="text-brand-textMuted text-sm md:text-base">
                Showing 1-10 of 100 Products
              </span>

              <div className="flex items-center gap-3">
                <span className="hidden md:inline text-brand-textMuted text-sm">
                  Sort by:
                </span>
                <select className="hidden md:block font-medium outline-none bg-transparent cursor-pointer">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>

                {/* Mobile Filter Trigger Button */}
                <button
                  className="lg:hidden bg-[#F0F0F0] p-2.5 rounded-full text-brand-black"
                  onClick={() => setIsMobileFilterOpen(true)}
                >
                  <FiSliders className="text-xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid (2 cols mobile, 3 cols desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                rating={product.rating}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors">
              <FiArrowLeft /> Previous
            </button>

            {/* Desktop Page Numbers */}
            <div className="hidden md:flex items-center gap-1">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 font-medium">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 text-brand-textMuted font-medium">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 text-brand-textMuted font-medium">
                3
              </button>
              <span className="text-brand-textMuted px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 text-brand-textMuted font-medium">
                8
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 text-brand-textMuted font-medium">
                9
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 text-brand-textMuted font-medium">
                10
              </button>
            </div>

            {/* Mobile Page Numbers (Simplified) */}
            <div className="md:hidden flex items-center gap-2 text-sm">
              <span className="font-medium">1</span>
              <span className="text-gray-400">of 10</span>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors">
              Next <FiArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE FILTER MODAL / DRAWER */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Slide-Up Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 h-[85vh] bg-white z-50 rounded-t-3xl shadow-2xl lg:hidden flex flex-col"
            >
              <div className="p-4 flex-1 overflow-hidden">
                <FilterSidebar
                  isMobile={true}
                  onClose={() => setIsMobileFilterOpen(false)}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
