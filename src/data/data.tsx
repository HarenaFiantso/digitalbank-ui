import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdFormatListBulleted,
  MdHelpCenter,
  MdOutlineSettings,
  MdOutlineTransferWithinAStation,
  MdPeople,
  MdWork,
} from 'react-icons/md';

export const data = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Transaction list',
        path: '/dashboard/transaction-list',
        icon: <MdFormatListBulleted />,
      },
      {
        title: 'Transfer list',
        path: '/dashboard/transfer-list',
        icon: <MdOutlineTransferWithinAStation />,
      },
      {
        title: 'Page 3',
        path: '/dashboard/page-3',
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
    title: 'User',
    list: [
      {
        title: 'User 1',
        path: '/dashboard/user-1',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'User 2',
        path: '/dashboard/user-2',
        icon: <MdHelpCenter />,
      },
    ],
  },
];
