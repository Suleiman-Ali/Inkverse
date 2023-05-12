import WrapperElement from '../../elements/common/wrapper-element';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderModule() {
  return (
    <WrapperElement className="px-3 max-w-6xl m-auto flex items-center justify-between gap-10 py-28">
      <WrapperElement className="flex flex-col gap-3">
        <h1 className="text-4xl text-black font-semibold leading-tight sm:leading-tight md:leading-tight sm:text-5xl md:sm:text-5xl">
          Unleash your <span className="text-primary">imagination</span> with
          every turn of a page
        </h1>
        <p className="text-black text-base mt-2 leading-relaxed sm:leading-loose md:leading-loose sm:text-lg">
          Welcome to our online bookstore, your one-stop-shop for books of all
          kinds. We believe that{' '}
          <span className="text-primary font-semibold">
            books have the power to inspire, educate, and entertain
          </span>
          , and we are passionate about sharing that experience with you.
        </p>
        <Link
          href="/products"
          className="max-w-max text-black text-sm font-semibold underline sm:text-base hover:no-underline transition-all"
        >
          Discover your next great read today!
        </Link>
      </WrapperElement>
      <WrapperElement className="max-w-[399px] shadow-lg hidden lg:flex lg:justify-end">
        <Image
          width={400}
          height={400}
          src="/header.jpg"
          alt="Books"
          className="w-full rounded"
          priority
        />
      </WrapperElement>
    </WrapperElement>
  );
}
