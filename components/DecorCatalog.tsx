import Image from "next/image";
import Link from "next/link";
import type { Occasion } from "@/lib/site-data";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export default function DecorCatalog({ occasion }: { occasion: Occasion }) {
  return (
    <main>
      <section className="page-heading page-width">
        <p className="eyebrow">Decoration collection</p>
        <h1>{occasion.pluralName ?? occasion.name} Celebratory Décor</h1>
        <p>Six distinctive looks, ready to be tailored to your venue, guest list, and story.</p>
      </section>
      <section className="catalog-grid page-width" aria-label={`${occasion.name} decoration packages`}>
        {occasion.packages.map((item, index) => (
          <article className="package-card" key={item.name}>
            <div className="package-image">
              <Image
                src={item.image}
                alt={`${item.name} decoration setup`}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                priority={index < 3}
              />
              <span className="package-number">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="package-body">
              <div>
                <h2>{item.name}</h2>
                <p>Starting at <strong>{currency.format(item.price)}</strong></p>
              </div>
              <div className="package-actions">
                <Link className="text-link" href={`/${occasion.slug}dinner`}>Add dinner</Link>
                <Link className="button button-small" href={`/form?occasion=${occasion.slug}&decoration=${encodeURIComponent(item.name)}`}>Book</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
