'use client';

import { TPageItem } from '@/lib/types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineLogout } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MenuLink({ item }: { item: TPageItem }) {
  const pathname: string = usePathname();
  const router: AppRouterInstance = useRouter();

  const handleLogout = async () => {
    toast('Account disconnected');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    localStorage.removeItem('idAccount');
    router.push('/chooseAccount');
  };

  if (item.title === 'Log Out') {
    return (
      <>
        <button
          onClick={handleLogout}
          className={`text-md my-[5px] flex w-full items-center gap-[10px] rounded-[10px] p-[20px] transition-all hover:bg-hover ${
            pathname === item.path && 'bg-hover'
          }`}
        >
          <span className='text-lg text-blue'>
            <HiOutlineLogout />
          </span>{' '}
          {item.title}
        </button>
        <ToastContainer autoClose={2000} pauseOnFocusLoss pauseOnHover />
      </>
    );
  }

  return (
    <Link
      href={item.path}
      className={`text-md my-[5px] flex items-center gap-[10px] rounded-[10px] p-[20px] capitalize transition-all hover:bg-hover ${
        pathname === item.path && 'bg-hover'
      }`}
    >
      <span className='text-lg text-blue'>{item.icon}</span> {item.title}
    </Link>
  );
}
