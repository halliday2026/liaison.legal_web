import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from 'https://esm.sh/resend@3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return json({ success: false, error: 'Method not allowed' }, 405);
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return json({ success: false, error: 'Invalid JSON' }, 400);
  }

  const { firstName, lastName, email, firmName, phone, message } = body;

  // Validate required fields
  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !firmName?.trim()) {
    return json({ success: false, error: 'Missing required fields' }, 400);
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ success: false, error: 'Invalid email address' }, 400);
  }

  // Insert into database
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  const { error: dbError } = await supabase.from('demo_requests').insert({
    first_name:  firstName.trim(),
    last_name:   lastName.trim(),
    email:       email.trim().toLowerCase(),
    firm_name:   firmName.trim(),
    phone:       phone?.trim() || null,
    message:     message?.trim() || null,
  });

  if (dbError) {
    console.error('DB insert error:', dbError);
    return json({ success: false, error: 'Failed to save request' }, 500);
  }

  // Send notification email
  const resendKey = Deno.env.get('RESEND_API_KEY');
  const toEmail   = Deno.env.get('DEMO_REQUEST_EMAIL');

  if (resendKey && toEmail) {
    const resend = new Resend(resendKey);
    const { error: emailError } = await resend.emails.send({
      from:    'Liaison.legal <noreply@liaison.legal>',
      to:      toEmail,
      subject: `New Demo Request — ${firmName.trim()}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Firm:</strong> ${firmName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message || 'None'}</p>
      `,
    });
    if (emailError) {
      // Non-fatal — submission is already saved to DB
      console.error('Resend error:', emailError);
    }
  }

  return json({ success: true }, 200);
});

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}
