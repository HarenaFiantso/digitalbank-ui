'use client';

import { Money } from '../../../../public/assets';
import Card from '@/components/dashboard/card/card';
import TransactionTable from '@/components/dashboard/transactions/TransactionTable';
import { cards } from '@/data/data';
import { TCard } from '@/lib/types';
import Image from 'next/image';
import { BiDownload } from 'react-icons/bi';

export default function Dashboard() {
  return (
    <div className='mt-5'>
      <div className='flex flex-wrap justify-between'>
        <div className='w-max rounded-xl bg-main-soft p-8 pt-9'>
          <div className='flex items-center justify-between gap-5'>
            <div>
              <p className='font-bold text-blue'>Welcome back,</p>
              <p className='mb-5 text-2xl'>Fiantso Harena</p>
              <p className='text-sm text-light'>Download your latest statement</p>
            </div>
            <Image src={Money} width={100} height={100} alt='money' />
          </div>
          <div className='mt-6'>
            <button className='flex w-full items-center justify-center gap-2 rounded bg-blue p-2 transition-all hover:bg-blueSoft'>
              <BiDownload size={20} /> Download
            </button>
          </div>
        </div>
        <div className='flex justify-between gap-5'>
          {cards.map((item: TCard) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
      <TransactionTable />
    </div>
  );
}
