import { NextRequest, NextResponse } from "next/server";
import { getErrorMessage } from "@/lib/formatters";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, event_data } = body;

    // Webhook signature verification (implement Stripe webhook signature check)
    // For now, we'll accept all webhooks

    if (type === "checkout.session.completed") {
      // Handle order completion:
      // 1. Create order in Supabase
      // 2. Generate license key
      // 3. Send confirmation email
      // 4. Create download links

      console.log("Order completed:", event_data);
    }

    return NextResponse.json({ received: true });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: getErrorMessage(error) },
      { status: 500 }
    );
  }
}
