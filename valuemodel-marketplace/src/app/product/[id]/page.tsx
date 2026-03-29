"use client";
import Link from "next/link";
import { useState } from "react";
import { SAMPLE_PRODUCTS } from "@/lib/supabaseClient";
import { formatPrice } from "@/lib/formatters";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = SAMPLE_PRODUCTS.find((p) => p.slug === params.id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <p>Product not found</p>
        <Link href="/shop" className="text-blue-600 hover:underline">
          ← Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <Link href="/shop" className="text-blue-600 hover:underline">
        ← Back to shop
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        {/* Images */}
        <div>
          <img
            src={product.screenshots[0]}
            alt={product.title}
            className="rounded-lg"
          />
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={product.screenshots[0]}
                alt="thumbnail"
                className="cursor-pointer rounded-lg opacity-60 hover:opacity-100"
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <span className="text-2xl">⭐ {product.rating}</span>
          </div>

          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
            {product.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-100">
              {product.category}
            </span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700 dark:bg-green-900 dark:text-green-100 capitalize">
              {product.complexity}
            </span>
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700 dark:bg-purple-900 dark:text-purple-100">
              {product.sector}
            </span>
          </div>

          <div className="mt-8 border-t pt-8">
            <h3 className="font-semibold">Key Features</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="mr-2">✓</span> {product.description}
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Excel + Google Sheets (.xlsx + .gsheet)
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Instant download + license key
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Member dashboard re-download access
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Formula annotations & documentation
              </li>
            </ul>
          </div>

          <div className="mt-8 border-t pt-8">
            <h3 className="font-semibold">Use Cases</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Perfect for investment banking, private equity, corporate development, financial analysis, MBA case studies, and investor due diligence.
            </p>
          </div>

          <div className="mt-12 border-t pt-8">
            <div className="flex items-center gap-4">
              <input
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-16 rounded-lg border px-3 py-2"
              />
              <button className="flex-1 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">
                Add to Cart – {formatPrice(product.price * quantity)}
              </button>
            </div>
            <button className="mt-3 w-full rounded-lg border py-3 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">
              ♡ Add to Wishlist
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            30-day refund policy on unresolved file issues.
          </p>
        </div>
      </div>

      <section className="mt-16 border-t pt-12">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <div className="mt-6 space-y-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
              <p className="mt-2 font-semibold">Excellent model structure</p>
              <p className="mt-1 text-slate-600 dark:text-slate-400">
                Clean formulas, easy to understand. Perfect for learning and professional use.
              </p>
              <p className="mt-3 text-sm text-slate-500">— Finance Analyst, India</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
