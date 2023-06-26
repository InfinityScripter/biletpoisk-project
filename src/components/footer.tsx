import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <nav className="container">
        <Link href="/faq">Вопросы и ответы</Link>
        <Link href="/about">О нас</Link>
      </nav>
    </footer>
  );
}
