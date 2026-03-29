import Stripe from "stripe";

// Temporarily disabled for testing - will be enabled when env variables are set
export const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-11-08",
    })
  : (null as any);
