// src/pages/Cart.tsx
import { useState } from "react";
import {
  FiChevronRight,
  FiMinus,
  FiPlus,
  FiTrash2,
  FiTag,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Cart() {
  // Initial cart data based on your Figma design
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "https://placehold.co/150x150/F0EEED/000000?text=Gradient+Tee",
    },
    {
      id: 2,
      title: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "https://placehold.co/150x150/F0EEED/000000?text=Checkered+Shirt",
    },
    {
      id: 3,
      title: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "https://placehold.co/150x150/F0EEED/000000?text=Skinny+Jeans",
    },
  ]);

  // Update Quantity Function
  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta); // Prevents going below 1
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  // Remove Item Function
  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Dynamic Math Calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-brand-textMuted text-sm mb-6 md:mb-8">
        <Link to="/" className="hover:text-brand-black transition-colors">
          Home
        </Link>
        <FiChevronRight />
        <span className="text-brand-black">Cart</span>
      </div>

      <h1 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tighter mb-6 md:mb-10 text-brand-black">
        Your cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* LEFT COLUMN: Cart Items */}
        <div className="flex-1 border border-gray-200 rounded-[20px] p-4 md:p-6 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-10 text-brand-textMuted">
              Your cart is empty.
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={item.id}>
                <div className="flex gap-4 md:gap-6">
                  {/* Image */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-[#F0EEED] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-heading font-bold text-lg md:text-xl text-brand-black leading-tight mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-brand-textMuted mb-0.5">
                          <span className="text-brand-black">Size:</span>{" "}
                          {item.size}
                        </p>
                        <p className="text-sm text-brand-textMuted">
                          <span className="text-brand-black">Color:</span>{" "}
                          {item.color}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-1"
                      >
                        <FiTrash2 className="text-xl md:text-2xl" />
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-4">
                      <span className="font-heading font-bold text-2xl text-brand-black">
                        ₱{item.price}
                      </span>

                      {/* Quantity Selector */}
                      <div className="bg-[#F0F0F0] rounded-full px-4 py-2 flex items-center gap-4">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-lg text-brand-black hover:text-gray-500"
                        >
                          <FiMinus />
                        </button>
                        <span className="font-medium text-sm w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-lg text-brand-black hover:text-gray-500"
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add a divider line between items, but not after the last one */}
                {index < cartItems.length - 1 && (
                  <div className="h-px bg-gray-200 mt-6 w-full"></div>
                )}
              </div>
            ))
          )}
        </div>

        {/* RIGHT COLUMN: Order Summary */}
        <div className="w-full lg:w-[450px] border border-gray-200 rounded-[20px] p-5 md:p-6 h-fit">
          <h2 className="font-heading font-bold text-2xl text-brand-black mb-6">
            Order Summary
          </h2>

          <div className="flex flex-col gap-4 mb-6">
            <div className="flex justify-between text-brand-textMuted text-lg">
              <span>Subtotal</span>
              <span className="font-bold text-brand-black">₱{subtotal}</span>
            </div>
            <div className="flex justify-between text-brand-textMuted text-lg">
              <span>Discount (-20%)</span>
              <span className="font-bold text-red-500">
                -₱{discount.toFixed(0)}
              </span>
            </div>
            <div className="flex justify-between text-brand-textMuted text-lg">
              <span>Delivery Fee</span>
              <span className="font-bold text-brand-black">₱{deliveryFee}</span>
            </div>
          </div>

          <div className="h-px bg-gray-200 mb-6 w-full"></div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-xl text-brand-black">Total</span>
            <span className="font-heading font-bold text-2xl text-brand-black">
              ₱{total.toFixed(0)}
            </span>
          </div>

          {/* Promo Code Input */}
          <div className="flex gap-3 mb-6">
            <div className="flex-1 bg-[#F0F0F0] rounded-full flex items-center px-4 overflow-hidden">
              <FiTag className="text-gray-400 text-xl flex-shrink-0" />
              <input
                type="text"
                placeholder="Add promo code"
                className="bg-transparent w-full outline-none px-3 py-3 text-brand-black placeholder-gray-400"
              />
            </div>
            <button className="bg-brand-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Apply
            </button>
          </div>

          <button className="w-full bg-brand-black text-white rounded-full py-4 font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
            Go to Checkout <FiArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
