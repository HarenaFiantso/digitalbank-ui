'use client';

import { usePathname } from 'next/navigation';
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';

export default function Navbar() {
  const pathname: string[] = usePathname().split('/');
  const pageTitle: string = pathname[1];

  return (
    <div className='flex items-center justify-between rounded bg-main-soft p-5'>
      <div className='text-xl font-bold capitalize text-blue'>{pageTitle}</div>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-2 rounded bg-[#2e374a] p-2'>
          <MdSearch />
          <input type='text' placeholder='Search...' className='border-none bg-transparent text-light' />
        </div>
        <div className='flex justify-between gap-5'>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
