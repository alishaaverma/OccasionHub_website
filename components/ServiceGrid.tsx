import Image from "next/image";
import Link from "next/link";
import type { Occasion } from "@/lib/site-data";

export default function ServiceGrid({
  occasions,
  dinner = false,
}: {
  occasions: Occasion[];
  dinner?: boolean;
}) {
  return (
    <div className="service-grid">
      {occasions.map((occasion, index) => (
        <article className="service-card" key={occasion.slug}>
          <div className="service-image">
            <Image
              src={dinner ? occasion.dinnerImage : occasion.coverImage}
              alt={`${occasion.name} ${dinner ? "dinner" : "decoration"}`}
              fill
              sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
              priority={index < 2}
            />
          </div>
          <div className="service-card-body">
            <p className="card-kicker">{dinner ? "Custom menu" : "Curated décor"}</p>
            <h2>{occasion.name}{dinner ? " Dinner" : ""}</h2>
            <p>{dinner ? "Build a menu that suits your guests and your celebration." : "Choose a look, then make it personal with our planning team."}</p>
            <Link href={`/${occasion.slug}${dinner ? "dinner" : ""}`}>
              View {dinner ? "menu" : "collection"} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
