import Link from 'next/link';
import Hamburger from 'hamburger-react';
import ListItemLinkElement from '../../elements/common/list-item-link-element';
import WrapperElement from '../../elements/common/wrapper-element';
import useScroll from '../../../hooks/use-scroll';
import useToggle from '../../../hooks/use-toggle';
import { BsPersonAdd } from 'react-icons/bs';

export default function NavbarModule() {
  const { topOffset } = useScroll();
  const { isToggled, toggleHandler } = useToggle(false);
  const scrolledClass = topOffset > 0 ? 'shadow-sm' : '';
  const toggledClass = !isToggled
    ? 'opacity-0 pointer-events-none'
    : 'opacity-100';

  return (
    <nav
      className={`w-full bg-white fixed left-0 right-0 z-20 transition-all ${scrolledClass}`}
    >
      <WrapperElement className="max-w-6xl m-auto flex justify-between items-center py-2 px-3 gap-5 sm:py-4">
        <Link
          href="/"
          className="text-2xl text-black font-semibold relative z-20"
        >
          Ink<span className="text-primary">Verse</span>
        </Link>
        <ul className="hidden sm:flex justify-center items-center gap-5">
          <ListItemLinkElement href="/">Home</ListItemLinkElement>
          <ListItemLinkElement href="/products">Books</ListItemLinkElement>
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
            toggled={isToggled}
            duration={0.15}
            color="#373737"
            rounded
            hideOutline
          />
          <ul
            className={`w-full ${toggledClass} transition-opacity flex flex-col justify-center items-center gap-5 absolute top-16 left-0 bg-white z-10 py-5 shadow-sm`}
          >
            <ListItemLinkElement href="/">Home</ListItemLinkElement>
            <ListItemLinkElement href="/products">Books</ListItemLinkElement>
            <ListItemLinkElement href="/sign-in">Login</ListItemLinkElement>
          </ul>
        </div>
      </WrapperElement>
    </nav>
  );
}
