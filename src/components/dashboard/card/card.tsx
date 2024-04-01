import { fetchAccount } from '@/lib/api/Accounts';
import { TAccount } from '@/lib/types';
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { FcDebt } from 'react-icons/fc';
import { MdBalance, MdSupervisedUserCircle } from 'react-icons/md';

export default function Card() {
  const idAccount: string | null = localStorage.getItem('idAccount');
  const [account, setAccount] = useState<TAccount>();

  useEffect(() => {
    fetchAccount(idAccount).then(setAccount);
  }, [idAccount]);

  const isoDate: string | undefined = account?.balance.balanceDatetime;

  let formattedDate: string;

  if (isoDate) {
    formattedDate = format(parseISO(isoDate), 'yyyy-MM-dd');
  } else {
    formattedDate = 'Date not found';
  }

  return (
    <>
      <div className='flex h-max w-max cursor-pointer gap-5 rounded-xl bg-main-soft p-5 transition-all hover:bg-hover'>
        <MdSupervisedUserCircle size={24} className='text-blue' />
        <div className='flex flex-col gap-2'>
          <span className='mb-2 font-semibold text-blue'>Monthly salary</span>
          <span className='text-2xl'>
            {account?.monthlySalary} <span className='text-sm uppercase text-blue'>MGA</span>
          </span>
          <span className='text-sm text-color'>
            <span className='text-lime-500'>Latest update: </span> {formattedDate}
          </span>
        </div>
      </div>

      <div className='flex h-max w-max cursor-pointer gap-5 rounded-xl bg-main-soft p-5 transition-all hover:bg-hover'>
        <MdBalance size={24} className='text-blue' />
        <div className='flex flex-col gap-2'>
          <span className='mb-2 font-semibold text-blue'>Current balance</span>
          <span className='text-2xl'>
            {account?.balance.amount}
            <span className='text-sm uppercase text-blue'> MGA</span>
          </span>
          <span className='text-sm text-color'>
            <span className='text-lime-500'>Latest update: </span> {formattedDate}
          </span>
        </div>
      </div>

      <div className='flex h-max w-max cursor-pointer gap-5 rounded-xl bg-main-soft p-5 transition-all hover:bg-hover'>
        <FcDebt size={24} className='text-blue' />
        <div className='flex flex-col gap-2'>
          <span className='mb-2 font-semibold text-blue'>Total debt</span>
          {account?.debt === null ? (
            <>
              <span className='text-2xl'>No debt</span>
              <span className='text-sm text-color'>No interest rate</span>
            </>
          ) : (
            <>
              <span className='text-2xl'>
                {account?.debt?.amount} <span className='text-sm uppercase text-blue'>MGA</span>
              </span>
              <span className='text-sm text-color'>
                <span className='text-lime-500'>Interest rate:</span> {account?.debt?.interestRate?.value}
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
