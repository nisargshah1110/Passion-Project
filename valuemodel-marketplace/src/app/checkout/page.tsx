"use client";
import { useState } from "react";
import { formatPrice } from "@/lib/formatters";
import Link from "next/link";

export default function Checkout() {
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const cartItems = [
    { id: "1", title: "Enterprise DCF Model", price: 6500, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Stripe checkout simulation
    alert("Payment integration would redirect to Stripe/Razorpay");
    setIsProcessing(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold">Checkout</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between border-b pb-4">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-xl font-semibold">Customer Information</h2>
            <div className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border px-4 py-2 dark:border-slate-600 dark:bg-slate-700"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border px-4 py-2 dark:border-slate-600 dark:bg-slate-700"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full rounded-lg border px-4 py-2 dark:border-slate-600 dark:bg-slate-700"
              />
            </div>
          </div>

          <div className="mt-6 rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-xl font-semibold">Payment Method</h2>
            <div className="mt-6 space-y-3">
              <label className="flex items-center rounded-lg border p-3 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700">
                <input type="radio" name="payment" defaultChecked className="mr-3" />
                <span className="font-semibold">💳 Stripe (Global)</span>
              </label>
              <label className="flex items-center rounded-lg border p-3 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700">
                <input type="radio" name="payment" className="mr-3" />
                <span className="font-semibold">🔱 Razorpay (India)</span>
              </label>
              <label className="flex items-center rounded-lg border p-3 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700">
                <input type="radio" name="payment" className="mr-3" />
                <span className="font-semibold">🌐 PayPal (Global)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-lg font-semibold">Price Breakdown</h3>
            <div className="mt-6 space-y-3 border-b pb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18% GST)</span>
                <span>{formatPrice(tax)}</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isProcessing || !email}
              className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "Proceed to Payment"}
            </button>

            <Link
              href="/shop"
              className="mt-3 block w-full rounded-lg border py-2 text-center hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              Continue Shopping
            </Link>

            <div className="mt-6 space-y-2 border-t pt-4 text-sm text-slate-600 dark:text-slate-400">
              <p>✓ 30-day refund policy</p>
              <p>✓ Instant download + license</p>
              <p>✓ Member dashboard access</p>
              <p>✓ GDPR compliant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
