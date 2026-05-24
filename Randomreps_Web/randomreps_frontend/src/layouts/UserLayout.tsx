// src/layouts/UserLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/user/UserNavbar";
import Footer from "../components/user/UserFooter";

export default function UserLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* This flex-grow ensures the footer is pushed to the bottom even if the page is empty */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
