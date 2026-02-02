import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const externalApiResponse = await fetch('https://api.tgaystechnology.com/api_v1/menus', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!externalApiResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch menu data' },
        { status: externalApiResponse.status }
      );
    }

    const result = await externalApiResponse.json();
    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error('Error in header API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
