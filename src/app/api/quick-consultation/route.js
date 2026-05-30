import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.phone_no || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const externalApiResponse = await fetch('https://admin.tgaystechnology.com/api/api_v1/service-enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const responseText = await externalApiResponse.text();
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error('External API returned non-JSON response:', responseText);
      return NextResponse.json(
        { error: 'External API returned an invalid response.' },
        { status: externalApiResponse.status || 500 }
      );
    }

    if (!externalApiResponse.ok) {
      console.error('External API failed with status:', externalApiResponse.status, 'Response:', result);
      return NextResponse.json(
        { 
          error: result?.error || result?.message || 'Failed to submit enquiry',
          details: result 
        },
        { status: externalApiResponse.status }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Error in quick-consultation API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
