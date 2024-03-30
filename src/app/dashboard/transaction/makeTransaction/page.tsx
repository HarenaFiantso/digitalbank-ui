import { MakeTransaction } from '../../../../../public/assets';
import TransactionForm from '@/components/dashboard/transactions/transactionForm';
import Image from 'next/image';

export default function NewTransaction() {
  return (
    <div className='relative w-full overflow-x-auto sm:rounded-lg'>
      <h2 className='my-5 text-xl font-semibold text-blue'>New transaction</h2>
      <p className='mb-10 text-sm text-light'>Please complete the following forms to make a transaction</p>
      <div className='flex h-full w-full items-center justify-between text-white'>
        <TransactionForm />
        <div className='flex h-full w-2/4 items-center justify-center text-center'>
          <Image src={MakeTransaction} width={1000} height={1000} alt='New transaction' />
        </div>
      </div>
    </div>
  );
}
