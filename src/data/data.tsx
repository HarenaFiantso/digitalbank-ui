'use client';

import { TCard } from '@/lib/types';
import { TPageCategory } from '@/lib/types';
import { TTransaction } from '@/lib/types';
import { HiOutlineLogout } from 'react-icons/hi';
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdFormatListBulleted,
  MdOutlineSettings,
  MdOutlineTransferWithinAStation,
  MdPeople,
  MdWork,
} from 'react-icons/md';

export const transactions: TTransaction[] = [
  {
    id: 1,
    name: 'Fiantso',
    reason: 'troubleshooting',
    type: 'Credit',
    date: '18.03.2024',
    amount: '38.000',
  },
  {
    id: 2,
    name: 'Tanjona',
    reason: 'Smatchin ticket',
    type: 'Debit',
    date: '18.03.2024',
    amount: '3.000',
  },
  {
    id: 3,
    name: 'Tendry',
    reason: 'Alcohol',
    type: 'Credit',
    date: '18.03.2024',
    amount: '50.000',
  },
];

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
        title: 'Transactions',
        path: `/dashboard/transaction-list`,
        icon: <MdFormatListBulleted />,
      },
      {
        title: 'Transfer',
        path: `/dashboard/transfer-list`,
        icon: <MdOutlineTransferWithinAStation />,
      },
      {
        title: 'Page 3',
        path: `/dashboard/page-3`,
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Analytics 1',
        path: '/dashboard/analytics-1',
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
        path: '/dashboard/MyAccount',
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

export const cards: TCard[] = [
  {
    id: 1,
    title: 'Total Transactions',
    number: '69',
    change: 2,
  },
  {
    id: 2,
    title: 'Current balance',
    number: '69.225',
    change: -2,
  },
  {
    id: 3,
    title: 'Total debt',
    number: '6.642',
    change: 18,
  },
];
