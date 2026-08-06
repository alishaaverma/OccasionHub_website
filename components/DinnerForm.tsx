"use client";

import { FormEvent } from "react";
import type { Occasion } from "@/lib/site-data";
import { whatsappNumber } from "@/lib/site-data";

function Fields({ prefix, label, count }: { prefix: string; label: string; count: number }) {
  return (
    <div className="menu-section">
      <div className="menu-section-heading">
        <span>{prefix === "main" ? "01" : prefix === "snack" ? "02" : "03"}</span>
        <div>
          <h2>{label}</h2>
          <p>Choose {count} {label.toLowerCase()} for your menu.</p>
        </div>
      </div>
      <div className="menu-fields">
        {Array.from({ length: count }, (_, index) => (
          <label key={`${prefix}-${index}`}>
            <span>{label.replace(/s$/, "")} {index + 1}</span>
            <input name={`${prefix}-${index + 1}`} placeholder={`Enter ${label.toLowerCase().replace(/s$/, "")} choice`} required />
          </label>
        ))}
      </div>
    </div>
  );
}

export default function DinnerForm({ occasion }: { occasion: Occasion }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const entries = Array.from(data.entries());
    const selections = entries.map(([key, value]) => {
      const label = key.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
      return `${label}: ${value}`;
    });
    const message = [
      `Hello Occasion Hub! Here is my ${occasion.name} dinner menu.`,
      "",
      ...selections,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="dinner-form" onSubmit={handleSubmit}>
      <label className="included-field">
        <span>Included with every menu</span>
        <input name="included" defaultValue="Salad, Raita, Sweet Chutney" required />
      </label>
      <Fields prefix="main" label="Main dishes" count={occasion.menu.mains} />
      <Fields prefix="snack" label="Snacks" count={occasion.menu.snacks} />
      <Fields prefix="sweet" label="Sweets" count={occasion.menu.sweets} />
      <button className="button button-primary submit-button" type="submit">Send menu on WhatsApp</button>
      <p className="form-note">Your selections are sent as a WhatsApp enquiry and are not stored on this website.</p>
    </form>
  );
}
