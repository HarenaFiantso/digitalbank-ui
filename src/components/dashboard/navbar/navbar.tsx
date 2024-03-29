'use client';

import { usePathname } from 'next/navigation';
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';

export default function Navbar() {
  const pathname: string[] = usePathname().split('/');
  const pageTitle: string = pathname[1];

  return (
    <div className='flex items-center justify-between rounded bg-main-soft p-5'>
      <div className='text-xl font-bold capitalize text-blue'>{pageTitle}</div>
      <div className='flex items-center gap-5'>
        <div className='flex justify-between gap-5'>
          <button onClick={() => toast("Soon !")}>
            <MdOutlineChat size={20} />
          </button>
          <button onClick={() => toast("Soon !")}>
            <MdNotifications size={20} />
          </button>
          <button onClick={() => toast("Soon !")}>
            <MdPublic size={20} />
          </button>
          <ToastContainer hideProgressBar={true} autoClose={1500}/>
        </div>
      </div>
    </div>
  );
}
