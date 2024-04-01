'use client';

import { NoAvatar, NoTransaction } from '../../../../public/assets';
import { fetchTransactionsByIdAccount } from '@/lib/api/Accounts';
import { deleteTransaction } from '@/lib/api/Transactions';
import { TAccount, TTransaction } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';

export default function TransactionTable({ account }: { account: TAccount | undefined }) {
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
      <h2 className='my-5 text-xl font-semibold text-blue'>Latest transactions 🚀</h2>
      <table className='w-full text-left text-sm text-gray-500 rtl:text-right'>
        {Array.isArray(account?.transactions) && account?.transactions.length > 0 ? (
          account?.transactions.map((transaction: TTransaction) => (
            <tbody key={transaction?.idTransaction}>
              <tr className='border-b capitalize transition-all hover:bg-hover dark:border-gray-700 dark:bg-gray-800'>
                <th scope='row' className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                  <div className='flex items-center gap-5 '>
                    <Image src={NoAvatar} alt='avatar' width={40} height={40} className='rounded-full object-cover' />
                    <h2>You</h2>
                  </div>
                </th>
                <th className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                  {transaction?.reason}
                </th>
                <th
                  className={`flex items-center gap-2 whitespace-nowrap px-6 py-6 font-medium ${transaction?.transactionType === 'EXPENSE' ? 'text-red-500' : 'text-lime-500'}`}
                >
                  {transaction?.transactionType === 'EXPENSE' ? <MdArrowUpward /> : <MdArrowDownward />}
                  {transaction?.transactionType}
                </th>
                <th className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                  {transaction?.transactionDatetime.toString()}
                </th>
                <th className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                  {transaction?.category?.name}
                </th>
                <th
                  className={`whitespace-nowrap px-6 py-4 font-medium ${transaction.amount < 0 ? 'text-red-500' : 'text-white'}`}
                >
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
          ))
        ) : (
          <div className='flex flex-col items-center justify-between'>
            <Image src={NoTransaction} width={300} height={300} alt='no transaction' />
            <h1 className='font-bold text-gray-500'>No Transaction found</h1>
            <Link
              href={'/dashboard/transaction/makeTransaction'}
              className='mt-5 rounded-lg bg-blue px-5 py-2 text-sm font-bold text-white transition-all hover:bg-hover'
            >
              New Transaction
            </Link>
          </div>
        )}
      </table>
    </div>
  );
}
