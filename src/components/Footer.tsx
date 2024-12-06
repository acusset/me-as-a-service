import Link from "next/link";

export default function Footer() {
  return (
    <footer className="row-start-3 w-full h-16 flex gap-6 flex-wrap items-center justify-center">
      <Link
        className="flex text-alabaster items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn
      </Link>
      <Link
        className="flex text-alabaster items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        About
      </Link>
      <Link
        className="flex text-alabaster items-center gap-2 hover:underline hover:underline-offset-4"
        href="#contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </Link>
    </footer>
  );
}