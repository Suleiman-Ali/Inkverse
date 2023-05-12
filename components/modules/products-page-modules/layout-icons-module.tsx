import WrapperElement from '../../elements/common/wrapper-element';
import LayoutIconElement from '../../elements/products-page-elements/layout-icon-element';

interface LayoutIconsModuleProps {
  count: number;
  layout: 'grid' | 'list';
  onChange: (layout: 'grid' | 'list') => void;
}

export default function LayoutIconsModule({
  layout,
  onChange,
  count,
}: LayoutIconsModuleProps) {
  const toGridHandler = () => onChange('grid');
  const toListHandler = () => onChange('list');
  return (
    <WrapperElement className="flex items-center justify-between gap-3">
      <p className="text-sm sm:text-base text-gray">{count} Books</p>
      <WrapperElement className="max-w-max flex items-center gap-1">
        <LayoutIconElement
          layout="list"
          current={layout}
          onClick={toListHandler}
        />
        <LayoutIconElement
          layout="grid"
          current={layout}
          onClick={toGridHandler}
        />
      </WrapperElement>
    </WrapperElement>
  );
}
