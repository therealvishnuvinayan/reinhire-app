'use client';

import Image from 'next/image';
import React, { act, useState } from 'react';
import { Button, ButtonGroup } from '@nextui-org/button';
import { sidebarMenus } from '@/app/content';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('Menu1');
  return (
    <div className="flex flex-col min-w-64">
      <Image
        alt="login-logo"
        height={30}
        src="/images/reinhire-logo-new.png"
        width={180}
        className="pt-8 pb-8 px-4"
      />

      <div className="flex flex-col">
        {sidebarMenus.map((menu) => (
          <ButtonGroup key={menu.id}>
            <Button
              radius="full"
              className={`!rounded-l-lg w-full ${activeMenu === menu.name ? 'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg' : 'bg-white'}`}
              onClick={() => setActiveMenu(menu.name)}
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
