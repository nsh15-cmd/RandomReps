// src/pages/Auth.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiX } from "react-icons/fi"; // Added FiX icon
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // New States for Terms & Conditions
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const navigate = useNavigate(); // <--- ADD THIS LINE
  const [email, setEmail] = useState(""); // <--- ADD THIS VARIABLE
  const [password, setPassword] = useState(""); // <--- ADD THIS VARIABLE

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-gray-200 min-h-[80vh] flex items-center justify-center relative">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-[20px] p-6 md:p-10 shadow-sm relative overflow-hidden">
        {/* Toggle Headers */}
        <div className="flex gap-6 mb-8 border-b border-gray-100 pb-2">
          <button
            onClick={() => setIsLogin(true)}
            className={`font-heading font-black text-2xl md:text-3xl uppercase tracking-tighter transition-colors relative pb-2`}
          >
            <span className={isLogin ? "text-brand-black" : "text-gray-300"}>
              Login
            </span>
            {isLogin && (
              <motion.div
                layoutId="authUnderline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-brand-black rounded-full"
              />
            )}
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`font-heading font-black text-2xl md:text-3xl uppercase tracking-tighter transition-colors relative pb-2`}
          >
            <span className={!isLogin ? "text-brand-black" : "text-gray-300"}>
              Register
            </span>
            {!isLogin && (
              <motion.div
                layoutId="authUnderline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-brand-black rounded-full"
              />
            )}
          </button>
        </div>

        {/* Form Containers with Animation */}
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.form
              key="login"
              onSubmit={(e) => {
                e.preventDefault();
                // DUMMY ACCOUNT 
                if (
                  email === "admin@randomreps.com" &&
                  password === "admin123"
                ) {
                  navigate("/admin");
                } else {
                  navigate("/");
                }
              }}
              className="flex flex-col gap-5"
            >
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Email Address
                </label>
                <div className="bg-[#F0F0F0] rounded-full flex items-center px-5 border border-transparent focus-within:border-gray-400 transition-colors">
                  <FiMail className="text-gray-400 text-xl flex-shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // <--- ATTACH BINDING
                    placeholder="Enter your email"
                    className="bg-transparent w-full outline-none px-3 py-3.5 text-brand-black placeholder-gray-400 text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-brand-black">
                    Password
                  </label>
                </div>
                <div className="bg-[#F0F0F0] rounded-full flex items-center px-5 border border-transparent focus-within:border-gray-400 transition-colors">
                  <FiLock className="text-gray-400 text-xl flex-shrink-0" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // <--- ATTACH BINDING
                    placeholder="Enter your password"
                    className="bg-transparent w-full outline-none px-3 py-3.5 text-brand-black placeholder-gray-400 text-sm"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-black text-white rounded-full py-4 font-medium hover:bg-gray-800 transition-colors mt-2"
              >
                Sign In
              </button>
            </motion.form>
          ) : (
            <motion.form
              key="register"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5"
            >
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Full Name
                </label>
                <div className="bg-[#F0F0F0] rounded-full flex items-center px-5 border border-transparent focus-within:border-gray-400 transition-colors">
                  <FiUser className="text-gray-400 text-xl flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-transparent w-full outline-none px-3 py-3.5 text-brand-black placeholder-gray-400 text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Email Address
                </label>
                <div className="bg-[#F0F0F0] rounded-full flex items-center px-5 border border-transparent focus-within:border-gray-400 transition-colors">
                  <FiMail className="text-gray-400 text-xl flex-shrink-0" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent w-full outline-none px-3 py-3.5 text-brand-black placeholder-gray-400 text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Password
                </label>
                <div className="bg-[#F0F0F0] rounded-full flex items-center px-5 border border-transparent focus-within:border-gray-400 transition-colors">
                  <FiLock className="text-gray-400 text-xl flex-shrink-0" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="bg-transparent w-full outline-none px-3 py-3.5 text-brand-black placeholder-gray-400 text-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-brand-black transition-colors flex-shrink-0"
                  >
                    {showPassword ? (
                      <FiEyeOff className="text-xl" />
                    ) : (
                      <FiEye className="text-xl" />
                    )}
                  </button>
                </div>
              </div>

              {/* ADDED: Terms and Conditions Checkbox */}
              <div className="flex items-start gap-3 mt-1 px-1">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-gray-300 text-brand-black focus:ring-brand-black accent-black cursor-pointer"
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-brand-textMuted leading-normal cursor-pointer select-none"
                >
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => setIsTermsModalOpen(true)}
                    className="text-brand-black font-semibold underline hover:text-gray-700 transition-colors"
                  >
                    Terms and Conditions
                  </button>{" "}
                  and Privacy Policy.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-black text-white rounded-full py-4 font-medium hover:bg-gray-800 transition-colors mt-2"
              >
                Create Account
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* ADDED: Terms & Conditions Pop-up Modal */}
      <AnimatePresence>
        {isTermsModalOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTermsModalOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Modal Body Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="fixed inset-4 md:inset-auto md:w-full md:max-w-lg bg-white rounded-[20px] p-6 md:p-8 border border-gray-200 shadow-2xl z-50 flex flex-col max-h-[80vh] my-auto"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-4">
                <h2 className="font-heading font-black text-xl md:text-2xl uppercase tracking-tighter text-brand-black">
                  Terms and Conditions
                </h2>
                <button
                  type="button"
                  onClick={() => setIsTermsModalOpen(false)}
                  className="text-gray-400 hover:text-brand-black text-2xl transition-colors p-1"
                >
                  <FiX />
                </button>
              </div>

              {/* Scrollable Document Text Content */}
              <div className="flex-1 overflow-y-auto pr-2 text-sm text-brand-textMuted leading-relaxed space-y-4 scrollbar-hide">
                <p className="font-semibold text-brand-black">
                  Welcome to RandomReps.
                </p>
                <p>
                  By browsing, accessing, or creating an account on this
                  storefront ecosystem, you agree to follow and be bound by
                  these local operational terms and usage provisions.
                </p>
                <h4 className="font-bold text-brand-black uppercase tracking-tight text-xs mt-4">
                  1. Account Security
                </h4>
                <p>
                  You are solely responsible for protecting your account
                  credentials. Any transactional execution or platform
                  communication originating from your profile registration will
                  be logged under your responsibility.
                </p>
                <h4 className="font-bold text-brand-black uppercase tracking-tight text-xs mt-4">
                  2. Product Catalogs and Purchases
                </h4>
                <p>
                  All graphic designs, footwear components, visual elements, and
                  localized item listings on RandomReps represent interactive
                  front-end system representations. Prices and discounts are
                  subject to layout configuration variations.
                </p>
                <h4 className="font-bold text-brand-black uppercase tracking-tight text-xs mt-4">
                  3. Data Usage
                </h4>
                <p>
                  We store authentication configurations securely to ensure
                  structural layout continuity across sessions. Your profile
                  parameters will remain processed in strict compliance with
                  basic local storage parameters.
                </p>
              </div>

              {/* Modal Action Button */}
              <div className="pt-4 border-t border-gray-100 mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setAgreedToTerms(true);
                    setIsTermsModalOpen(false);
                  }}
                  className="bg-brand-black text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Accept and Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
