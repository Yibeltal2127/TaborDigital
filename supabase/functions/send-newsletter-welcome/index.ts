// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const RESEND_API_URL = 'https://api.resend.com/emails';

const fromEmail = 'noreply@tabordigital.com'; // Use your verified Resend domain email
const subject = 'Welcome to the Tabor Engineering & Digital Solutions Newsletter!';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

serve(async (req) => {
  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  try {
    const { record } = await req.json();

    if (!record || !record.email) {
      return new Response(JSON.stringify({ error: 'Missing subscriber email' }), {
        status: 400,
        headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      });
    }

    const { name, email } = record;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #2C3E50;">Welcome${name ? ' ' + name : ''}!</h1>
        <p>Thank you for subscribing to the Tabor Engineering & Digital Solutions newsletter.</p>
        <p>You'll now receive updates, tips, and exclusive content straight to your inbox.</p>
        <p>If you have any questions or want to learn more about our services, feel free to <a href="https://www.tabordigital.com/contact">contact us</a> anytime.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>The Tabor Engineering & Digital Solutions Team</strong></p>
        <hr>
        <p style="font-size: 0.8em; color: #777;">
          <a href="https://www.tabordigital.com">Website</a> | 
          <a href="https://www.tabordigital.com/portfolio">Portfolio</a> | 
          <a href="https://www.tabordigital.com/contact">Contact</a>
        </p>
      </div>
    `;

    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: email,
        subject: subject,
        html: html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: errorText }), {
        status: 500,
        headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: `Welcome email sent to ${email}` }), {
      status: 200,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(String(err?.message ?? err), {
      status: 500,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
    });
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/send-newsletter-welcome' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
