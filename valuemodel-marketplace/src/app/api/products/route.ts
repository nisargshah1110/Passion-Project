import { NextRequest, NextResponse } from "next/server";
import { getErrorMessage } from "@/lib/formatters";
import { SAMPLE_PRODUCTS } from "@/lib/supabaseClient";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const complexity = searchParams.get("complexity");

    let products = SAMPLE_PRODUCTS;

    if (category) {
      products = products.filter((p) => p.category === category);
    }

    if (complexity) {
      products = products.filter((p) => p.complexity === complexity);
    }

    return NextResponse.json(products);
  } catch (error: unknown) {
    return NextResponse.json(
      { error: getErrorMessage(error) },
      { status: 500 }
    );
  }
}
