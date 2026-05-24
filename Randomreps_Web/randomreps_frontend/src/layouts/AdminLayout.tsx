import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiTag,
  FiLayers,
  FiFileText,
  FiStar,
  FiPlusCircle,
  FiImage,
  FiList,
  FiMessageSquare,
  FiShield,
  FiSliders,
  FiSearch,
  FiBell,
  FiLogOut,
  FiMenu,
  FiChevronLeft,
  FiExternalLink,
} from "react-icons/fi";

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  // State for the burger sidebar toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuGroups = [
    {
      title: "Main menu",
      items: [
        { name: "Dashboard", path: "/admin", icon: <FiGrid /> },
        {
          name: "Order Management",
          path: "/admin/orders",
          icon: <FiShoppingBag />,
        },
        { name: "Customers", path: "/admin/customers", icon: <FiUsers /> },
        { name: "Coupon Code", path: "/admin/coupons", icon: <FiTag /> },
        { name: "Categories", path: "/admin/categories", icon: <FiLayers /> },
        {
          name: "Transaction",
          path: "/admin/transactions",
          icon: <FiFileText />,
        },
        { name: "Brand", path: "/admin/brands", icon: <FiStar /> },
      ],
    },
    {
      title: "Product",
      items: [
        {
          name: "Add Products",
          path: "/admin/add-product",
          icon: <FiPlusCircle />,
        },
        { name: "Product Media", path: "/admin/media", icon: <FiImage /> },
        { name: "Product List", path: "/admin/products", icon: <FiList /> },
        {
          name: "Product Reviews",
          path: "/admin/reviews",
          icon: <FiMessageSquare />,
        },
      ],
    },
    {
      title: "Admin",
      items: [
        { name: "Admin role", path: "/admin/roles", icon: <FiShield /> },
        {
          name: "Customer Service",
          path: "/admin/customerservice",
          icon: <FiSliders />,
        },
      ],
    },
  ];

  return (
    <div className="flex bg-[#F4F7FE] min-h-screen text-brand-black font-sans">
      {/* 1. COLLAPSIBLE SIDEBAR */}
      <aside
        className={`${isSidebarOpen ? "w-64" : "w-20"} bg-white border-r border-gray-200 flex flex-col fixed h-screen z-20 transition-all duration-300`}
      >
        {/* Branding & Toggle */}
        <div className="h-20 px-6 border-b border-gray-100 flex justify-between items-center">
          {isSidebarOpen && (
            <span className="font-heading font-black text-xl tracking-tighter uppercase">
              RandomReps
            </span>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-400 hover:text-black p-1 transition-colors"
          >
            {isSidebarOpen ? (
              <FiChevronLeft className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4 scrollbar-hide">
          {menuGroups.map((group, gIdx) => (
            <div key={gIdx} className="mb-6">
              {isSidebarOpen && (
                <p className="text-xs font-medium text-gray-400 mb-3 px-6">
                  {group.title}
                </p>
              )}
              <div className="space-y-1 px-3">
                {group.items.map((item, iIdx) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={iIdx}
                      to={item.path}
                      title={!isSidebarOpen ? item.name : ""}
                      className={`flex items-center ${isSidebarOpen ? "justify-start px-4" : "justify-center"} py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-brand-black text-white shadow-md"
                          : "text-gray-500 hover:bg-gray-50 hover:text-brand-black"
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {isSidebarOpen && (
                        <span className="ml-3">{item.name}</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer Profile */}
        <div className="p-4 border-t border-gray-100">
          <div
            className={`flex items-center ${isSidebarOpen ? "justify-between" : "justify-center"} bg-white`}
          >
            <div className="flex items-center gap-3">
              <img
                src="https://placehold.co/100x100/222222/FFFFFF?text=AD"
                className="w-10 h-10 rounded-full object-cover"
                alt="Admin"
              />
              {isSidebarOpen && (
                <div>
                  <p className="text-sm font-bold leading-tight">
                    Admin Master
                  </p>
                  <p className="text-xs text-gray-400">RandomReps Admin</p>
                </div>
              )}
            </div>
            {isSidebarOpen && (
              <button
                onClick={() => navigate("/")}
                className="text-gray-400 hover:text-black"
              >
                <FiLogOut />
              </button>
            )}
          </div>
          {isSidebarOpen && (
            <button
              onClick={() => navigate("/")}
              className="w-full mt-4 flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <FiExternalLink /> Your Shop
            </button>
          )}
        </div>
      </aside>

      {/* 2. MAIN DASHBOARD AREA */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? "pl-64" : "pl-20"}`}
      >
        {/* Header */}
        <header className="h-20 bg-[#F4F7FE] px-8 flex items-center justify-between sticky top-0 z-10">
          <h1 className="font-heading font-bold text-2xl text-brand-black">
            Dashboard
          </h1>

          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full flex items-center px-4 py-2.5 shadow-sm min-w-[300px]">
              <FiSearch className="text-gray-400 text-lg flex-shrink-0" />
              <input
                type="text"
                placeholder="Search data, users, or reports"
                className="bg-transparent w-full outline-none px-3 text-sm text-brand-black placeholder-gray-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2.5 text-gray-400 hover:text-black transition-colors relative">
                <FiBell className="text-xl" />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <img
                src="https://placehold.co/100x100/222222/FFFFFF?text=AD"
                className="w-9 h-9 rounded-full ml-2"
                alt="Profile"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-8 pt-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
