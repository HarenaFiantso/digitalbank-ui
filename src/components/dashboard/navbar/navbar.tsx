"use client"

import { usePathname } from 'next/navigation';
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className='p-5 rounded bg-main-soft flex items-center justify-between'>
      <div className="text-blue font-bold text-xl capitalize">{pathname.split("/").pop()}</div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 bg-[#2e374a] p-2 rounded">
          <MdSearch />
          <input type="text" placeholder="Search..." className="bg-transparent border-none text-light" />
        </div>
        <div className="flex justify-between gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
