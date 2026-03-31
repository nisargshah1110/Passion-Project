import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { SAMPLE_PRODUCTS } from "@/lib/supabaseClient";

export default function Home() {
  const featuredProducts = SAMPLE_PRODUCTS.slice(0, 4);

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
              Finance Models (Excel + Sheets)
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Premium downloadable valuation templates for analysts & investors
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              DCF, Startup Valuation, LBO, Comparable Company Analysis — built with clean logic, sensitivity, chart dashboards. Instant download after payment via Stripe, PayPal, or Razorpay.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Shop Models
              </Link>
              <Link
                href="#features"
                className="rounded-md border border-slate-300 px-6 py-3 text-slate-700 dark:border-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
            <p className="text-sm font-semibold opacity-90">Featured model</p>
            <h2 className="mt-3 text-3xl font-bold">Enterprise DCF + scenario engine</h2>
            <p className="mt-4 opacity-90">
              Real-world forecast inputs, EBITDA bridge, FCF statement, terminal value, IRR, sensitivity spider, dashboard.
            </p>
            <div className="mt-6 space-y-2">
              <div className="rounded-md bg-white/10 px-3 py-2 text-sm">✓ Excel + Google Sheets</div>
              <div className="rounded-md bg-white/10 px-3 py-2 text-sm">✓ Instant download link</div>
              <div className="rounded-md bg-white/10 px-3 py-2 text-sm">✓ License key included</div>
              <div className="rounded-md bg-white/10 px-3 py-2 text-sm">✓ Lifetime member access</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="text-3xl font-bold">Featured Models</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="text-3xl font-bold">Why Choose ValuModel Pro?</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <div className="text-4xl">⚡</div>
            <h3 className="mt-3 font-semibold">Instant Access</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Download your models immediately after payment. No delays, no manual verification.
            </p>
          </div>
          <div className="rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <div className="text-4xl">🔒</div>
            <h3 className="mt-3 font-semibold">Secure & GDPR Compliant</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              PCI-compliant checkout with encrypted data storage. No customer data tracking beyond orders.
            </p>
          </div>
          <div className="rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <div className="text-4xl">🌍</div>
            <h3 className="mt-3 font-semibold">Global Payments</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Stripe, PayPal, and Razorpay support. INR pricing for India. Used by finance pros worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            <p className="mt-3 italic">
              &ldquo;The DCF model saved me hours. Clean formulas, easy to customize. Highly recommend for investment banking.&rdquo;
            </p>
            <p className="mt-3 font-semibold">— Raj Patel, Goldman Sachs</p>
          </div>
          <div className="rounded-lg border bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            <p className="mt-3 italic">
              &ldquo;Perfect for startup valuations. TAM analysis and dilution tracking are spot-on. Worth every rupee!&rdquo;
            </p>
            <p className="mt-3 font-semibold">— Priya Singh, AngelList Syndicate</p>
          </div>
        </div>
      </section>
    </div>
  );
}
