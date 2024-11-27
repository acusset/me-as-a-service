import Link from "next/link";

export default function Footer() {
  return (
    <footer className="row-start-3 w-full h-12 flex gap-6 flex-wrap items-center justify-center">
      <Link
        className="flex text-alabaster items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn
      </Link>
      <Link
        className="flex text-alabaster items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Examples
      </Link>
      <Link
        className="flex text-alabaster items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to nextjs.org
      </Link>
    </footer>
  );
}