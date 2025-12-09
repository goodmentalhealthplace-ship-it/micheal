import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    // Data Extraction
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const token = formData.get("g-recaptcha-response") as string;

    // Check if token exists
    if (!token || token === "") {
      return NextResponse.json(
        { success: false, message: "Please complete the reCAPTCHA verification." },
        { status: 400 }
      );
    }

    const secretKey = "6LcrlyUsAAAAAMyIIKh_nwTCwOLzvSCeKwudiY2l";

    // Format parameters for Google
    const params = new URLSearchParams();
    params.append("secret", secretKey);
    params.append("response", token);

    const captchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA verification failed. Try again." },
        { status: 400 }
      );
    }

    // SUCCESS LOGIC: Here you would integrate your email provider (SendGrid/Resend)
    console.log("📨 FORM VERIFIED & READY TO SEND:", { name, email, message });

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ SERVER ERROR:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}