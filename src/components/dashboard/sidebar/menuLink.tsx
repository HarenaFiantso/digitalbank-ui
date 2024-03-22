'use client';

import { TPageItem } from '@/lib/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function MenuLink({ item }: { item: TPageItem }) {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`text-md my-[5px] flex items-center gap-[10px] rounded-[10px] p-[20px] transition-all hover:bg-hover ${pathname === item.path && 'bg-hover'}`}
    >
      <span className='text-lg text-blue'>{item.icon}</span> {item.title}
    </Link>
  );
}
