import { Fragment } from 'react';
import { Popover as PopoverUI, Transition } from '@headlessui/react';

export default function Popover({ button, children }) {
  return (
    <PopoverUI as="div" className="relative inline-block text-left">
      <div>
        <PopoverUI.Button as="div">
          <div>{button}</div>
        </PopoverUI.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <PopoverUI.Panel className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {children}
        </PopoverUI.Panel>
      </Transition>
    </PopoverUI>
  );
}
