import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

export default function Dropdown({ button, children }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button as="div">
          <div>{button}</div>
        </Menu.Button>
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
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
