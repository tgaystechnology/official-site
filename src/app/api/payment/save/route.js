import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.payment_id || !body.order_id) {
      return NextResponse.json(
        { error: 'Missing payment details' },
        { status: 400 }
      );
    }

    const externalApiResponse = await fetch('https://api.tgaystechnology.com/api_v1/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body),
    });

    const result = await externalApiResponse.json();

    if (!externalApiResponse.ok) {
      return NextResponse.json(
        { error: result.error || 'Failed to save payment' },
        { status: externalApiResponse.status }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Error in payment/save API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
