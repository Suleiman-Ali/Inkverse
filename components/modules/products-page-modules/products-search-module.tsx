import WrapperElement from '../../elements/common/wrapper-element';
import { ChangeEvent } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

interface ProductsSearchModuleProps {
  current: string;
  onChange: (key: string, value: string) => void;
}

export default function ProductsSearchModule({
  current,
  onChange,
}: ProductsSearchModuleProps) {
  const isEmptyClass = current.length === 0 ? 'scale-0' : 'scale-100';
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    onChange('name', e.target.value);
  const clearHandler = () => onChange('name', '');
  return (
    <WrapperElement className="relative flex items-center gap-1.5">
      <input
        autoComplete="off"
        type="text"
        name="search"
        placeholder="Search for books"
        className="w-full bg-gray-light p-2.5 pr-10 rounded-sm border-none outline-none text-sm sm:text-base text-black"
        value={current}
        onChange={changeHandler}
      />
      <IoIosCloseCircle
        className={`absolute top-[50%] -translate-y-[50%] right-2.5 text-2xl text-black cursor-pointer transition-all  ${isEmptyClass}`}
        onClick={clearHandler}
      />
    </WrapperElement>
  );
}
