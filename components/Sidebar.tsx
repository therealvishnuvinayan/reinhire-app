import Image from 'next/image';
import React from 'react';
import { Button, ButtonGroup } from '@nextui-org/button';
import { sidebarMenus } from '@/app/content';

const Sidebar = () => {
  return (
    <div className="flex flex-col pt-8 pb-8 px-4">
      <Image
        alt="login-logo"
        height={30}
        src="/images/reinhire-logo-new.png"
        width={180}
        className="mb-6"
      />

      <div className="flex flex-col gap-4">
        {sidebarMenus.map((menu) => (
          <ButtonGroup key={menu.id}>
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
            >
              {menu.name}
            </Button>
          </ButtonGroup>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
