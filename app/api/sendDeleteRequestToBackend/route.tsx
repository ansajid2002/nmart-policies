import { AdminUrl } from '@/app/layout';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { customerId, reason } = await req.json();

//   const adminUrl = process.env.ADMIN_URL;

  const response = await fetch(`${AdminUrl}/api/sendDeleteRequestToBackend`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ customerId, reason }),
  });

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data, { status: 200 });
  } else {
    return NextResponse.json({ error: data }, { status: response.status });
  }
}

