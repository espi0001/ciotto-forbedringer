import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/Form/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { firstName, lastName, email, subject, message } = body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert([
    {
      first_name: firstName,
      last_name: lastName,
      email,
      subject,
      message,
    },
  ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Send confirmation email using React template
  try {
    const { data, error: emailError } = await resend.emails.send({
      from: "Ari <onboarding@resend.dev>", // or your verified sender
      to: email,
      subject: "Thank you for contacting us!",
      react: EmailTemplate({ firstName, subject, message }),
    });
    if (emailError) {
      console.error("Resend error:", emailError);
    } else {
      console.log("Resend email response:", data);
    }
  } catch (emailError) {
    console.error("Email send error:", emailError);
  }

  return NextResponse.json({ success: true });
}
