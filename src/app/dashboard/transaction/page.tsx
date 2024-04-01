'use client';

import { NoAvatar, NoTransaction } from '../../../../public/assets';
import { fetchTransactionsByIdAccount } from '@/lib/api/Accounts';
import { deleteTransaction } from '@/lib/api/Transactions';
import { TTransaction } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';

export default function TransactionList() {
  const [transactions, setTransactions] = useState<TTransaction[]>([]);
  const idAccount: string | null = localStorage.getItem('idAccount');

  useEffect(() => {
    fetchTransactionsByIdAccount(idAccount).then(setTransactions);
  }, [idAccount]);

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
    <div className='relative overflow-x-auto'>
      <h2 className='my-5 text-xl font-semibold text-blue'>All transactions</h2>
      <p className='mb-10 text-sm text-light'>
        Would you like make a transaction?{' '}
        <Link href={'/dashboard/transaction/makeTransaction'} className='hover:underline'>
          Click here
        </Link>
      </p>
      {transactions.length > 0 ? (
        transactions.map((transaction: TTransaction) => (
          <table key={transaction.idTransaction} className='w-full text-sm text-gray-500'>
            <tbody>
              <tr
                key={transaction.idTransaction}
                className='border-b capitalize transition-all hover:bg-hover dark:border-gray-700 dark:bg-gray-800'
              >
                <th scope='row' className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                  <div className='flex items-center gap-5 '>
                    <Image src={NoAvatar} alt='avatar' width={40} height={40} className='rounded-full object-cover' />
                    <h2>You</h2>
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
          <Image src={NoTransaction} width={500} height={500} alt='no transaction' />
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