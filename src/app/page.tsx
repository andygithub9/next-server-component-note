import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/server-component">server component</Link>
      </div>
      <div>
        <Link href="/client-component">client component</Link>
      </div>
      <div>
        <Link href="/react-component">react component</Link>
      </div>
    </main>
  );
}
