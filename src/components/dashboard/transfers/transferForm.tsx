'use client';

import { NoAvatar } from '../../../../public/assets';
import { fetchAccounts } from '@/lib/api/Accounts';
import { TAccount } from '@/lib/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { BiTransfer } from 'react-icons/bi';

export default function TransferForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [accounts, setAccounts] = useState<TAccount[]>([]);

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(data);
  };

  useEffect(() => {
    fetchAccounts().then(setAccounts);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ flex: 2 }} className='space-y-4'>
      <label htmlFor='amount' className='block text-sm font-medium text-white'>
        Amount
      </label>
      <input
        {...register('amount')}
        id='amount'
        type='number'
        className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
      />

      <label htmlFor='reason' className='block text-sm font-medium text-white'>
        Reason
      </label>
      <textarea
        {...register('reason')}
        id='reason'
        className='mt-1 w-full resize-none rounded-md bg-hover p-2 outline-none '
      />

      <label htmlFor='transferDatetime' className='block text-sm font-medium text-white'>
        Choose a date to apply the transfer
      </label>
      <input
        {...register('transferDatetime')}
        type='datetime-local'
        className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
      />

      <label htmlFor='idAccount' className='block text-sm font-medium text-white'>
        Choose an account to deal with
      </label>
      <select
        {...register('idAccount')}
        id='idAccount'
        className='mt-1 w-full rounded-md bg-hover p-2 capitalize outline-none'
      >
        {accounts
          .filter((account: TAccount) => account.idAccount !== localStorage.getItem('idAccount'))
          .map((account: TAccount) => (
            <option key={account.idAccount} value={account.idAccount}>
              {account.firstName} {account.lastName}
            </option>
          ))}
      </select>

      <button
        disabled={isSubmitting}
        type='submit'
        className='flex w-full items-center justify-center gap-2 rounded-md bg-blue p-2 text-white transition-colors hover:bg-gray-800'
      >
        Make a transfer <BiTransfer size={20} className='text-lime-500' />
      </button>
    </form>
  );
}
