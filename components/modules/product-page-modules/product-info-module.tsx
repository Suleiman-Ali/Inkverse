import WrapperElement from '../../elements/common/wrapper-element';
import { IconType } from 'react-icons/lib';

interface ProductInfoProps {
  Icon: IconType;
  title: string;
  text: string;
}

export default function ProductInfo({ Icon, title, text }: ProductInfoProps) {
  return (
    <WrapperElement className="max-w-max flex items-center gap-1.5">
      <Icon className="text-lg" title={title} />
      <p className="text-black text-sm sm:text-base font-medium" title={title}>
        {text}
      </p>
    </WrapperElement>
  );
}
