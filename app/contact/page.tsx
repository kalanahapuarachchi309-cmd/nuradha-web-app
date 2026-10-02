import type { Metadata } from "next";
import ContactContent from "../../components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Nuradha Engineering",
  description:
    "Contact Nuradha Engineering in Beruwala, Sri Lanka. Inquiries for commercial fishing haulers, winches, hydraulic pumps, motors, seals, and custom marine engineering.",
  keywords:
    "Contact Nuradha Engineering, Beruwala, Sri Lanka, commercial fishing equipment, marine hydraulic inquiries, email, phone, location map",
};

export default function ContactPage() {
  return <ContactContent />;
}
