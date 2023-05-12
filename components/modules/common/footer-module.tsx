import WrapperElement from '../../elements/common/wrapper-element';
import Link from 'next/link';

export default function FooterModule() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-light py-12">
      <WrapperElement className="m-auto flex flex-col items-center gap-3">
        <Link
          href="/"
          className="text-lg sm:text-xl md:text-2xl text-black font-semibold"
        >
          Ink<span className="text-primary">Verse</span>
        </Link>
        <p className="text-sm text-gray">
          Copyright &copy; {year} All Rights Reserved
        </p>
      </WrapperElement>
    </footer>
  );
}
