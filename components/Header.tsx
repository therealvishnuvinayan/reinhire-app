'use client';

import React from 'react';
import { Avatar } from '@nextui-org/avatar';
import { ThemeSwitch } from './theme-switch';
import { RiNotification4Line } from 'react-icons/ri';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from '@nextui-org/dropdown';

const Header = () => {
  return (
    <div className="flex justify-end pr-4 pt-2 pb-12 items-center gap-3">
      <ThemeSwitch />
      <RiNotification4Line className="cursor-pointer w-6 h-6" />
      <Dropdown>
        <DropdownTrigger>
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            className="cursor-pointer w-8 h-8"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownSection>
            <DropdownItem key="my-profile">My Profile</DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="privacy">Privacy</DropdownItem>
            <DropdownItem key="faq">FAQ</DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Logout
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Header;
