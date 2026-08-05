"use client";

import { FormEvent } from "react";
import { occasions, whatsappNumber } from "@/lib/site-data";

function titleCaseSlug(value: string) {
  return occasions.find((occasion) => occasion.slug === value)?.name ?? "";
}

export default function BookingForm({
  defaultOccasion = "",
  defaultDecoration = "",
}: {
  defaultOccasion?: string;
  defaultDecoration?: string;
}) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Occasion Hub! I would like to plan an event.",
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Occasion: ${data.get("occasion")}`,
      `Decoration: ${data.get("decoration")}`,
      `Mobile number: ${data.get("mobile")}`,
      `Event date: ${data.get("date") || "To be decided"}`,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Your name</span>
          <input name="name" autoComplete="name" placeholder="Enter your full name" required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
        <label>
          <span>Occasion</span>
          <select name="occasion" defaultValue={titleCaseSlug(defaultOccasion)} required>
            <option value="" disabled>Choose an occasion list</option>
            {occasions.map((occasion) => <option key={occasion.slug}>{occasion.name}</option>)}
          </select>
        </label>
        <label>
          <span>Decoration style</span>
          <select name="decoration" defaultValue={defaultDecoration} required>
            <option value="" disabled>Choose a decoration</option>
            {occasions.map((occasion) => (
              <optgroup key={occasion.slug} label={`${occasion.name} decorations`}>
                {occasion.packages.map((item) => <option key={item.name}>{item.name}</option>)}
              </optgroup>
            ))}
          </select>
        </label>
        <label>
          <span>Mobile number</span>
          <input name="mobile" type="tel" autoComplete="tel" inputMode="tel" placeholder="Your contact number" required />
        </label>
        <label>
          <span>Preferred event date <small>(optional)</small></span>
          <input name="date" type="date" />
        </label>
      </div>
      <label className="checkbox-label">
        <input name="terms" type="checkbox" required />
        <span>I agree to be contacted about this booking enquiry.</span>
      </label>
      <button className="button button-primary submit-button" type="submit">
        Send enquiry on WhatsApp
      </button>
      <p className="form-note">Submitting opens WhatsApp with your enquiry. No details are stored on this website.</p>
    </form>
  );
}
