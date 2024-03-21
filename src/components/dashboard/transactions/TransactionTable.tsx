import { NoAvatar } from '../../../../public/assets';
import Image from 'next/image';
import { transactions } from '@/data/TransactionTable';

export default function TransactionTable() {
  return (
    <div className="bg-main-soft p-5 rounded-xl mt-5">
      <h2 className="mb-5 text-xl font-semibold text-blue">Latest Transactions 🚀</h2>
      <table className="w-full">
        <thead>
        <tr className="mb-2">
          <td className="p-2 text-color">Name</td>
          <td className="p-2 text-color">Reason</td>
          <td className="p-2 text-color">Type</td>
          <td className="p-2 text-color">Date</td>
          <td className="p-2 text-color">Amount</td>
        </tr>
        </thead>
        <tbody>
        {transactions.map(transaction => (
          <>
            <tr key={transaction.id}>
              <td>
                <div className="flex gap-2 items-center">
                  <Image src={NoAvatar} width={40} height={40} alt="avatar" className="object-cover rounded-full" />
                  {transaction.name}
                </div>
              </td>
              <td>{transaction.reason.slice(0, 30)}</td>
              <td>
              <span className={`rounded p-2 text-sm font-bold text-center ${transaction.type === 'Credit' ? 'bg-lime-800' : 'bg-[#f7737375]'}`}>
                {transaction.type}
              </span>
              </td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
            </tr>
            <br />
          </>
        ))}
        </tbody>
      </table>
    </div>
  );
}
