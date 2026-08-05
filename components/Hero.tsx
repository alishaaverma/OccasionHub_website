import Link from "next/link";

export default function Hero({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "hero hero-compact" : "hero"}>
      <div className="hero-shade" />
      <div className="hero-content page-width">
        <p className="eyebrow">Celebrate beautifully</p>
        <h1>{compact ? "Make every gathering memorable." : "Your moment. Thoughtfully planned."}</h1>
        {!compact && (
          <>
            <p className="hero-copy">
              From the first idea to the final toast, we bring together expressive décor,
              tailored menus, and calm coordination for celebrations that feel like you.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/decurationpage">Explore decorations</Link>
              <Link className="button button-ghost" href="/form">Start planning</Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
