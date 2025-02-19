"use server";
import nodemailer from "nodemailer";
import { generateEmailTemplate } from "../constants/email-template";

export async function sendEmail(formData) {
  try {
    const { name, email, message } = formData;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "soham130405@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let mailOptions = {
      to: "abhivriddhi@vit.edu",
      subject: `New Contact Form Submission from ${name}`,
      html: generateEmailTemplate({ name, email, message }),
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: "Failed to send email." };
  }
}
