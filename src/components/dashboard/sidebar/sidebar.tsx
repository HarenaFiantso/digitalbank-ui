'use client';

import { NoAvatar } from '../../../../public/assets';
import MenuLink from '@/components/dashboard/sidebar/menuLink';
import { menu } from '@/data/data';
import { fetchAccount } from '@/lib/api/Accounts';
import { TAccount, TPageCategory, TPageItem } from '@/lib/types';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Sidebar({ account }: { account: TAccount | undefined }) {
  return (
    <div className=' h-screen p-8'>
      <div className='mb-5 flex items-center gap-5'>
        <Image className='rounded-full' src={NoAvatar} alt='Avatar' width='50' height='50' />
        <div className='flex flex-col gap-2'>
          <span className='text-lg font-semibold capitalize'>
            {account?.firstName} {account?.lastName} 🍔
          </span>
          <span className='flex-wrap text-sm font-medium lowercase text-[#b7bac1]'>
            @{account?.lastName}
            {account?.firstName}
          </span>
        </div>
      </div>
      <ul>
        {menu.map((category: TPageCategory) => (
          <li key={category.title}>
            <span className='text-2 mb-4 font-semibold text-[#b7bac1]'>{category.title}</span>
            {category.list.map((item: TPageItem) => (
              <MenuLink key={item.path} item={item} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
