// app/api/contact/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    
    // Simple validation
    const { firstName, lastName, subject, message } = data;
    if (!firstName || !lastName || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    console.log("Contact Form Submission:", data);

    // Here, you could integrate email service, database, etc.

    return NextResponse.json({ message: "Message received!" });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
