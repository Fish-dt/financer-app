"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  CreditCard,
  Settings,
  Users,
  Bell,
  Search,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
} from "lucide-react"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-50 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center">
              <span className="text-white font-semibold text-lg">F</span>
            </div>
            {sidebarOpen && <span className="text-gray-900 font-semibold text-xl">Financer</span>}
          </div>

          <nav className="space-y-2">
            {[
              { icon: LayoutDashboard, label: "Dashboard", active: true },
              { icon: TrendingUp, label: "Analytics", active: false },
              { icon: Wallet, label: "Wallets", active: false },
              { icon: CreditCard, label: "Transactions", active: false },
              { icon: Users, label: "Customers", active: false },
              { icon: Settings, label: "Settings", active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  item.active
                    ? "bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white shadow-lg shadow-green-500/30"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search transactions, customers..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-50 rounded-xl transition-colors">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">John Doe</div>
                  <div className="text-xs text-gray-500">Admin</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center">
                  <span className="text-white font-medium">JD</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Total Balance",
                value: "$45,678.90",
                change: "+12.5%",
                positive: true,
                icon: Wallet,
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Total Income",
                value: "$23,456.00",
                change: "+8.2%",
                positive: true,
                icon: TrendingUp,
                color: "from-green-500 to-green-600",
              },
              {
                title: "Total Expenses",
                value: "$12,345.00",
                change: "-3.1%",
                positive: false,
                icon: CreditCard,
                color: "from-orange-500 to-orange-600",
              },
              {
                title: "Active Users",
                value: "1,234",
                change: "+15.3%",
                positive: true,
                icon: Users,
                color: "from-purple-500 to-purple-600",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  {stat.positive ? (
                    <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                      <ArrowUpRight className="w-4 h-4" />
                      {stat.change}
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-red-600 text-sm font-medium">
                      <ArrowDownRight className="w-4 h-4" />
                      {stat.change}
                    </div>
                  )}
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.title}</div>
              </div>
            ))}
          </div>

          {/* Charts and Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Revenue Overview</h2>
                <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="h-64 flex items-end justify-between gap-2">
                {[65, 45, 75, 55, 85, 60, 90, 70, 80, 65, 75, 85].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-[#22c55e] to-[#4ade80] rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-xs text-gray-400">{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                {[
                  { label: "Send Money", icon: ArrowUpRight, color: "bg-blue-50 text-blue-600" },
                  { label: "Request Payment", icon: ArrowDownRight, color: "bg-green-50 text-green-600" },
                  { label: "Add Card", icon: CreditCard, color: "bg-purple-50 text-purple-600" },
                  { label: "View Reports", icon: TrendingUp, color: "bg-orange-50 text-orange-600" },
                ].map((action, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <action.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-900">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
              <button className="text-sm text-green-600 font-medium hover:text-green-700">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Transaction</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Amount</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Apple Store",
                      date: "Today, 2:30 PM",
                      status: "Completed",
                      amount: "-$234.00",
                      positive: false,
                    },
                    {
                      name: "Salary Deposit",
                      date: "Yesterday, 9:00 AM",
                      status: "Completed",
                      amount: "+$5,000.00",
                      positive: true,
                    },
                    {
                      name: "Netflix Subscription",
                      date: "Dec 15, 2024",
                      status: "Pending",
                      amount: "-$15.99",
                      positive: false,
                    },
                    {
                      name: "Freelance Payment",
                      date: "Dec 14, 2024",
                      status: "Completed",
                      amount: "+$1,250.00",
                      positive: true,
                    },
                    {
                      name: "Amazon Purchase",
                      date: "Dec 13, 2024",
                      status: "Completed",
                      amount: "-$89.99",
                      positive: false,
                    },
                  ].map((transaction, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-600 font-medium text-sm">{transaction.name[0]}</span>
                          </div>
                          <span className="font-medium text-gray-900">{transaction.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-500">{transaction.date}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            transaction.status === "Completed"
                              ? "bg-green-50 text-green-600"
                              : "bg-yellow-50 text-yellow-600"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td
                        className={`py-4 px-4 text-right font-semibold ${transaction.positive ? "text-green-600" : "text-gray-900"}`}
                      >
                        {transaction.amount}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
