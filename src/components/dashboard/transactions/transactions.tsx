import { NoAvatar } from '../../../../public/assets';
import Image from 'next/image';

export default function Transactions() {
  return (
    <div className='bg-main-soft p-5 rounded-xl mt-5'>
      <h2 className='mb-5 text-xl font-semibold text-blue'>Latest Transactions</h2>
      <table className='w-full'>
        <thead>
        <tr className="mb-2">
          <td className='p-2 text-color'>Name</td>
          <td className='p-2 text-color'>Status</td>
          <td className='p-2 text-color'>Date</td>
          <td className='p-2 text-color'>Amount</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div className='flex gap-2 items-center'>
              <Image src={NoAvatar} width={40} height={40} alt='avatar' className="object-cover rounded-full" />
              Harena Fiantso
            </div>
          </td>
          <td>
              <span className="rounded-md p-2 text-sm font-bold bg-[#f7cb7375]">
                Pending
              </span>
          </td>
          <td>14.02.2024</td>
          <td>38.000Ar</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
