import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>MasterClass Next </h1>
      <nav>
        <Link href="/primeiro"> Primeiro componente </Link>
      </nav>
    </main>
  );
}
