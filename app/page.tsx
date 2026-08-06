import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import { occasions } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="intro-section page-width">
        <div>
          <p className="eyebrow">Everything in one place</p>
          <h2>We plan. You celebrate.</h2>
        </div>
        <p>
          Whether it is an intimate dinner or the celebration of a lifetime, we shape every
          detail around your style and budget—so the experience feels effortless from start to finish.
        </p>
      </section>

      <section className="home-services page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Find your occasion</p>
            <h2>Celebrations of every kind</h2>
          </div>
          <Link className="text-link" href="/decurationpage">View all decorations →</Link>
        </div>
        <ServiceGrid occasions={occasions.slice(0, 3)} />
      </section>

      <section className="feature-band">
        <div className="feature-image">
          <Image src="/images/img1.jpg" alt="A beautifully decorated event venue" fill sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">How it works</p>
          <h2>From a first thought to the final toast.</h2>
          <ol>
            <li><span>01</span><div><strong>Share your vision</strong><p>Tell us the occasion, date, budget, and the feeling you want to create.</p></div></li>
            <li><span>02</span><div><strong>Shape the details</strong><p>Select your décor and build a dinner menu that suits your guests.</p></div></li>
            <li><span>03</span><div><strong>Enjoy your day</strong><p>We coordinate the moving parts while you stay present for every moment.</p></div></li>
          </ol>
          <Link className="button button-primary" href="/form">Tell us about your event</Link>
        </div>
      </section>

      <section className="testimonial page-width">
        <p className="eyebrow">Kind words</p>
        <blockquote>“Occasion Hub made our wedding day truly magical. Every detail was perfect, and we did not have to worry about a thing.”</blockquote>
        <p>— Sarah &amp; Jake</p>
      </section>
    </main>
  );
}
