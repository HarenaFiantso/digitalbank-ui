'use client';

import { fetchAccounts } from '@/lib/api/Accounts';
import { TAccount } from '@/lib/types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { BiTransfer } from 'react-icons/bi';
import { toast } from 'react-toastify';

export default function TransferForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();
  const router: AppRouterInstance = useRouter();
  const [accounts, setAccounts] = useState<TAccount[]>([]);
  const balanceAmount = accounts.map((account: TAccount) => {
    return account.balance.amount;
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const idDebitAccount: string | null = localStorage.getItem('idAccount');

      if (data.amount > balanceAmount) {
        toast.error('Insufficient balance for the transfer', {
          theme: 'dark',
        });
      }

      const transferData = {
        idDebitAccount: idDebitAccount,
        idCreditAccount: data.idCreditAccount || null,
        reason: data.reason,
        amount: data.amount,
        transferDatetime: data.transferDatetime
          ? new Date(data.transferDatetime).toISOString()
          : new Date().toISOString(),
      };

      const response: Response = await fetch('http://localhost:8080/transfer', {
        method: 'POST',
        body: JSON.stringify(transferData),
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        return;
      } else {
        toast.success('Transfer made successfully', {
          theme: 'dark',
        });
      }

      router.push('/dashboard/transaction');
      reset();
    } catch (error) {
      console.error(error);
    }
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

      <label htmlFor='idCreditAccount' className='block text-sm font-medium text-white'>
        Choose an account to deal with <span className='text-xs text-gray-500 '>(You can leave it empty)</span>
      </label>
      <select
        {...register('idCreditAccount')}
        id='idCreditAccount'
        className='mt-1 w-full rounded-md bg-hover p-2 capitalize outline-none'
      >
        <option value=''>Select an option</option>
        {accounts
          .filter((account: TAccount) => account.idAccount !== localStorage.getItem('idAccount'))
          .map((account: TAccount) => (
            <>
              <option key={account.idAccount} value={account.idAccount}>
                {account.firstName} {account.lastName}
              </option>
            </>
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
