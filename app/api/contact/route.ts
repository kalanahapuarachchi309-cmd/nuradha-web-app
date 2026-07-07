import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  botcheck: string;
};

function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildPayload(formData: FormData): ContactPayload {
  return {
    name: readField(formData, "form_name"),
    email: readField(formData, "form_email"),
    phone: readField(formData, "form_phone"),
    subject: readField(formData, "form_subject"),
    message: readField(formData, "form_message"),
    botcheck: readField(formData, "form_botcheck"),
  };
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload = buildPayload(formData);

    if (payload.botcheck) {
      return NextResponse.json(
        { message: "Submission rejected." },
        { status: 400 },
      );
    }

    if (
      !payload.name ||
      !payload.email ||
      !payload.phone ||
      !payload.subject ||
      !payload.message
    ) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number(getRequiredEnv("SMTP_PORT"));
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS");
    const mailTo = getRequiredEnv("CONTACT_TO_EMAIL");
    const mailFrom = process.env.SMTP_FROM || smtpUser;
    const secure = (process.env.SMTP_SECURE || "").toLowerCase() === "true";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number.isFinite(smtpPort) ? smtpPort : 587,
      secure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = payload.subject || "New website inquiry";
    const text = [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      "",
      "Message:",
      payload.message,
    ].join("\n");

    const html = [
      `<p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>`,
      `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>`,
      `<p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>`,
      `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>`,
      `<p><strong>Message:</strong><br />${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>`,
    ].join("");

    await transporter.sendMail({
      from: {
        name: "Nuradha Website",
        address: mailFrom,
      },
      to: mailTo,
      replyTo: payload.email,
      subject,
      text,
      html,
    });

    return NextResponse.json(
      {
        message:
          "We have successfully received your message and will get back to you as soon as possible.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      { message: "Email could not be sent right now. Please try again later." },
      { status: 500 },
    );
  }
}
