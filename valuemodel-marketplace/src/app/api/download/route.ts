import { NextRequest, NextResponse } from "next/server";
import { generateLicenseKey } from "@/lib/formatters";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, productId } = body;

    if (!orderId || !productId) {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    // In production, this would:
    // 1. Verify the order belongs to the user
    // 2. Generate a signed download URL from Supabase Storage
    // 3. Create a license key if doesn't exist
    // 4. Log the download

    const licenseKey = generateLicenseKey();
    const downloadUrl = `/downloads/sample-model-${productId}.zip`;

    return NextResponse.json({
      licenseKey,
      downloadUrl,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
