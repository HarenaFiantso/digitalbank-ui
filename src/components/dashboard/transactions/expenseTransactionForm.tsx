'use client';

import { fetchCategories } from '@/lib/api/Category';
import { TTransactionCategory } from '@/lib/types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { BiCheck } from 'react-icons/bi';

export default function ExpenseTransactionForm() {
  const router: AppRouterInstance = useRouter();
  const [transactionCategories, setTransactionCategories] = useState<TTransactionCategory[]>([]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      data.idAccount = localStorage.getItem('idAccount');
      data.transactionType = 'EXPENSE';

      const response: Response = await fetch('http://localhost:8080/transaction', {
        method: 'PUT',
        body: JSON.stringify([data]),
        headers: {
          'Content-type': 'application/json',
        },
      });
      console.log(response.body);
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
      } else {
        router.push('/dashboard/transaction');
      }
      const result = await response.json();
      console.log('Success:', result);
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchCategories().then(setTransactionCategories);
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

      <label htmlFor='transactionDatetime' className='block text-sm font-medium text-white'>
        Choose a date
      </label>
      <input
        {...register('transactionDatetime')}
        type='date'
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

      <label htmlFor='category' className='block text-sm font-medium text-white'>
        Category
      </label>
      <select
        {...register('category')}
        id='category'
        className='mt-1 w-full rounded-md bg-hover p-2 capitalize outline-none'
      >
        {transactionCategories.map((transactionCategory: TTransactionCategory) => (
          <option key={transactionCategory.idTransactionCategory} value={transactionCategory.idTransactionCategory}>
            {transactionCategory.name}
          </option>
        ))}
      </select>
      <button
        disabled={isSubmitting}
        type='submit'
        className='flex w-full items-center justify-center gap-2 rounded-md bg-blue p-2 text-white transition-colors duration-300 hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
      >
        Make transaction <BiCheck size={20} className='text-lime-500' />
      </button>
    </form>
  );
}
