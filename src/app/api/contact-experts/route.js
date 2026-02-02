import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const externalApiResponse = await fetch('https://api.tgaystechnology.com/api_v1/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await externalApiResponse.json();

    if (!externalApiResponse.ok) {
      return NextResponse.json(
        { error: result.error || 'Failed to submit enquiry' },
        { status: externalApiResponse.status }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Error in contact-experts API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
