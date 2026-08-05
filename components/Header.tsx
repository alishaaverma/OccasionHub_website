"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { searchableRoutes } from "@/lib/site-data";

export default function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = query.trim().toLowerCase().replace(/\s+/g, " ");
    const destination = searchableRoutes[normalized];
    router.push(destination ?? `/search?q=${encodeURIComponent(query.trim())}`);
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">OH</span>
          <span>Occasion Hub</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={open ? "nav-content open" : "nav-content"}>
          <div className="nav-links">
            <Link href="/decurationpage" onClick={() => setOpen(false)}>Decorations</Link>
            <Link href="/dinnerpage" onClick={() => setOpen(false)}>Dinner plans</Link>
            <Link href="/form" onClick={() => setOpen(false)}>Book an event</Link>
          </div>
          <form className="search-form" onSubmit={handleSearch} role="search">
            <label className="sr-only" htmlFor="site-search">Search for a page</label>
            <input
              id="site-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try “wedding dinner”"
            />
            <button type="submit" aria-label="Search">Search</button>
          </form>
        </nav>
      </div>
    </header>
  );
}
