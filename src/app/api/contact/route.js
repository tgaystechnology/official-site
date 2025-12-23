import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

// Function to get client IP address
function getClientIP(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIp) {
    return realIp;
  }
  return '127.0.0.1';
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, project_type, industry, project_duration, website } = body;

    // Basic validation
    if (!name || !email || !phone || !message || !project_type || !industry || !project_duration) {
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
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // Get database connection
    const connection = await createConnection();

    // Get client IP address
    const ip_address = getClientIP(request);

    // Insert data into database
    const query = `
      INSERT INTO contact_us (
        name, 
        email, 
        phone, 
        subject, 
        message, 
        project_type, 
        industry, 
        project_duration, 
        website, 
        ip_address, 
        created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;

    const values = [
      name.trim(),
      email.toLowerCase().trim(),
      phone.trim(),
      subject?.trim() || '',
      message.trim(),
      project_type,
      industry,
      project_duration,
      website?.trim() || '',
      ip_address
    ];

    const [result] = await connection.execute(query, values);

    console.log('Contact form submitted successfully:', result.insertId);

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: result.insertId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Database error:', error);
    
    return NextResponse.json(
      { error: 'An error occurred while submitting your form. Please try again later.' },
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