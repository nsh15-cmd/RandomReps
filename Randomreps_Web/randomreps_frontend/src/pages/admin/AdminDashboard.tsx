import {
  FiMoreVertical,
  FiTrendingUp,
  FiTrendingDown,
  FiFilter,
  FiSearch,
} from "react-icons/fi";

export default function AdminDashboard() {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* ROW 1: Top Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Total Sales */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-brand-black text-lg">
                Total Sales
              </h3>
              <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
            </div>
            <button className="text-gray-400">
              <FiMoreVertical />
            </button>
          </div>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-heading font-black text-4xl tracking-tighter text-brand-black">
              ₱350K
            </span>
            <span className="text-sm font-medium text-brand-black">Sales</span>
            <span className="text-xs font-bold text-green-500 flex items-center">
              <FiTrendingUp className="mr-1" /> 10.4%
            </span>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-xs text-gray-500">
              Previous 7days <span className="text-blue-500">(₱235)</span>
            </p>
            <button className="text-blue-600 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-50 transition-colors">
              Details
            </button>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-brand-black text-lg">
                Total Orders
              </h3>
              <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
            </div>
            <button className="text-gray-400">
              <FiMoreVertical />
            </button>
          </div>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-heading font-black text-4xl tracking-tighter text-brand-black">
              10.7K
            </span>
            <span className="text-sm font-medium text-brand-black">order</span>
            <span className="text-xs font-bold text-green-500 flex items-center">
              <FiTrendingUp className="mr-1" /> 14.4%
            </span>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-xs text-gray-500">
              Previous 7days <span className="text-blue-500">(7.6k)</span>
            </p>
            <button className="text-blue-600 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-50 transition-colors">
              Details
            </button>
          </div>
        </div>

        {/* Pending & Canceled */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-brand-black text-lg">
                Pending & Canceled
              </h3>
              <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
            </div>
            <button className="text-gray-400">
              <FiMoreVertical />
            </button>
          </div>
          <div className="flex gap-8 mb-6">
            <div>
              <p className="text-sm font-medium text-brand-black mb-1">
                Pending
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-black text-3xl tracking-tighter text-brand-black">
                  509
                </span>
                <span className="text-xs text-gray-500">user 204</span>
              </div>
            </div>
            <div className="w-px bg-gray-200"></div>
            <div>
              <p className="text-sm font-medium text-brand-black mb-1">
                Canceled
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-black text-3xl tracking-tighter text-red-500">
                  94
                </span>
                <span className="text-xs font-bold text-red-500 flex items-center">
                  <FiTrendingDown className="mr-1" /> 14.4%
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <button className="text-blue-600 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-50 transition-colors">
              Details
            </button>
          </div>
        </div>
      </div>

      {/* ROW 2: Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart (Takes up 2 columns) */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-brand-black text-lg">
              Report for this week
            </h3>
            <div className="flex border border-gray-200 rounded-full p-1">
              <button className="bg-white shadow-sm px-4 py-1 rounded-full text-xs font-bold text-brand-black">
                This week
              </button>
              <button className="px-4 py-1 rounded-full text-xs font-medium text-gray-400">
                Last week
              </button>
              <button className="px-2 text-gray-400">
                <FiMoreVertical />
              </button>
            </div>
          </div>

          {/* Chart Stats Row */}
          <div className="flex justify-between mb-8">
            <div>
              <p className="font-heading font-black text-2xl tracking-tighter">
                52k
              </p>
              <p className="text-xs text-gray-400">Customers</p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl tracking-tighter">
                3.5K
              </p>
              <p className="text-xs text-gray-400">Total Products</p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl tracking-tighter">
                2.5K
              </p>
              <p className="text-xs text-gray-400">Stock Products</p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl tracking-tighter">
                0.5K
              </p>
              <p className="text-xs text-gray-400">Out of Stock</p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl tracking-tighter">
                250k
              </p>
              <p className="text-xs text-gray-400">Revenue</p>
            </div>
          </div>

          {/* Visual Chart Placeholder */}
          <div className="h-48 w-full bg-[#F4F7FE] rounded-xl flex items-end relative overflow-hidden">
            {/* Mocking the green curve chart */}
            <div className="w-full h-24 bg-green-100 border-t-2 border-green-500 rounded-t-full opacity-50 absolute bottom-0 left-0"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <span className="bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded shadow-sm">
                Thursday: 14k
              </span>
            </div>
          </div>
        </div>

        {/* Side Panel Chart */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm font-medium text-blue-500">
                Users in last 30 minutes
              </p>
              <button className="text-gray-400">
                <FiMoreVertical />
              </button>
            </div>
            <h3 className="font-heading font-black text-4xl tracking-tighter text-brand-black mb-4">
              21.5K
            </h3>
            <p className="text-xs text-gray-400 mb-2">Users per minute</p>
            {/* Mock Bar Chart */}
            <div className="flex items-end gap-1 h-12 mb-6">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-brand-black rounded-t-sm"
                  style={{ height: `${Math.random() * 100}%` }}
                ></div>
              ))}
            </div>

            <div className="flex justify-between text-xs font-bold mb-4">
              <span>Sales by Country</span>
              <span>Sales</span>
            </div>

            {/* Country List */}
            <div className="space-y-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px]">
                    US
                  </div>{" "}
                  <div>
                    <p className="text-sm font-bold">30k</p>
                    <p className="text-[10px] text-gray-400">US</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-500">
                  ↑ 25.8%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-[10px]">
                    BR
                  </div>{" "}
                  <div>
                    <p className="text-sm font-bold">30k</p>
                    <p className="text-[10px] text-gray-400">Brazil</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-red-500">↓ 15.8%</span>
              </div>
            </div>
          </div>
          <button className="w-full text-blue-600 border border-blue-200 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors">
            View Insight
          </button>
        </div>
      </div>

      {/* ROW 3: Tables and Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction Table */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-brand-black text-lg">Transaction</h3>
            <button className="flex items-center gap-2 bg-brand-black text-white px-4 py-1.5 rounded-full text-xs font-medium">
              Filter <FiFilter />
            </button>
          </div>

          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-400 font-medium border-b border-gray-100">
                <th className="pb-3 font-normal">No</th>
                <th className="pb-3 font-normal">Id Customer</th>
                <th className="pb-3 font-normal">Order Date</th>
                <th className="pb-3 font-normal">Status</th>
                <th className="pb-3 font-normal text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  no: "1.",
                  id: "#6545",
                  date: "01 Oct | 11:29 am",
                  status: "Paid",
                  color: "bg-brand-black text-white",
                  amount: "₱64",
                },
                {
                  no: "2.",
                  id: "#5412",
                  date: "01 Oct | 11:29 am",
                  status: "Pending",
                  color: "bg-yellow-400 text-brand-black",
                  amount: "₱557",
                },
                {
                  no: "3.",
                  id: "#6622",
                  date: "01 Oct | 11:29 am",
                  status: "Paid",
                  color: "bg-green-500 text-white",
                  amount: "₱156",
                },
                {
                  no: "4.",
                  id: "#6462",
                  date: "01 Oct | 11:29 am",
                  status: "Paid",
                  color: "bg-green-500 text-white",
                  amount: "₱265",
                },
              ].map((tx, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-50 last:border-none"
                >
                  <td className="py-4 text-gray-500">{tx.no}</td>
                  <td className="py-4 font-medium">{tx.id}</td>
                  <td className="py-4 text-gray-500">{tx.date}</td>
                  <td className="py-4">
                    <span className="flex items-center gap-2 text-xs font-bold text-brand-black">
                      <span
                        className={`w-2 h-2 rounded-full ${tx.color}`}
                      ></span>{" "}
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-4 font-bold text-right">{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <button className="text-blue-600 border border-blue-200 px-6 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-50 transition-colors">
              Details
            </button>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-brand-black text-lg">Top Products</h3>
            <button className="text-xs text-blue-500 font-medium">
              All product
            </button>
          </div>
          <div className="bg-[#F4F7FE] rounded-full flex items-center px-4 py-2 mb-6">
            <FiSearch className="text-gray-400 mr-2 text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full outline-none text-sm placeholder-gray-400"
            />
          </div>

          <div className="space-y-4 flex-1">
            {[
              {
                name: "Apple iPhone 13",
                code: "Item: #FXZ-4567",
                price: "₱999.00",
              },
              {
                name: "Nike Air Jordan",
                code: "Item: #FXZ-4567",
                price: "₱72.40",
              },
              { name: "T-shirt", code: "Item: #FXZ-4567", price: "₱35.40" },
              {
                name: "Assorted Cross Bag",
                code: "Item: #FXZ-4567",
                price: "₱80.00",
              },
            ].map((prod, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-bold text-brand-black leading-tight">
                      {prod.name}
                    </p>
                    <p className="text-[10px] text-gray-400">{prod.code}</p>
                  </div>
                </div>
                <p className="text-sm font-bold">{prod.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
