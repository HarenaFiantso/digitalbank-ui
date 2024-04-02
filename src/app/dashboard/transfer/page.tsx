import { Transfer } from '../../../../public/assets';
import TransferForm from '@/components/dashboard/transfers/transferForm';
import Image from 'next/image';

export default function NewTransfer() {
  return (
    <div className='relative w-full overflow-x-auto sm:rounded-lg'>
      <h2 className='my-5 text-xl font-semibold text-blue'>New transfer</h2>
      <p className='mb-10 text-sm text-light'>Please complete the following forms to make a transfer</p>
      <div className='flex h-full w-full items-center justify-between text-white'>
        <div className='flex h-full w-2/4 items-center justify-center text-center'>
          <Image src={Transfer} width={1000} height={1000} alt='New transaction' />
        </div>
        <TransferForm />
      </div>
    </div>
  );
}
