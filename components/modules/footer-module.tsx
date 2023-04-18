import Link from 'next/link';

export default function FooterModule() {
  return (
    <footer className="w-full bg-gray-b py-12">
      <div className="w-full m-auto flex flex-col items-center gap-3">
        <Link
          href="/"
          className="text-lg sm:text-xl md:text-2xl text-black font-semibold"
        >
          Ink<span className="text-primary">Verse</span>
        </Link>
        <p className="text-sm text-gray">
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
