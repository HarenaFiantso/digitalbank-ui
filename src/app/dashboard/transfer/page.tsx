import Link from 'next/link';
import React from 'react';

export default function TransferList() {
  return (
    <div className='relative overflow-x-auto'>
      <h2 className='my-5 text-xl font-semibold text-blue'>All transfers made</h2>
      <p className='mb-10 text-sm text-light'>
        Would you like make a transfer?{' '}
        <Link href={'/dashboard/transfer/makeTransfer'} className='hover:underline'>
          Click here
        </Link>
      </p>
    </div>
  );
}
