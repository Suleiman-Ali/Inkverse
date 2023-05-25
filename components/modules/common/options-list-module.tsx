import Select from 'react-select';
import capitalize from 'lodash/capitalize';

interface OptionsListModuleProps {
  name: string;
  current: string;
  items: { label: string; value: string }[];
  onChange: (key: string, value: string) => void;
}

export default function OptionsListModule({
  name,
  items,
  current,
  onChange,
}: OptionsListModuleProps) {
  const placeholder = capitalize(name);
  const value = items.find(({ value }) => value === current);
  const changeHandler = (arg: any) => onChange(name, arg?.value || '');
  return (
    <Select
      menuShouldScrollIntoView={false}
      className="w-full"
      isClearable={true}
      isSearchable={false}
      options={items}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      classNames={{
        singleValue: () => '!text-sm sm:!text-base text-black',
        placeholder: () => '!text-gray !text-sm sm:!text-base',
        clearIndicator: () => '!text-black !text-sm sm:!text-base',
        control: () =>
          '!cursor-pointer !bg-gray-light !border-none !outline-none !shadow-none !rounded !px-1',
        menuList: () => '!m-0 !p-0',
        menu: () =>
          '!bg-white !border !border-gray-light !rounded !m-0 !p-0 !overflow-hidden !mt-1',
        dropdownIndicator: ({ selectProps: { menuIsOpen } }) =>
          `!text-black !text-sm sm:!text-base !transition-all ${
            menuIsOpen ? '!rotate-180' : ''
          }`,
        option: ({ isSelected }) =>
          `!text-sm sm:!text-base !cursor-pointer !transition-all ${
            isSelected
              ? '!bg-black !text-white'
              : '!bg-white !text-black hover:!bg-gray-light hover:!text-black'
          }`,
      }}
    />
  );
}
