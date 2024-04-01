'use client';

import { fetchAccount } from '@/lib/api/Accounts';
import { fetchCategories } from '@/lib/api/Category';
import { TAccount, TTransactionCategory } from '@/lib/types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { BiCheck } from 'react-icons/bi';
import { toast } from 'react-toastify';

export default function TransactionForm() {
  const router: AppRouterInstance = useRouter();
  const idAccount: string | null = localStorage.getItem('idAccount');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [account, setAccount] = useState<TAccount>();
  const [transactionCategories, setTransactionCategories] = useState<TTransactionCategory[]>([]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const balance: number | undefined = account?.balance.amount;
      const overDrafted: boolean | undefined = account?.overDrafted;
      data.idAccount = localStorage.getItem('idAccount');

      if (typeof balance !== 'number') return;

      if (data.transactionType === 'EXPENSE' && balance < data.amount) {
        if (overDrafted === true) {
          setIsOpen(true);
          let monthlySalary: number | undefined = account?.monthlySalary;
          if (typeof monthlySalary == 'number') {
            let loanAmount: number = monthlySalary / 3;
            if (loanAmount >= data.amount - balance) {
              data.amount = data.amount - loanAmount;
            } else {
              toast.error('The amount of loan is insufficient');
              return;
            }
          }
        } else {
          toast.error('Your account is not over drafted');
        }
        return;
      }

      if (data.transactionDatetime) {
        let date: Date = new Date(data.transactionDatetime);
        data.transactionDatetime = date.toISOString();
      }

      const response: Response = await fetch('http://localhost:8080/transaction', {
        method: 'PUT',
        body: JSON.stringify([data]),
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        return;
      }

      router.push('/dashboard/transaction');
      const result = await response.json();
      console.log('Success:', result);
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmitOnLoan = handleSubmit(async (data: FieldValues) => {
    try {
      setIsOpen(false);
      let monthlySalary: number | undefined = account?.monthlySalary;
      const balance: number | undefined = account?.balance.amount;
      data.idAccount = localStorage.getItem('idAccount');

      if (account && typeof monthlySalary == 'number' && typeof balance == 'number') {
        let loanAmount: number = monthlySalary / 3;
        if (loanAmount >= data.amount - balance) {
          data.amount = data.amount - loanAmount;
          monthlySalary = monthlySalary - loanAmount;
          account.monthlySalary = monthlySalary;
        } else {
          toast.error('The amount of loan is insufficient');
          return;
        }
      }
      if (data.transactionDatetime) {
        let date: Date = new Date(data.transactionDatetime);
        data.transactionDatetime = date.toISOString();
      }

      const response: Response = await fetch('http://localhost:8080/transaction', {
        method: 'PUT',
        body: JSON.stringify([data]),
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        return;
      }
      router.push('/dashboard/transaction');
      const result = await response.json();
      console.log('Success:', result);
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  useEffect(() => {
    fetchCategories().then(setTransactionCategories);
    fetchAccount(idAccount).then(setAccount);
  }, [idAccount]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ flex: 2 }} className='space-y-4'>
      <label htmlFor='transactionType' className='block text-sm font-medium text-white'>
        Choose your transaction type <span className='text-xs text-gray-500 '>(Expense or Income)</span>{' '}
      </label>
      <select
        {...register('transactionType')}
        id='transactionType'
        className='mt-1 w-full rounded-md bg-hover p-2 outline-none'
      >
        <option value='EXPENSE'>Expense</option>
        <option value='INCOME'>Income</option>
      </select>

      <label htmlFor='amount' className='block text-sm font-medium text-white'>
        Amount
      </label>
      <input
        {...register('amount')}
        required
        id='amount'
        type='number'
        className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
      />

      <label htmlFor='transactionDatetime' className='block text-sm font-medium text-white'>
        Choose a date
      </label>
      <input
        {...register('transactionDatetime')}
        required
        type='datetime-local'
        className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
      />

      <label htmlFor='reason' className='block text-sm font-medium text-white'>
        Reason
      </label>
      <textarea
        required
        {...register('reason')}
        id='reason'
        className='mt-1 w-full resize-none rounded-md bg-hover p-2 outline-none '
      />

      <label htmlFor='idTransactionCategory' className='block text-sm font-medium text-white'>
        Category
      </label>
      <select
        {...register('idTransactionCategory')}
        id='idTransactionCategory'
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
        className='flex w-full items-center justify-center gap-2 rounded-md bg-blue p-2 text-white transition-colors hover:bg-gray-800'
      >
        Make transaction <BiCheck size={20} className='text-lime-500' />
      </button>

      {isOpen && (
        <div className='mt-50 fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center backdrop-blur'>
          <div className='w-[60%] rounded-xl bg-main-soft p-[20px] pb-[50px] shadow-2xl'>
            <span
              className='float-right cursor-pointer text-[28px] font-bold text-[#aaa]'
              onClick={() => setIsOpen(false)}
            >
              &times;
            </span>
            <div className='flex flex-col items-center justify-center text-center'>
              <h2 className='mp-0 p-5 text-center text-[2rem] font-semibold text-blue'>Loan validation</h2>
              <p className='text-sm text-gray-500'>Would you like to make a load ?</p>
              <div className='mt-5 flex gap-5'>
                <button
                  onClick={() => setIsOpen(false)}
                  className='cursor-pointer gap-2 rounded-md bg-red-700 px-5 py-2 text-white transition-colors hover:bg-gray-800'
                >
                  No
                </button>
                <button
                  onClick={handleSubmitOnLoan}
                  type='submit'
                  className='cursor-pointer gap-2 rounded-md bg-lime-700 px-5 py-2 text-white transition-colors hover:bg-gray-800'
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
