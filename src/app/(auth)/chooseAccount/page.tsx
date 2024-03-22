'use client';

import Image from 'next/image';
import { AccountNotFount, AddAccount, NoAvatar } from '../../../../public/assets';
import { useEffect, useState } from 'react';
import { fetchAccounts } from '@/api/Accounts';
import Link from 'next/link';
import { BiTrash } from 'react-icons/bi';

export default function ChooseAccount() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  useEffect(() => {
    fetchAccounts().then(setAccounts);
  }, []);

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex items-center justify-center flex-1 bg-main-soft text-white">
        <div className="text-center w-2/4">
          <Image src={AddAccount} alt="add account" />
        </div>
      </div>

      <div className="w-full bg-main lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-4xl font-semibold mb-6 text-blue text-center">Choose account</h1>
          <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Choose your account to benefits with our
            platform</h1>
          <div className="bg-main-soft px-5 py-2 shadow-2xl rounded-2xl">
            {accounts.length === 0 ? (
              <div className='flex flex-col gap-5 items-center'>
                <Image src={AccountNotFount} alt="account not found" width={100} height={100} />
                <h1>No account found</h1>
              </div>
            ) : (
              accounts.map((account: Account) => (
                <div
                  key={account.idAccount}
                  className="flex justify-between items-center my-6 px-5 py-2 cursor-pointer rounded-xl hover:bg-hover transition-all"
                >
                  <div className='flex gap-5 items-center'>
                    <Image src={NoAvatar} alt="avatar" width={50} height={50} className="rounded-full object-cover" />
                    <h1>
                      {account.firstName} {account.lastName}
                    </h1>
                  </div>
                  <div className='bg-hover p-3 rounded-full hover:bg-gray-800'>
                    <BiTrash size={20} className='text-red-500' />
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="mt-10 text-sm text-gray-500 text-center">
            <p>Not found you account here? <Link href={'/addAccount'} className="text-blue hover:underline">Create
              one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
