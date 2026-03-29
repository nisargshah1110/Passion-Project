import ProductCard from "@/components/ProductCard";
import { SAMPLE_PRODUCTS } from "@/lib/supabaseClient";

export default function Shop() {
  const categories = ["DCF", "Startup", "M&A", "Comparable"];
  const complexities = ["beginner", "intermediate", "advanced"];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h1 className="text-4xl font-bold">Shop Valuation Models</h1>
      <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
        Filter and download premium Excel & Google Sheets templates
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-4">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6 rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <div>
              <h3 className="font-semibold">Categories</h3>
              <div className="mt-3 space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Complexity</h3>
              <div className="mt-3 space-y-2">
                {complexities.map((comp) => (
                  <label key={comp} className="flex items-center capitalize">
                    <input type="checkbox" className="mr-2" />
                    <span>{comp}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Price Range</h3>
              <input
                type="range"
                min="1000"
                max="10000"
                className="mt-3 w-full"
              />
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                ₹1000 - ₹10000
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
