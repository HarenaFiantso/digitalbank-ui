'use client';

import { NoAvatar, NoTransaction } from '../../../../public/assets';
import { deleteTransaction, fetchTransactions } from '@/lib/api/Transactions';
import { TTransaction } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';

export default function TransactionTable() {
  const [transactions, setTransactions] = useState<TTransaction[]>([]);

  useEffect(() => {
    fetchTransactions().then(setTransactions);
  }, []);

  const handleDelete = async (idTransaction: string) => {
    try {
      await deleteTransaction(idTransaction);
      setTransactions(transactions.filter((transaction: TTransaction) => transaction.idTransaction !== idTransaction));
      console.log('Transaction deleted successfully');
    } catch (error) {
      console.error('Failed to delete transaction', error);
    }
  };

  return (
    <div className='relative overflow-x-auto sm:rounded-lg'>
      <h2 className='my-5 text-xl font-semibold text-blue'>Latest transactions 🚀</h2>
      {transactions.length > 0 ? (
        transactions.map((transaction: TTransaction) => (
          <table key={transaction.idTransaction} className='w-full text-left text-sm text-gray-500 rtl:text-right'>
            <thead className='bg-main-soft text-xs uppercase text-gray-300'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Account name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Reason
                </th>
                <th scope='col' className='px-6 py-3'>
                  Transaction type
                </th>
                <th scope='col' className='px-6 py-3'>
                  Date
                </th>
                <th scope='col' className='px-6 py-3'>
                  Category
                </th>
                <th scope='col' className='px-6 py-3'>
                  Amount
                </th>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                key={transaction.idTransaction}
                className='border-b capitalize transition-all hover:bg-hover dark:border-gray-700 dark:bg-gray-800'
              >
                <th scope='row' className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                  <div className='flex items-center gap-5 '>
                    <Image src={NoAvatar} alt='avatar' width={40} height={40} className='rounded-full object-cover' />
                    <h2>{transaction.account.firstName}</h2>
                  </div>
                </th>
                <th className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                  {transaction.reason}
                </th>
                <th className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                  {transaction.transactionType}
                </th>
                <th className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                  {transaction.transactionDatetime.toString()}
                </th>
                <th className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                  {transaction.category.name}
                </th>
                <th className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                  {transaction.amount} <span className='text-blue'>MGA</span>
                </th>
                <td className='px-6 py-4 text-right'>
                  <button
                    className='font-bold text-red-500'
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(transaction.idTransaction).then((r: void) => console.log(r));
                    }}
                  >
                    <BiTrash size={20} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <div className='flex flex-col items-center justify-between'>
          <Image src={NoTransaction} width={300} height={300} alt='no transaction' />
          <h1 className='font-bold text-gray-500'>No Transaction found</h1>
          <Link
            href={'/dashboard/transaction/makeTransaction'}
            className='mt-5 rounded-lg bg-blue px-5 py-2 text-sm font-bold transition-all hover:bg-hover'
          >
            New Transaction
          </Link>
        </div>
      )}
    </div>
  );
}
