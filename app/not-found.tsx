import Link from "next/link";

export default function NotFound() {
  return (
    <main className="message-page page-width">
      <p className="eyebrow">404</p>
      <h1>This celebration is not on the list.</h1>
      <p>The page may have moved, or the address may be incomplete.</p>
      <Link className="button button-primary" href="/">Return home</Link>
    </main>
  );
}
