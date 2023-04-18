import Link from 'next/link';
import { useRouter } from 'next/router';

interface ListItemLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ListItemLink({ href, children }: ListItemLinkProps) {
  const { asPath: route } = useRouter();
  const activeClass = route === href ? 'font-medium' : '';
  const loginClass = href === '/sign-in' ? 'flex items-center gap-1' : '';

  return (
    <li className={`text-black text-xl sm:text-lg ${activeClass}`}>
      <Link href={href} className={loginClass}>
        {children}
      </Link>
    </li>
  );
}
