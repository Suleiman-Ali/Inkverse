import WrapperElement from '../../elements/common/wrapper-element';
import { numberToPaginationArray } from '../../../utils/helper-functions';

interface PaginationModuleProps {
  count: number;
  limit: number;
  current: string;
  onChange: (key: string, value: string) => void;
}

export default function PaginationModule({
  count,
  limit,
  current,
  onChange,
}: PaginationModuleProps) {
  const pages = Math.ceil(count / limit);
  const isPages = pages > 1;
  const changeHandler = (page: number) => () => onChange('page', `${page}`);
  const applySelectedClass = (page: number) =>
    current === `${page}` ? '!bg-black !text-gray-light ' : '';

  return isPages ? (
    <WrapperElement className="w-max self-center flex items-center gap-1.5">
      {numberToPaginationArray(pages).map((page) => (
        <p
          key={page}
          className={`bg-gray-light text-sm sm:text-base text-black font-semibold py-1 px-2.5 rounded-sm cursor-pointer transition-all ${applySelectedClass(
            page
          )}`}
          onClick={changeHandler(page)}
        >
          {page}
        </p>
      ))}
    </WrapperElement>
  ) : (
    <></>
  );
}
