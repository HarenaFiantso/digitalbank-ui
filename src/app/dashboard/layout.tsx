'use client';

import Navbar from '@/components/dashboard/navbar/navbar';
import Sidebar from '@/components/dashboard/sidebar/sidebar';
import { fetchAccount } from '@/lib/api/Accounts';
import { TAccount } from '@/lib/types';
import { ReactNode, useEffect, useState } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const idAccount: string | null = localStorage.getItem('idAccount');
  const [account, setAccount] = useState<TAccount>();

  useEffect(() => {
    fetchAccount(idAccount).then(setAccount);
  }, [idAccount]);

  return (
    <div className='flex'>
      <div style={{ flex: 1 }} className='h-screen'>
        <Sidebar account={account} />
      </div>
      <div style={{ flex: 4 }} className='p-5'>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
