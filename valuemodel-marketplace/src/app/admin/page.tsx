export default function AdminDashboard() {
  const stats = [
    { label: "Total Sales", value: "₹45,230", change: "+12% from last week" },
    { label: "Orders", value: "24", change: "+5 new this week" },
    { label: "Products", value: "28", change: "Active models" },
    { label: "Revenue", value: "₹1,45,000", change: "This month" },
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "Raj Kumar", amount: 6500, status: "Completed" },
    { id: "ORD-002", customer: "Priya Singh", amount: 3200, status: "Pending" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Manage products, view analytics, and handle orders
      </p>

      {/* Stats Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {stat.label}
            </p>
            <p className="mt-2 text-3xl font-bold">{stat.value}</p>
            <p className="mt-1 text-xs text-slate-500">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-3">
        <button className="rounded-lg bg-blue-600 px-6 py-2 text-white font-semibold hover:bg-blue-700">
          ➕ Add New Product
        </button>
        <button className="rounded-lg border px-6 py-2 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">
          📊 View Analytics
        </button>
        <button className="rounded-lg border px-6 py-2 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">
          📤 Bulk Upload
        </button>
      </div>

      {/* Recent Orders */}
      <div className="mt-8 rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
        <h2 className="text-xl font-semibold">Recent Orders</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Order ID</th>
                <th className="pb-2">Customer</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-3">{order.id}</td>
                  <td className="py-3">{order.customer}</td>
                  <td className="py-3 font-semibold">₹{order.amount.toLocaleString()}</td>
                  <td className="py-3">
                    <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-100"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div className="mt-8 rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
        <h2 className="text-xl font-semibold">Top Downloads</h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span>Enterprise DCF Model</span>
            <div className="flex items-center gap-4">
              <div className="h-2 w-48 rounded-full bg-blue-200">
                <div className="h-2 w-48 rounded-full bg-blue-600" style={{ width: "85%" }}></div>
              </div>
              <span className="text-sm font-semibold">18 downloads</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Startup Valuation Toolkit</span>
            <div className="flex items-center gap-4">
              <div className="h-2 w-48 rounded-full bg-blue-200">
                <div className="h-2 w-48 rounded-full bg-blue-600" style={{ width: "65%" }}></div>
              </div>
              <span className="text-sm font-semibold">12 downloads</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
