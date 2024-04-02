'use client';

import Navbar from '@/components/dashboard/navbar/navbar';
import Sidebar from '@/components/dashboard/sidebar/sidebar';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex'>
      <div style={{ flex: 1 }} className='sticky top-0 h-screen bg-main-soft'>
        <Sidebar />
      </div>
      <div style={{ flex: 4 }} className='overflow-hidden p-5'>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
