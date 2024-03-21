'use client'

import Image from 'next/image';
import { AddAccount, NoAvatar } from '../../../../public/assets';
import { useEffect, useState } from 'react';
import { fetchAccounts } from '@/api/Accounts';

export default function ChooseAccount() {
  const [accounts, setAccounts] = useState<Account[]>([])
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
            {accounts.map((account: Account) => (
              <div key={account.idAccount}
                   className="flex gap-5 border-b-gray-200 items-center my-6 px-5 py-2 cursor-pointer rounded-xl hover:bg-hover transition-all">
                <Image src={NoAvatar} alt="avatar" width={50} height={50} className="rounded-full object-cover" />
                <h1>{account.firstName} {account.lastName}</h1>
              </div>
            ))}
          </div>
          <div className="mt-10 text-sm text-gray-500 text-center">
            <p>Not found you account here? <a href="#" className="text-blue hover:underline">Create one</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
