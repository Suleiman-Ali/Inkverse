import Link from 'next/link';

interface PrimaryLinkElementProps {
  text: string;
  href: string;
}

export default function PrimaryLinkElement({
  text,
  href,
}: PrimaryLinkElementProps) {
  return (
    <Link
      href={href}
      className="self-center bg-black text-white text-base px-16 py-2 rounded-sm shadow hover:-translate-y-1 hover:shadow-md transition-all"
    >
      {text}
    </Link>
  );
}
