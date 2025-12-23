import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone_no, project_requirement, message } = body;

    // Basic validation
    if (!name || !email || !phone_no || !project_requirement || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone_no.replace(/[\s\-\(\)]/g, ''))) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // Get database connection
    const connection = await createConnection();

    // Insert data into quote_request table
    const query = `
      INSERT INTO quote_request (
        name, 
        email, 
        phone_no, 
        project_requirement, 
        message, 
        created_at
      ) VALUES (?, ?, ?, ?, ?, NOW())
    `;

    const values = [
      name.trim(),
      email.toLowerCase().trim(),
      phone_no.trim(),
      project_requirement,
      message.trim()
    ];

    const [result] = await connection.execute(query, values);

    console.log('Quote request submitted successfully:', result.insertId);

    return NextResponse.json(
      { 
        message: 'Quote request submitted successfully',
        id: result.insertId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Database error:', error);
    
    return NextResponse.json(
      { error: 'An error occurred while submitting your quote request. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}