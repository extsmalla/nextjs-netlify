import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>

      <p>
        Click for &lt;a&gt; <a href="/news">News</a>
      </p>
      
      <br />

      <p>
        Click for &lt;Link&gt; <Link href="/news">News</Link>
      </p>
    </main>
  );
}
