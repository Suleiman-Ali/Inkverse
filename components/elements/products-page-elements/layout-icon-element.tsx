import { FaList } from 'react-icons/fa';
import { BsGrid3X3GapFill } from 'react-icons/bs';

interface LayoutIconElementProps {
  layout: 'list' | 'grid';
  current: 'list' | 'grid';
  onClick: () => void;
}

export default function LayoutIconElement({
  layout,
  current,
  onClick,
}: LayoutIconElementProps) {
  const Icon = layout === 'grid' ? BsGrid3X3GapFill : FaList;
  const activeClass = current === layout ? '!bg-black !text-gray-light' : '';
  const title = `${layout[0].toUpperCase()}${layout.slice(1)} View`;
  return (
    <Icon
      className={`text-4xl text-black cursor-pointer bg-gray-light p-2 rounded-sm ${activeClass} transition-all`}
      title={title}
      onClick={onClick}
    />
  );
}
