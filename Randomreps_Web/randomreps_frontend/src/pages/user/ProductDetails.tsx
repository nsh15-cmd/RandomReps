// src/pages/ProductDetails.tsx
import { useState } from "react";
import { FiChevronRight, FiMinus, FiPlus, FiSliders } from "react-icons/fi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import DetailedReviewCard from "../../components/user/DetailedReviewCard";
import ProductCard from "../../components/user/ProductCard";
import { productReviews } from "../../data/review";
import { topSelling } from "../../data/products"; // Using top selling for "You might also like"

export default function ProductDetails() {
  // State for interactive elements
  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState("#4B4538"); // The olive-brown color
  const [activeSize, setActiveSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Rating & Reviews");

  // Placeholder images for the Jordan 4s
  const images = [
    "https://placehold.co/800x800/F0EEED/000000?text=Jordan+Main",
    "https://placehold.co/800x800/F0EEED/000000?text=Jordan+Side",
    "https://placehold.co/800x800/F0EEED/000000?text=Jordan+Front",
  ];

  const colors = ["#4B4538", "#143126", "#1E1E3F"]; // Olive, Forest, Navy
  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const tabs = ["Product Details", "Rating & Reviews", "FAQs"];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-brand-textMuted text-sm mb-6 md:mb-10">
          <a href="/" className="hover:text-brand-black transition-colors">
            Home
          </a>
          <FiChevronRight />
          <a
            href="/category"
            className="hover:text-brand-black transition-colors"
          >
            Shop
          </a>
          <FiChevronRight />
          <span className="hover:text-brand-black transition-colors cursor-pointer">
            Men
          </span>
          <FiChevronRight />
          <span className="text-brand-black">T-shirts</span>
        </div>

        {/* TOP SECTION: Gallery & Details */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20">
          {/* Left: Image Gallery */}
          <div className="lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 lg:w-36 overflow-x-auto lg:overflow-visible">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-28 lg:w-full aspect-square flex-shrink-0 rounded-[20px] overflow-hidden border-2 transition-all ${activeImage === idx ? "border-brand-black" : "border-transparent"}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    className="w-full h-full object-cover mix-blend-multiply bg-[#F0EEED]"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 rounded-[20px] overflow-hidden bg-[#F0EEED] aspect-square lg:aspect-auto">
              <img
                src={images[activeImage]}
                alt="Main Product"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tighter mb-4 text-brand-black">
              Nike Air Jordan 4 Retro
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-lg text-accent-star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <span className="text-brand-textMuted">4.5/5</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-heading font-bold text-3xl text-brand-black">
                ₱2600
              </span>
              <span className="font-heading font-bold text-3xl text-brand-textMuted line-through opacity-60">
                ₱3000
              </span>
              <span className="bg-accent-discountBg text-accent-discountText text-sm font-bold px-4 py-1.5 rounded-full">
                -40%
              </span>
            </div>

            <p className="text-brand-textMuted leading-relaxed mb-6 pb-6 border-b border-gray-200">
              Nike Air Jordan 4 Retro "Iced Carmine" women's sneakers. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>

            {/* Colors */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h4 className="text-brand-textMuted mb-4">Select Colors</h4>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setActiveColor(color)}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: color }}
                  >
                    {activeColor === color && (
                      <span className="text-white text-lg">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h4 className="text-brand-textMuted mb-4">Choose Size</h4>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setActiveSize(size)}
                    className={`px-6 py-3 rounded-full transition-colors ${
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

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4">
              <div className="bg-[#F0F0F0] rounded-full px-5 py-3 flex items-center justify-between w-32 md:w-40 flex-shrink-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-2xl text-brand-black hover:text-gray-500"
                >
                  <FiMinus />
                </button>
                <span className="font-medium text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-2xl text-brand-black hover:text-gray-500"
                >
                  <FiPlus />
                </button>
              </div>
              <button className="flex-1 bg-brand-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors py-3 md:py-4">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="flex justify-between border-b border-gray-200 mb-8 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-6 text-lg md:text-xl font-medium whitespace-nowrap px-4 md:px-8 transition-colors border-b-2 ${
                activeTab === tab
                  ? "text-brand-black border-brand-black"
                  : "text-brand-textMuted border-transparent hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* REVIEWS SECTION (Visible only if tab is selected) */}
        {activeTab === "Rating & Reviews" && (
          <div className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h3 className="font-heading font-bold text-2xl flex items-center gap-2">
                All Reviews{" "}
                <span className="text-brand-textMuted text-sm font-normal">
                  (451)
                </span>
              </h3>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button className="bg-[#F0F0F0] p-3 rounded-full text-brand-black hover:bg-gray-200">
                  <FiSliders className="text-xl" />
                </button>
                <select className="hidden md:block bg-[#F0F0F0] px-5 py-3 rounded-full font-medium outline-none cursor-pointer">
                  <option>Latest</option>
                  <option>Highest Rating</option>
                  <option>Lowest Rating</option>
                </select>
                <button className="flex-1 md:flex-none bg-brand-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                  Write a Review
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {productReviews.map((review) => (
                <DetailedReviewCard
                  key={review.id}
                  name={review.name}
                  rating={review.rating}
                  date={review.date}
                  text={review.text}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <button className="px-10 py-3 rounded-full border border-gray-300 font-medium text-brand-black hover:bg-brand-black hover:text-white transition-colors">
                Load More Reviews
              </button>
            </div>
          </div>
        )}

        {/* YOU MIGHT ALSO LIKE */}
        <div className="pt-16 border-t border-gray-200">
          <h2 className="text-center font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-12">
            You might also like
          </h2>

          {/* Re-using your horizontal scroll layout from the homepage for mobile compatibility */}
          <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory md:snap-none scrollbar-hide pb-4 mb-6 cursor-grab active:cursor-grabbing">
            {topSelling.map((product) => (
              <div
                key={product.id}
                className="min-w-[190px] sm:min-w-[220px] md:min-w-0 flex-shrink-0 snap-start"
              >
                <ProductCard
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                  rating={product.rating}
                  imageUrl={product.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
