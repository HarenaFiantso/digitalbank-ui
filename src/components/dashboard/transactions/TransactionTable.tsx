import { NoAvatar } from '../../../../public/assets';
import Image from 'next/image';
import { transactions } from '@/data/TransactionTable';
import Link from 'next/link';
import { BsEye } from 'react-icons/bs';

export default function TransactionTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className='text-xl text-blue font-semibold my-5'>Latest transactions 🚀</h2>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-300 uppercase bg-main-soft">
        <tr>
          <th scope="col" className="px-6 py-3">
            Account name
          </th>
          <th scope="col" className="px-6 py-3">
            Reason
          </th>
          <th scope="col" className="px-6 py-3">
            Transaction type
          </th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
          <th scope="col" className="px-6 py-3">
            Amount
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
        </thead>
        <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}
              className="border-b capitalize dark:bg-gray-800 dark:border-gray-700 hover:bg-hover transition-all">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className='flex items-center gap-5 '>
                <Image src={NoAvatar} alt="avatar" width={40} height={40} className='rounded-full object-cover' />
                <h2>{transaction.name}</h2>
              </div>
            </th>
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {transaction.reason}
            </th>
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {transaction.type}
            </th>
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {transaction.date}
            </th>
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {transaction.amount} <span className="text-blue">MGA</span>
            </th>
            <td className="px-6 py-4 text-right">
              <Link href="/" className="font-bold dark:text-blue hover:underline"><BsEye size={20} /></Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
