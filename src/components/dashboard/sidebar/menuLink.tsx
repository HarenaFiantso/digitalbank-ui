'use client';

import { TPageItem } from '@/lib/types';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { HiOutlineLogout } from 'react-icons/hi';

export default function MenuLink({ item }: { item: TPageItem }) {
  const pathname: string = usePathname();
  const router: AppRouterInstance = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('idAccount');
    router.push('/chooseAccount')
  }

  if (item.title === 'Log Out') {
    return (
      <button
        onClick={handleLogout}
        className={`text-md w-full my-[5px] flex items-center gap-[10px] rounded-[10px] p-[20px] transition-all hover:bg-hover ${
          pathname === item.path && 'bg-hover'
        }`}
      >
        <span className='text-lg text-blue'><HiOutlineLogout /></span> {item.title}
      </button>
    );
  }

  return (
    <Link href={item.path} className={`text-md my-[5px] flex items-center gap-[10px] rounded-[10px] p-[20px] transition-all hover:bg-hover ${
        pathname === item.path && 'bg-hover'
      }`}>
        <span className='text-lg text-blue'>{item.icon}</span> {item.title}
    </Link>
  );
}
