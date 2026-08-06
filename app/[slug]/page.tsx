import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingForm from "@/components/BookingForm";
import DecorCatalog from "@/components/DecorCatalog";
import DinnerForm from "@/components/DinnerForm";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import { occasionBySlug, occasions, searchableRoutes } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export function generateStaticParams() {
  return [
    "decurationpage",
    "dinnerpage",
    "form",
    "search",
    ...occasions.flatMap((occasion) => [occasion.slug, `${occasion.slug}dinner`]),
  ].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "decurationpage") return { title: "Decorations" };
  if (slug === "dinnerpage") return { title: "Dinner Plans" };
  if (slug === "form") return { title: "Book Your Event" };
  if (slug === "search") return { title: "Search" };
  const isDinner = slug.endsWith("dinner");
  const occasion = occasionBySlug[isDinner ? slug.slice(0, -6) : slug];
  return occasion ? { title: `${occasion.name}${isDinner ? " Dinner Menu" : " Decorations"}` } : {};
}

export default async function RoutedPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const query = await searchParams;

  if (slug === "decurationpage" || slug === "dinnerpage") {
    const dinner = slug === "dinnerpage";
    return (
      <main>
        <Hero compact />
        <section className="listing-section page-width">
          <div className="page-heading listing-heading">
            <p className="eyebrow">{dinner ? "Menus made personal" : "Designed for your story"}</p>
            <h1>{dinner ? "Our Dinner Service" : "Our Decoration Services"}</h1>
            <p>{dinner ? "Choose your occasion, then build a menu around the people at your table." : "Start with an occasion and discover decoration styles created to make it unforgettable."}</p>
          </div>
          <ServiceGrid occasions={occasions} dinner={dinner} />
        </section>
      </main>
    );
  }

  if (slug === "form") {
    return (
      <main className="form-page">
        <section className="page-heading page-width">
          <p className="eyebrow">Let us create something memorable</p>
          <h1>Your Booking Enquiry</h1>
          <p>Share a few details and we will continue the conversation with you on WhatsApp.</p>
        </section>
        <div className="form-card page-width">
          <BookingForm
            defaultOccasion={typeof query.occasion === "string" ? query.occasion : ""}
            defaultDecoration={typeof query.decoration === "string" ? query.decoration : ""}
          />
        </div>
      </main>
    );
  }

  if (slug === "search") {
    const term = typeof query.q === "string" ? query.q.trim().toLowerCase().replace(/\s+/g, " ") : "";
    const destination = searchableRoutes[term];
    return (
      <main className="message-page page-width">
        <p className="eyebrow">Search</p>
        <h1>{destination ? "We found your page." : "No matching page yet."}</h1>
        <p>{destination ? `“${term}” matches one of our services.` : `We could not find a page matching “${term || "your search"}”. Try birthday, wedding, anniversary, engagement, dinner, or decoration.`}</p>
        <Link className="button button-primary" href={destination ?? "/decurationpage"}>{destination ? "Open result" : "Browse services"}</Link>
      </main>
    );
  }

  const isDinner = slug.endsWith("dinner");
  const occasion = occasionBySlug[isDinner ? slug.slice(0, -6) : slug];
  if (!occasion) notFound();

  if (!isDinner) return <DecorCatalog occasion={occasion} />;

  return (
    <main className="form-page">
      <section className="page-heading page-width">
        <p className="eyebrow">Build your menu</p>
        <h1>{occasion.name} Dinner Menu</h1>
        <p>Choose each dish, snack, and sweet. Send the completed menu to our team when it feels just right.</p>
      </section>
      <div className="form-card dinner-card page-width"><DinnerForm occasion={occasion} /></div>
    </main>
  );
}
