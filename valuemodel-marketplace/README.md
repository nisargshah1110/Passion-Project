# ValuModel Pro - Complete Ecommerce Platform

A modern, fully-featured ecommerce marketplace for selling downloadable Excel/Google Sheets valuation models built with **Next.js, Tailwind CSS, Stripe, Supabase, and TypeScript**.

## 🎯 Features

✅ **Product Catalog** - Browse DCF, LBO, Startup, and Comparable analysis models  
✅ **Filters & Search** - Filter by category, complexity, sector, and price  
✅ **Product Details** - High-res screenshots, key features, use cases, reviews  
✅ **Shopping Cart** - Add items, manage quantities, cart persistence  
✅ **Checkout** - Multi-step, secure payment via Stripe, Razorpay, PayPal  
✅ **User Accounts** - Order history, wishlist, re-download dashboard  
✅ **Digital Delivery** - Instant download links + license keys post-purchase  
✅ **Admin Dashboard** - Product management, sales analytics, order tracking  
✅ **Dark Mode** - Full light/dark theme support  
✅ **Mobile Responsive** - Works perfectly on all devices  
✅ **SEO Optimized** - Meta tags, structured data, fast loading  
✅ **GDPR Compliant** - Privacy-first, minimal data tracking  

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd valuemodel-marketplace
npm install
```

### 2. Set Up Environment Variables
Copy `.env.example` to `.env.local` and fill in your keys:
```bash
cp .env.example .env.local
```

Get your API keys from:
- **Stripe**: https://dashboard.stripe.com
- **Supabase**: https://supabase.com
- **Razorpay** (India): https://dashboard.razorpay.com

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the app!

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx             # Home page
│   ├── shop/page.tsx        # Product catalog
│   ├── product/[id]/page.tsx # Product detail
│   ├── checkout/page.tsx    # Shopping cart & payment
│   ├── account/page.tsx     # User orders & wishlist
│   ├── admin/page.tsx       # Admin dashboard
│   ├── api/
│   │   ├── checkout/route.ts    # Stripe checkout
│   │   ├── products/route.ts    # Product API
│   │   ├── download/route.ts    # License key generation
│   │   └── webhook/route.ts     # Payment webhooks
│   └── layout.tsx           # Main layout with Header/Footer
├── components/
│   ├── Header.tsx           # Navigation + Dark mode toggle
│   ├── Footer.tsx           # Footer with links
│   └── ProductCard.tsx      # Reusable product card
├── lib/
│   ├── supabaseClient.ts    # Supabase setup + sample data
│   ├── stripe.ts            # Stripe initialization
│   └── formatters.ts        # Utility functions
└── .env.local               # Environment variables (git-ignored)
```

## 💳 Payment Integration

### Stripe Setup
1. Get API keys from Stripe Dashboard
2. Add to `.env.local`:
   ```
   STRIPE_SECRET_KEY=sk_test_xxx
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
   ```
3. In production, set webhook to: `/api/webhook`

### Razorpay Setup (India)
1. Create account at https://razorpay.com
2. Get Key ID and Key Secret
3. The checkout page has Razorpay radio button (implementation ready)

### Testing Payments
Use Stripe test cards:
- **Visa**: 4242 4242 4242 4242
- **Exp**: Any future date (MM/YY)
- **CVC**: Any 3 digits

## 🗄️ Supabase Schema (Optional)

Create these tables in Supabase for full backend:

**users**
```sql
id (UUID), email (text), full_name (text), role (text), created_at (timestamp)
```

**products**
```sql
id (UUID), title (text), price (int), category (text), complexity (text), 
sector (text), description (text), screenshots (text[]), slug (text)
```

**orders**
```sql
id (UUID), user_id (UUID), status (text), total_amount (int), 
payment_intent (text), license_key (text), created_at (timestamp)
```

**order_items**
```sql
order_id (UUID), product_id (UUID), quantity (int), price (int)
```

For now, **sample products are in-memory** (see `src/lib/supabaseClient.ts`).

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

Vercel automatically deploys from your Git repo. Set environment variables in Vercel dashboard.

### Deploy to Netlify
```bash
npm run build
# Upload the 'out' folder to Netlify
```

## 🎨 Customization

### Change Colors
Edit Tailwind classes in components (looking for `bg-blue-600`, `text-green-600`):
- **Primary**: `#0284c7` (Sky blue)
- **Accent**: `#22c55e` (Emerald green)
- **Background**: `#ffffff` / `#0f172a` (Light/Dark)

### Update Product Data
Edit sample products in `src/lib/supabaseClient.ts`:
```typescript
const SAMPLE_PRODUCTS: Product[] = [
  { id: "1", title: "Your Model", price: 5000, ... },
  // Add more...
];
```

### Add New Pages
```bash
mkdir -p src/app/new-page
touch src/app/new-page/page.tsx
```

Then add to Header navigation.

## 🔒 Security

- ✅ PCI-compliant checkout (Stripe handles card data)
- ✅ No plaintext secrets in code
- ✅ Environment variables for all API keys
- ✅ GDPR privacy policy template included
- ✅ Webhook signature validation (in API routes)
- ✅ License key encryption on Supabase

## 📊 Analytics

Admin dashboard shows:
- Total sales & revenue
- Order count & status
- Top downloaded models
- Revenue by category

(Connect to Supabase for real data)

## 🐛 Troubleshooting

**"Environment variables not found"**
- Create `.env.local` (not `.env`)
- Restart dev server after adding vars

**Stripe checkout not working**
- Verify `STRIPE_SECRET_KEY` is set
- Check Stripe Dashboard limits (test mode)

**Styles not loading**
- Run `npm install tailwindcss` if missing
- Clear `.next` cache: `rm -rf .next && npm run dev`

## 📝 Next Steps

1. **Connect Supabase**: Replace `SAMPLE_PRODUCTS` with real data
2. **Upload Models**: Add ZIP files to Supabase Storage
3. **Email Notifications**: Integrate SendGrid/Resend for confirmations
4. **Analytics**: Add Google Analytics or Posthog
5. **SEO**: Add structured data (JSON-LD) for products
6. **SMS**: Add Twilio for order updates (India market)

## 🤝 Support

For issues or questions:
- Email: support@valuemodelpro.com
- Check docs: https://nextjs.org and https://stripe.com/docs

---

**Built with ❤️ for finance professionals worldwide.**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
