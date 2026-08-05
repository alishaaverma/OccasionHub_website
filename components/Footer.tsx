import Link from "next/link";
import { occasions } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid page-width">
        <div className="footer-intro">
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">OH</span>
            <span>Occasion Hub</span>
          </Link>
          <p>Thoughtful celebrations, styled around your story.</p>
        </div>
        <div>
          <h2>Decorations</h2>
          <div className="footer-links">
            {occasions.map((occasion) => (
              <Link key={occasion.slug} href={`/${occasion.slug}`}>{occasion.name}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2>Dinner plans</h2>
          <div className="footer-links">
            {occasions.map((occasion) => (
              <Link key={occasion.slug} href={`/${occasion.slug}dinner`}>{occasion.name} dinner</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom page-width">
        <span>© {new Date().getFullYear()} Occasion Hub</span>
        <Link href="/form">Plan your occasion →</Link>
      </div>
    </footer>
  );
}
