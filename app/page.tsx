import Link from "next/link";
export default function Home() {
  return (
<main><h1>Welcome to my Code Editor</h1>
<div className="py-3"></div>
<Link href="/editor">Open Editor</Link>
</main>
  );
}