'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Button, ButtonGroup } from '@nextui-org/button';
import { useRouter } from 'next/navigation'

import { sidebarMenus } from '@/app/content';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const router = useRouter();

  return (
    <div className="flex flex-col min-w-64">
      <Image
        alt="login-logo"
        className="pt-8 pb-8 px-4"
        height={30}
        src="/images/reinhire-logo-new.png"
        width={180}
      />

      <div className="flex flex-col">
        {sidebarMenus.map((menu) => (
          <ButtonGroup key={menu.id}>
            <Button
              className={`!rounded-l-lg w-full mb-2 justify-start pl-8 ${activeMenu === menu.name ? 'bg-primary-50 bg-gradient-to-tr from-primary-50 to-primary-100 text-white shadow-lg' : 'bg-backgroud'}`}
              radius="full"
              onClick={() => {
                setActiveMenu(menu.name);
                router.push(menu.link);
              } }
            >
              <menu.icon />
              {menu.name}
            </Button>
          </ButtonGroup>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
