import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { items, userEmail } = body;

    if (!items?.length || !userEmail) {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    // Mock line items for checkout
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "inr",
        unit_amount: Math.round(item.price * 100),
        product_data: {
          name: item.title,
          description: item.description,
        },
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      customer_email: userEmail,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout`,
      automatic_tax: { enabled: true },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
