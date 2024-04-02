'use client';

import { NoAvatar } from '../../../../public/assets';
import { fetchAccount } from '@/lib/api/Accounts';
import { TAccount } from '@/lib/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function UpdateAccountForm() {
  const [account, setAccount] = useState<TAccount | undefined>();
  const idAccount: string | null = localStorage.getItem('idAccount');

  useEffect(() => {
    fetchAccount(idAccount).then(setAccount);
  }, [idAccount]);

  return (
    <>
      <div style={{ flex: 1 }} className='flex flex-col items-center justify-center gap-5'>
        <Image src={NoAvatar} alt='avatar' width={300} height={300} className='rounded-full object-cover' />
        <div className='flex flex-col items-center text-center'>
          <span className='text-2xl font-semibold capitalize'>
            {account?.firstName} {account?.lastName}🎈
          </span>
          <span className='flex-wrap text-sm font-medium lowercase text-[#b7bac1]'>
            @{account?.lastName}
            {account?.firstName}
          </span>
        </div>
      </div>
      <div></div>
      <form style={{ flex: 2 }} className='space-y-4'>
        <label htmlFor='firstName' className='block text-sm font-medium text-white'>
          First Name
        </label>
        <input
          id='firstName'
          type='text'
          className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
          placeholder={account?.firstName}
        />

        <label htmlFor='lastName' className='block text-sm font-medium text-white'>
          Last Name
        </label>
        <input
          id='lastName'
          type='text'
          className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
          placeholder={account?.lastName}
        />

        <label htmlFor='birthDate' className='block text-sm font-medium text-white'>
          Birth Date
        </label>
        <input
          placeholder={String(account?.birthDate)}
          type='date'
          className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
        />

        <label htmlFor='monthlySalary' className='block text-sm font-medium text-white'>
          Monthly Salary
        </label>
        <input
          id='monthlySalary'
          type='number'
          className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
          placeholder={String(account?.monthlySalary)}
        />

        <label htmlFor='overDrafted' className='block text-sm font-medium text-white'>
          Over Drafted <span className='text-xs text-gray-500 '>(True or False)</span>{' '}
        </label>
        <select id='overDrafted' className='mt-1 w-full rounded-md bg-hover p-2 outline-none'>
          <option value=''>
            {account?.overDrafted ? 'Your account is over drafted' : 'Your account is not over drafted'}
          </option>
          <option value='true'>True</option>
          <option value='false'>False</option>
        </select>

        <button
          type='submit'
          className='w-full rounded-md bg-blue p-2 text-white transition-colors duration-300 hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
        >
          Update account
        </button>
      </form>
    </>
  );
}
