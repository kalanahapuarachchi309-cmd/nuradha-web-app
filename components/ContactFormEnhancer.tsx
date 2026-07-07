"use client";

import { useEffect } from "react";

export default function ContactFormEnhancer() {
  useEffect(() => {
    const contactForm = document.getElementById("contact-form") as HTMLFormElement | null;
    const contactFormStatus = document.getElementById("contact-form-status");

    if (!contactForm) {
      return;
    }

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      const endpoint = contactForm.dataset.endpoint || "/api/contact";

      if (contactFormStatus) {
        contactFormStatus.style.display = "block";
        contactFormStatus.textContent = "Sending your message...";
      }

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: new FormData(contactForm),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Unable to send your message.");
        }

        contactForm.reset();

        if (contactFormStatus) {
          contactFormStatus.style.display = "block";
          contactFormStatus.textContent = result.message || "Message sent successfully.";
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to send your message right now.";

        if (contactFormStatus) {
          contactFormStatus.style.display = "block";
          contactFormStatus.textContent = message;
        }
      }
    };

    contactForm.addEventListener("submit", handleSubmit as EventListener);

    return () => {
      contactForm.removeEventListener("submit", handleSubmit as EventListener);
    };
  }, []);

  return null;
}
