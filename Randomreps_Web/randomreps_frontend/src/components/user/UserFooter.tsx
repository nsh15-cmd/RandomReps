// src/components/Footer.tsx
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-gray pt-24 pb-8 mt-32 px-4 sm:px-6 lg:px-8 relative font-body">
      {/* Contact Us Banner */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-black rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white uppercase max-w-sm leading-tight text-center md:text-left">
            HAVE QUESTIONS? CONTACT US DIRECTLY
          </h2>

          <div className="w-full md:max-w-sm flex flex-col gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61582440006612"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-white text-brand-black font-medium py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Contact Us on Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto pt-16 md:pt-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-300 pb-12">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <h3 className="font-heading font-black text-3xl uppercase tracking-tighter text-brand-black mb-4">
            RANDOMREPS
          </h3>
          <p className="text-brand-textMuted max-w-sm mb-6 text-sm leading-relaxed">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61582440006612"
              target="_blank"
              className="bg-white p-2 rounded-full border border-gray-200 hover:bg-brand-black hover:text-white transition-colors"
            >
              <FaFacebookF />
            </a>
            {/* <a
              href="#"
              className="bg-white p-2 rounded-full border border-gray-200 hover:bg-brand-black hover:text-white transition-colors"
            >
              <FaInstagram />
            </a> */}
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="font-heading font-semibold tracking-widest text-brand-black mb-4 uppercase text-sm">
            Help
          </h4>
          <ul className="flex flex-col gap-3 text-brand-textMuted text-sm">
            <li>
              <a href="#" className="hover:text-brand-black transition-colors">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-black transition-colors">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-black transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-black transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold tracking-widest text-brand-black mb-4 uppercase text-sm">
            FAQ
          </h4>
          <ul className="flex flex-col gap-3 text-brand-textMuted text-sm">
            <li>
              <a href="#" className="hover:text-brand-black transition-colors">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-black transition-colors">
                Manage Deliveries
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-black transition-colors">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-black transition-colors">
                Payment
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto pt-6 text-center text-sm text-brand-textMuted">
        RANDOMREPS 2026, All Rights Reserved
      </div>
    </footer>
  );
}
