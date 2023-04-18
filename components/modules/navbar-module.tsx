import Link from 'next/link';
import Hamburger from 'hamburger-react';
import useScroll from '../../hooks/use-scroll';
import ListItemLink from '../elements/list-item-link-element';
import { BsPersonAdd } from 'react-icons/bs';
import { useState } from 'react';

export default function NavbarModule() {
  const topOffset = useScroll();
  const [isOpen, setOpen] = useState<boolean>(false);
  const scrolledClass = topOffset > 0 && 'shadow-sm';
  const openClass = isOpen && 'opacity-100';
  const toggleHandler = () => setOpen((prev) => !prev);

  return (
    <nav
      className={`w-full bg-white fixed left-0 right-0 z-20 transition-all ${scrolledClass}`}
    >
      <div className="max-w-6xl m-auto flex justify-between items-center py-2 px-3 gap-5 sm:py-4">
        <Link
          href="/"
          className="text-2xl text-black font-semibold relative z-20"
        >
          Ink<span className="text-primary">Verse</span>
        </Link>
        <ul className="hidden sm:flex justify-center items-center gap-5">
          <ListItemLink href="/">Home</ListItemLink>
          <ListItemLink href="/books">Books</ListItemLink>
        </ul>
        <Link
          href="/sign-in"
          className="hidden sm:flex items-center gap-1 text-lg text-black"
        >
          Login
          <BsPersonAdd className="text-2xl" />
        </Link>

        <div className="sm:hidden z-20">
          <Hamburger
            size={27}
            toggle={toggleHandler}
            toggled={isOpen}
            duration={0.15}
            color="#373737"
            rounded
            hideOutline
          />
          <ul
            className={`w-full opacity-0 transition-all ${openClass} flex flex-col justify-center items-center gap-5 absolute top-16 left-0 bg-white z-10 py-5 shadow-sm`}
          >
            <ListItemLink href="/">Home</ListItemLink>
            <ListItemLink href="/books">Books</ListItemLink>
            <ListItemLink href="/sign-in">Login</ListItemLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
