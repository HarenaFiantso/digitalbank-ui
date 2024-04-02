'use client';

import { TPageCategory } from '@/lib/types';
import { HiOutlineLogout } from 'react-icons/hi';
import {
  MdAnalytics,
  MdDashboard,
  MdFormatListBulleted,
  MdOutlineSettings,
  MdOutlineTransferWithinAStation,
  MdPeople,
  MdWork,
} from 'react-icons/md';

/* ===== Menu links ===== */
export const menu: TPageCategory[] = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: `/dashboard`,
        icon: <MdDashboard />,
      },
      {
        title: 'transaction',
        path: `/dashboard/transaction`,
        icon: <MdFormatListBulleted />,
      },
      {
        title: 'Transfer',
        path: `/dashboard/transfer`,
        icon: <MdOutlineTransferWithinAStation />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Transaction by category',
        path: '/dashboard/transactionByCategory',
        icon: <MdWork />,
      },
      {
        title: 'Analytics 2',
        path: '/dashboard/analytics-2',
        icon: <MdAnalytics />,
      },
      {
        title: 'Analytics 3',
        path: '/dashboard/analytics-3',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'Accounts',
    list: [
      {
        title: 'My Account',
        path: '/dashboard/myAccount',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Log Out',
        path: '/chooseAccount',
        icon: <HiOutlineLogout />,
      },
    ],
  },
];

/* ===== Dashboard line chart data ===== */
export const lineChartData = [
  {
    name: 'Sun',
    visit: 4000,
    click: 2400,
  },
  {
    name: 'Mon',
    visit: 3000,
    click: 1398,
  },
  {
    name: 'Tue',
    visit: 2000,
    click: 3800,
  },
  {
    name: 'Wed',
    visit: 2780,
    click: 3908,
  },
  {
    name: 'Thu',
    visit: 1890,
    click: 4800,
  },
  {
    name: 'Fri',
    visit: 2390,
    click: 3800,
  },
  {
    name: 'Sat',
    visit: 3490,
    click: 4300,
  },
];
