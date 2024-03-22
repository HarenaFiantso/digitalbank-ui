'use client';

import { AccountNotFount, AddAccount, NoAvatar } from '../../../../public/assets';
import { fetchAccounts } from '@/lib/api/Accounts';
import { TAccount } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';

export default function ChooseAccount() {
  const [accounts, setAccounts] = useState<TAccount[]>([]);
  useEffect(() => {
    fetchAccounts().then(setAccounts);
  }, []);

  return (
    <div className='flex h-screen'>
      <div className='hidden flex-1 items-center justify-center bg-main-soft text-white lg:flex'>
        <div className='w-2/4 text-center'>
          <Image src={AddAccount} alt='add account' />
        </div>
      </div>

      <div className='flex w-full items-center justify-center bg-main lg:w-1/2'>
        <div className='w-full max-w-md p-6'>
          <h1 className='mb-6 text-center text-4xl font-semibold text-blue'>Choose account</h1>
          <h1 className='mb-6 text-center text-sm font-semibold text-gray-500'>
            Choose your account to benefits with our platform
          </h1>
          <div className='rounded-2xl bg-main-soft px-5 py-2 shadow-2xl'>
            {accounts.length === 0 ? (
              <div className='flex flex-col items-center gap-5 p-10'>
                <Image src={AccountNotFount} alt='account not found' width={500} height={500} />
                <h1>No account found</h1>
              </div>
            ) : (
              accounts.map((account: TAccount) => (
                <div
                  key={account.idAccount}
                  className='my-6 flex cursor-pointer items-center justify-between rounded-xl px-5 py-2 transition-all hover:bg-hover'
                >
                  <div className='flex items-center gap-5'>
                    <Image src={NoAvatar} alt='avatar' width={50} height={50} className='rounded-full object-cover' />
                    <h1>
                      {account.firstName} {account.lastName}
                    </h1>
                  </div>
                  <div className='rounded-full bg-hover p-3 hover:bg-gray-800'>
                    <BiTrash size={20} className='text-red-500' />
                  </div>
                </div>
              ))
            )}
          </div>
          <div className='mt-10 text-center text-sm text-gray-500'>
            <p>
              Not found you account here?{' '}
              <Link href={'/addAccount'} className='text-blue hover:underline'>
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
