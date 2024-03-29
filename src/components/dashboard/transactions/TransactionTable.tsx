import { NoAvatar } from '../../../../public/assets';
import { transactions } from '@/data/data';
import { TTransaction } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { BsEye } from 'react-icons/bs';

export default function TransactionTable() {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <h2 className='my-5 text-xl font-semibold text-blue'>Latest transactions 🚀</h2>
      <table className='w-full text-left text-sm text-gray-500 rtl:text-right'>
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
              Amount
            </th>
            <th scope='col' className='px-6 py-3'>
              <span className='sr-only'>Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: TTransaction) => (
            <tr
              key={transaction.id}
              className='border-b capitalize transition-all hover:bg-hover dark:border-gray-700 dark:bg-gray-800'
            >
              <th scope='row' className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                <div className='flex items-center gap-5 '>
                  <Image src={NoAvatar} alt='avatar' width={40} height={40} className='rounded-full object-cover' />
                  <h2>{transaction.name}</h2>
                </div>
              </th>
              <th className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                {transaction.reason}
              </th>
              <th className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                {transaction.type}
              </th>
              <th className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                {transaction.date}
              </th>
              <th className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                {transaction.amount} <span className='text-blue'>MGA</span>
              </th>
              <td className='px-6 py-4 text-right'>
                <Link href='/' className='font-bold hover:underline dark:text-blue'>
                  <BsEye size={20} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
