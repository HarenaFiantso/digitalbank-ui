import { TAccount } from '@/lib/types';
import { MdBalance, MdSupervisedUserCircle } from 'react-icons/md';
import { FcDebt } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import { fetchAccount } from '@/lib/api/Accounts';

export default function Card() {
  const idAccount: string | null = localStorage.getItem('idAccount');
  const [account, setAccount] = useState<TAccount>();

  useEffect(() => {
    fetchAccount(idAccount).then(setAccount);
  }, []);

  return (
    <>
      <div
        className="flex h-max w-max cursor-pointer gap-5 rounded-xl bg-main-soft p-5 transition-all hover:bg-hover">
        <MdSupervisedUserCircle size={24} className="text-blue" />
        <div className="flex flex-col gap-2">
          <span className="mb-2 font-semibold text-blue">Monthly salary</span>
          <span className="text-2xl">{account?.monthlySalary} <span
            className="text-sm text-blue uppercase">MGA</span></span>
          <span className="text-sm text-color">
          <span className="text-lime-500">12%</span>{' '}
            More than last month
        </span>
        </div>
      </div>

      <div className="flex h-max w-max cursor-pointer gap-5 rounded-xl bg-main-soft p-5 transition-all hover:bg-hover">
        <MdBalance size={24} className="text-blue" />
        <div className="flex flex-col gap-2">
          <span className="mb-2 font-semibold text-blue">Current balance</span>
          <span className="text-2xl">760.000<span className="text-sm text-blue uppercase">MGA</span></span>
          <span className="text-sm text-color">
          <span className="text-lime-500">6%</span>{' '}
            More than previous week
        </span>
        </div>
      </div>

      <div className="flex h-max w-max cursor-pointer gap-5 rounded-xl bg-main-soft p-5 transition-all hover:bg-hover">
        <FcDebt size={24} className="text-blue" />
        <div className="flex flex-col gap-2">
          <span className="mb-2 font-semibold text-blue">Total debt</span>
          <span className="text-2xl"> -55.000 <span className="text-sm text-blue uppercase">MGA</span></span>
          <span className="text-sm text-color">
          <span className="text-lime-500">2%</span>{' '}
            More than previous week
        </span>
        </div>
      </div>
    </>
  );
}
