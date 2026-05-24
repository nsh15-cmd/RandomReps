import { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiMoreVertical,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiCheck,
  FiX,
  FiMessageSquare,
} from "react-icons/fi";

export default function ProductReviews() {
  const [activeTab, setActiveTab] = useState("All Reviews");

  // Top Metrics
  const stats = [
    { title: "Total Reviews", value: "3,456", icon: <FiMessageSquare /> },
    {
      title: "Average Rating",
      value: "4.8",
      color: "text-yellow-500",
      icon: <FiStar />,
    },
    {
      title: "Pending Approval",
      value: "24",
      color: "text-amber-500",
      icon: <FiCheck />,
    },
    {
      title: "5-Star Reviews",
      value: "2,890",
      color: "text-green-500",
      icon: <FiStar />,
    },
  ];

  // Mock Data for the Reviews Table
  const reviewsList = [
    {
      id: "#REV1024",
      product: "Apple iPhone 15 Pro",
      customer: "John Doe",
      rating: 5,
      comment:
        "Absolutely love the new camera system. Battery life is amazing!",
      date: "May 18, 2026",
      status: "Published",
      img: "iPhone",
    },
    {
      id: "#REV1023",
      product: "Nike Air Jordan 4",
      customer: "Jane Smith",
      rating: 4,
      comment:
        "Great fit and very comfortable, but shipping took a bit longer than expected.",
      date: "May 17, 2026",
      status: "Published",
      img: "Jordan",
    },
    {
      id: "#REV1022",
      product: "Sony Noise Cancelling",
      customer: "Mark Wilson",
      rating: 5,
      comment:
        "Best noise cancellation I've ever experienced. Highly recommend.",
      date: "May 16, 2026",
      status: "Pending",
      img: "Headphones",
    },
    {
      id: "#REV1021",
      product: "Smart LED Color Bulb",
      customer: "Emily Davis",
      rating: 2,
      comment: "The app disconnects frequently. Needs a software update.",
      date: "May 15, 2026",
      status: "Rejected",
      img: "Bulb",
    },
    {
      id: "#REV1020",
      product: "Premium Leather Wallet",
      customer: "Michael Chen",
      rating: 5,
      comment: "Smells like real premium leather. The stitching is flawless.",
      date: "May 14, 2026",
      status: "Published",
      img: "Wallet",
    },
    {
      id: "#REV1019",
      product: "Adjustable Dumbbells",
      customer: "Sarah Connor",
      rating: 4,
      comment:
        "Saves a lot of space in my home gym. Switching weights is smooth.",
      date: "May 12, 2026",
      status: "Pending",
      img: "Dumbbells",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            className={`text-sm ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
      </div>
    );
  };

  const renderStatus = (status: string) => {
    switch (status) {
      case "Published":
        return (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
            Published
          </span>
        );
      case "Pending":
        return (
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">
            Pending
          </span>
        );
      case "Rejected":
        return (
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
            Rejected
          </span>
        );
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="font-heading font-black text-2xl tracking-tighter text-brand-black">
          Product Reviews
        </h1>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-2 relative z-10">
              <h3 className="font-bold text-gray-500 text-sm">{stat.title}</h3>
              <button className="text-gray-400 hover:text-brand-black transition-colors">
                <FiMoreVertical />
              </button>
            </div>
            <span
              className={`font-heading font-black text-3xl tracking-tighter relative z-10 ${stat.color || "text-brand-black"}`}
            >
              {stat.value}
            </span>
            {/* Faded Background Icon for styling */}
            <div className="absolute -right-4 -bottom-4 text-gray-50 text-7xl opacity-50 pointer-events-none">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* MAIN TABLE CONTAINER */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        {/* Table Controls (Tabs & Search) */}
        <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          <div className="flex gap-2 p-1 bg-gray-50 rounded-xl border border-gray-100 w-full sm:w-auto overflow-x-auto scrollbar-hide">
            {["All Reviews", "Published", "Pending", "Rejected"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-white text-brand-black shadow-sm border border-gray-200"
                    : "text-gray-500 hover:text-brand-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full xl:w-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-xl flex items-center px-4 py-2 flex-1 xl:w-64">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search reviews..."
                className="bg-transparent w-full outline-none text-sm placeholder-gray-400"
              />
            </div>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
              <FiFilter />
            </button>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap lg:whitespace-normal">
            <thead className="bg-[#F0FDF4] border-b border-green-100">
              <tr className="text-[#2F5A41] font-semibold">
                <th className="py-4 px-6 w-10">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 accent-brand-black cursor-pointer"
                  />
                </th>
                <th className="py-4 px-6 w-64">Product</th>
                <th className="py-4 px-6 w-48">Customer</th>
                <th className="py-4 px-6 w-40">Rating</th>
                <th className="py-4 px-6 min-w-[250px]">Review</th>
                <th className="py-4 px-6 w-32">Status</th>
                <th className="py-4 px-6 text-right w-32">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {reviewsList.map((review, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="py-4 px-6 align-top">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 rounded border-gray-300 accent-brand-black cursor-pointer"
                    />
                  </td>
                  <td className="py-4 px-6 align-top">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 mt-0.5">
                        <img
                          src={`https://placehold.co/100x100/F4F7FE/242021?text=${review.img.substring(0, 3)}`}
                          alt={review.product}
                          className="w-full h-full object-cover mix-blend-multiply"
                        />
                      </div>
                      <div>
                        <span className="font-bold text-brand-black block line-clamp-2">
                          {review.product}
                        </span>
                        <span className="text-[10px] text-gray-400 block mt-1">
                          {review.id}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 align-top">
                    <span className="font-medium text-brand-black block">
                      {review.customer}
                    </span>
                    <span className="text-xs text-gray-400 block mt-1">
                      {review.date}
                    </span>
                  </td>
                  <td className="py-4 px-6 align-top">
                    {renderStars(review.rating)}
                  </td>
                  <td className="py-4 px-6 align-top">
                    <p
                      className="text-gray-600 leading-relaxed text-sm line-clamp-2"
                      title={review.comment}
                    >
                      "{review.comment}"
                    </p>
                  </td>
                  <td className="py-4 px-6 align-top">
                    {renderStatus(review.status)}
                  </td>
                  <td className="py-4 px-6 text-right align-top">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {review.status === "Pending" && (
                        <>
                          <button
                            className="w-8 h-8 flex items-center justify-center bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                            title="Approve"
                          >
                            <FiCheck className="text-lg" />
                          </button>
                          <button
                            className="w-8 h-8 flex items-center justify-center bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                            title="Reject"
                          >
                            <FiX className="text-lg" />
                          </button>
                        </>
                      )}
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-gray-50 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-100 transition-colors"
                        title="Delete"
                      >
                        <FiTrash2 className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
            <FiChevronLeft /> Previous
          </button>

          <div className="flex items-center gap-1 overflow-x-auto max-w-full pb-2 sm:pb-0 scrollbar-hide">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-black text-white font-bold flex-shrink-0">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-500 font-medium flex-shrink-0">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-500 font-medium flex-shrink-0">
              3
            </button>
            <span className="px-2 text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-500 font-medium flex-shrink-0">
              45
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
            Next <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
