import Link from "next/link";
import { Product } from "@/lib/supabaseClient";
import { formatPrice } from "@/lib/formatters";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <Link href={`/product/${product.slug}`}>
        <div className="overflow-hidden bg-slate-200">
          <img
            className="h-48 w-full object-cover transition-transform hover:scale-105"
            src={product.screenshots[0]}
            alt={product.title}
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold text-blue-600">
            {product.category}
          </span>
          <span className="text-yellow-500">⭐ {product.rating.toFixed(1)}</span>
        </div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-semibold text-slate-900 hover:text-blue-600 dark:text-white">
            {product.title}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {product.tagline}
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Complexity: <span className="font-semibold">{product.complexity}</span>
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            {formatPrice(product.price)}
          </span>
          <Link
            href={`/product/${product.slug}`}
            className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
