import Link from "next/link";
import { formatDate, formatPrice } from "@/lib/formatters";

export default function Account() {
  const orders = [
    {
      id: "ORD-001",
      date: new Date("2026-03-20"),
      total: 6500,
      status: "Downloaded",
      items: ["Enterprise DCF Model"],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold">My Account</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="font-semibold">Account Menu</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold">Order History</h2>
          <div className="mt-6 space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{order.id}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {formatDate(order.date)}
                    </p>
                    <p className="mt-2 text-sm">
                      {order.items.map((item, i) => (
                        <span key={i}>
                          {item}
                          {i < order.items.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{formatPrice(order.total)}</p>
                    <p className="text-sm text-green-600 font-semibold">{order.status}</p>
                    <button className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
                      ⬇️ Download Again
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
