"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === "undefined") {
      return false;
    }

    return document.documentElement.classList.contains("dark");
  });

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ValuModel Pro
          </Link>
          <nav className="hidden gap-8 md:flex">
            <Link href="/shop" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              Shop
            </Link>
            <Link href="/#categories" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              Categories
            </Link>
            <Link href="/admin" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              Admin
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="rounded-lg border bg-slate-100 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
            <Link
              href="/checkout"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
