import { useState } from "react";
import {
  FiEdit,
  FiShare2,
  FiCopy,
  FiPlus,
  FiHelpCircle,
  FiEyeOff,
  FiCalendar,
  FiChevronDown,
  FiEdit2,
  FiLink,
} from "react-icons/fi";

export default function AdminRole() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      {/* HEADER SECTION */}
      <div>
        <h1 className="font-heading font-black text-2xl tracking-tighter text-brand-black mb-1">
          Admin role
        </h1>
        <h2 className="text-lg font-bold text-brand-black mt-6">
          About section
        </h2>
      </div>

      {/* TWO COLUMN GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN: Profile & Password */}
        <div className="flex flex-col gap-6">
          {/* 1. Profile Summary Card */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col items-center relative">
            {/* Top Actions */}
            <div className="absolute top-6 right-6 flex gap-3 text-gray-400">
              <button className="hover:text-brand-black transition-colors">
                <FiEdit />
              </button>
              <button className="hover:text-brand-black transition-colors">
                <FiShare2 />
              </button>
            </div>

            <h3 className="w-full text-left font-bold text-brand-black mb-6">
              Profile
            </h3>

            {/* Avatar & Info */}
            <img
              src="https://placehold.co/150x150/F4F7FE/242021?text=WW"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mb-4 border border-gray-200"
            />
            <h4 className="font-bold text-brand-black text-lg">Wade Warren</h4>
            <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
              <span>wade.warren@example.com</span>
              <button className="text-blue-500 hover:text-blue-700 transition-colors">
                <FiCopy />
              </button>
            </div>

            {/* Social Links */}
            <p className="text-xs text-gray-400 mt-6 mb-3">
              Linked with Social media
            </p>
            <div className="flex items-center gap-4 mb-6">
              {/* Fake Social Icons for UI */}
              <div className="flex items-center gap-1 cursor-pointer group">
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-[10px]">
                  G
                </div>
                <span className="text-[10px] text-blue-500 flex items-center gap-0.5 group-hover:underline">
                  <FiLink className="text-[8px]" /> Linked
                </span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[10px]">
                  f
                </div>
                <span className="text-[10px] text-blue-500 flex items-center gap-0.5 group-hover:underline">
                  <FiLink className="text-[8px]" /> Linked
                </span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <div className="w-5 h-5 rounded-full bg-gray-100 text-brand-black flex items-center justify-center font-bold text-[10px]">
                  X
                </div>
                <span className="text-[10px] text-blue-500 flex items-center gap-0.5 group-hover:underline">
                  <FiLink className="text-[8px]" /> Linked
                </span>
              </div>
            </div>

            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-brand-black hover:bg-gray-50 transition-colors">
              <FiPlus /> Social media
            </button>
          </div>

          {/* 2. Change Password Card */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-brand-black">Change Password</h3>
              <button className="text-xs text-blue-500 flex items-center gap-1 hover:underline">
                Need help <FiHelpCircle />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-brand-black mb-2">
                  Current Password
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl px-4 bg-[#F9FAFB] focus-within:border-brand-black transition-colors">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full py-3 outline-none text-sm bg-transparent"
                  />
                  <button
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="text-gray-400 hover:text-brand-black"
                  >
                    <FiEyeOff />
                  </button>
                </div>
                <button className="text-xs text-blue-500 hover:underline mt-2">
                  Forgot Current Password? Click here
                </button>
              </div>

              <div>
                <label className="block text-sm text-brand-black mb-2">
                  New Password
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl px-4 bg-[#F9FAFB] focus-within:border-brand-black transition-colors">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full py-3 outline-none text-sm bg-transparent"
                  />
                  <button
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="text-gray-400 hover:text-brand-black"
                  >
                    <FiEyeOff />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm text-brand-black mb-2">
                  Re-enter Password
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl px-4 bg-[#F9FAFB] focus-within:border-brand-black transition-colors mb-6">
                  <input
                    type={showRePassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full py-3 outline-none text-sm bg-transparent"
                  />
                  <button
                    onClick={() => setShowRePassword(!showRePassword)}
                    className="text-gray-400 hover:text-brand-black"
                  >
                    <FiEyeOff />
                  </button>
                </div>
              </div>

              <button className="w-full bg-brand-black text-white rounded-xl py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
                Save Change
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Profile Update Form */}
        <div className="lg:col-span-2 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-brand-black text-lg">
              Profile Update
            </h3>
            <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-brand-black hover:bg-gray-50 transition-colors">
              <FiEdit /> Edit
            </button>
          </div>

          {/* Avatar Upload */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://placehold.co/100x100/F4F7FE/242021?text=WW"
              alt="Avatar"
              className="w-16 h-16 rounded-full object-cover border border-gray-200"
            />
            <div className="flex gap-3">
              <button className="bg-brand-black text-white rounded-xl px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                Upload New
              </button>
              <button className="border border-gray-200 text-brand-black rounded-xl px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
                Delete
              </button>
            </div>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-brand-black mb-2">
                First Name
              </label>
              <input
                type="text"
                defaultValue="Wade"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-black transition-colors text-sm text-brand-black bg-[#F9FAFB]"
              />
            </div>

            <div>
              <label className="block text-sm text-brand-black mb-2">
                Last Name
              </label>
              <input
                type="text"
                defaultValue="Warren"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-black transition-colors text-sm text-brand-black bg-[#F9FAFB]"
              />
            </div>

            <div>
              <label className="block text-sm text-brand-black mb-2">
                Password
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl px-4 bg-[#F9FAFB] focus-within:border-brand-black transition-colors">
                <input
                  type="password"
                  defaultValue="*************"
                  className="w-full py-3 outline-none text-sm text-brand-black bg-transparent"
                />
                <button className="text-gray-400 hover:text-brand-black">
                  <FiEyeOff />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm text-brand-black mb-2">
                Phone Number
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl px-4 bg-[#F9FAFB] focus-within:border-brand-black transition-colors">
                <input
                  type="text"
                  defaultValue="(406) 555-0120"
                  className="w-full py-3 outline-none text-sm text-brand-black bg-transparent"
                />
                <div className="flex items-center gap-1 border-l border-gray-200 pl-3 ml-2 cursor-pointer">
                  <span className="text-lg">🇺🇸</span>
                  <FiChevronDown className="text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-brand-black mb-2">
                E-mail
              </label>
              <input
                type="email"
                defaultValue="wade.warren@example.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-black transition-colors text-sm text-brand-black bg-[#F9FAFB]"
              />
            </div>

            <div>
              <label className="block text-sm text-brand-black mb-2">
                Date of Birth
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl px-4 bg-[#F9FAFB] focus-within:border-brand-black transition-colors">
                <input
                  type="text"
                  defaultValue="12- January- 1999"
                  className="w-full py-3 outline-none text-sm text-brand-black bg-transparent"
                />
                <FiCalendar className="text-gray-400" />
              </div>
            </div>

            {/* Full Width Fields */}
            <div className="md:col-span-2">
              <label className="block text-sm text-brand-black mb-2">
                Location
              </label>
              <input
                type="text"
                defaultValue="Purok Dos"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-black transition-colors text-sm text-brand-black bg-[#F9FAFB]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-brand-black mb-2">
                Credit Card
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl px-4 bg-[#F9FAFB] focus-within:border-brand-black transition-colors cursor-pointer">
                {/* Mock Mastercard circles */}
                <div className="flex -space-x-2 mr-3">
                  <div className="w-5 h-5 rounded-full bg-red-500 opacity-80 mix-blend-multiply"></div>
                  <div className="w-5 h-5 rounded-full bg-yellow-400 opacity-80 mix-blend-multiply"></div>
                </div>
                <input
                  type="text"
                  defaultValue="843-4359-4444"
                  className="w-full py-3 outline-none text-sm text-brand-black bg-transparent cursor-pointer pointer-events-none"
                  readOnly
                />
                <FiChevronDown className="text-gray-400" />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-brand-black mb-2">
                Biography
              </label>
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-[#F9FAFB] focus-within:border-brand-black transition-colors">
                <textarea
                  rows={4}
                  placeholder="Enter a biography about you"
                  className="w-full px-4 py-3 outline-none text-sm text-brand-black bg-transparent resize-none"
                ></textarea>
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
      </div>
    </div>
  );
}
