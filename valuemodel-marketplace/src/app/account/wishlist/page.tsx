import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { SAMPLE_PRODUCTS } from "@/lib/supabaseClient";

export default function Wishlist() {
  const wishlistItems = SAMPLE_PRODUCTS.slice(0, 2);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold">My Wishlist</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        {wishlistItems.length} items saved
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {wishlistItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {wishlistItems.length === 0 && (
        <div className="mt-8 rounded-lg border bg-slate-50 p-12 text-center dark:border-slate-700 dark:bg-slate-800">
          <p className="text-slate-600 dark:text-slate-400">No items in wishlist</p>
          <Link
            href="/shop"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}
