import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const DropdownMenu = ({ options, onSelect, placeholder, icon, className, value }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleItemClick = (value, label) => {
    setSelectedOption({ value, label });
    onSelect && onSelect({ value, label });
  };

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button
          className={flex ${className ? className : ''} justify-between items-center h-10 text-xs md:text-base w-full px-2 md:px-5 gap-x-5 rounded-md border-y-2 border-e-2 border-black hover:bg-gray-50}
        >
          {icon ? <img src={icon} alt="icon" /> : ''}
          {value || selectedOption?.label || placeholder}
          <ChevronDownIcon className="-mr-1 h-6 w-6 text-gray-400 border-2 rounded-md" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options?.map((option, index) => (
            <div key={index} className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm}
                    onClick={() => handleItemClick(option?.value, option?.label)}
                  >
                    {option?.label}
                  </div>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;