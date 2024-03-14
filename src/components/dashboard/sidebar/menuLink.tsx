"use client"

import { MenuItem } from '@/types/MenuItem';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function MenuLink({ item }: { item: MenuItem }) {
  const pathname = usePathname();

  return (
    <Link href={item.path} className={`my-[5px] flex items-center gap-[10px] rounded-[30px] p-[20px] text-md transition-all hover:bg-hover ${pathname === item.path && 'bg-hover'}`}>
      <span className="text-lg text-blue">{item.icon}</span> {item.title}
    </Link>
  );
}
