import Link from "next/link";
export default function Home() {
  return (
<main><h1 className="px-3 py-3 flex justify-center">Welcome to my Code Editor</h1>
<div className="py-3"></div>
<Link  className="
          px-6 py-3 
          bg-blue-600 
          text-white 
          rounded-xl 
          text-lg 
          font-semibold
          hover:bg-blue-700 
          transition-all 
          shadow-md 
          hover:shadow-lg
        "
        href="/editor">Go to Editor</Link>
</main>
  );
}