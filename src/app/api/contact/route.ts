import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      host: "mail.iscode.eu",
      port: 587, // or 465 for SSL
      secure: false, // true for 465, false for other ports
      auth: {
        user: "crash@iscode.eu",
        pass: "crash220873",
      },
      tls: {
        rejectUnauthorized: false, // Accept self-signed certificates if needed
      },
    })

    // Email content
    const mailOptions = {
      from: "crash@iscode.eu",
      to: "crash@iscode.eu", // Your email where you want to receive messages
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #2563eb, #0891b2); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px; padding: 15px; background-color: #eff6ff; border-left: 4px solid #2563eb; border-radius: 4px;">
              <h3 style="color: #1e40af; margin: 0 0 10px 0;">Contact Information</h3>
              <p style="margin: 5px 0; color: #374151;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #0891b2; border-radius: 4px;">
              <h3 style="color: #0c4a6e; margin: 0 0 15px 0;">Message</h3>
              <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">
                <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This message was sent from your portfolio contact form<br>
                <span style="color: #9ca3af;">Timestamp: ${new Date().toLocaleString()}</span>
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
