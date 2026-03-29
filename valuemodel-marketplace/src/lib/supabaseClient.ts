import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  complexity: "beginner" | "intermediate" | "advanced";
  sector: string;
  description: string;
  tagline: string;
  screenshots: string[];
  rating: number;
  slug: string;
  stock: number;
}

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Enterprise DCF Model (Excel + Sheets)",
    price: 6500,
    category: "DCF",
    complexity: "advanced",
    sector: "Tech",
    description: "Real-world cash flow bridge, NPV, IRR, debt schedule, scenario matrix",
    tagline: "Complete valuation with sensitivity analysis",
    screenshots: [
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.8,
    slug: "enterprise-dcf",
    stock: 9999,
  },
  {
    id: "2",
    title: "Startup Valuation Toolkit",
    price: 3200,
    category: "Startup",
    complexity: "beginner",
    sector: "General",
    description: "SaaS revenue run-rate, TAM/SAM/SOM, cap table dilution, exit multiples",
    tagline: "Quick startup valuation framework",
    screenshots: [
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.6,
    slug: "startup-valuation",
    stock: 9999,
  },
  {
    id: "3",
    title: "LBO + Debt Paydown Engine",
    price: 7800,
    category: "M&A",
    complexity: "advanced",
    sector: "Banking",
    description: "Leveraged returns, IRR bridge, vendor note, multiple exit paths",
    tagline: "PE-grade LBO analysis template",
    screenshots: [
      "https://images.unsplash.com/photo-1592117681247-1db055ef0746?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.9,
    slug: "lbo-engine",
    stock: 9999,
  },
  {
    id: "4",
    title: "Comparable Company Analysis",
    price: 4000,
    category: "Comparable",
    complexity: "intermediate",
    sector: "General",
    description: "Market comps, trading multiples, peer ranking charts, CAPM implied valuation",
    tagline: "Trading & transaction comps framework",
    screenshots: [
      "https://images.unsplash.com/photo-1506719040632-297ce4f60fdd?auto=format&fit=crop&w=1200&q=80",
    ],
    rating: 4.7,
    slug: "comparable-analysis",
    stock: 9999,
  },
];
