'use client';

import { TAccount, TPageItem } from '@/lib/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function MenuLink({ account, item }: { account: TAccount | undefined; item: TPageItem }) {
  const pathname: string = usePathname();

  return <Link href={item.path}></Link>;
}
