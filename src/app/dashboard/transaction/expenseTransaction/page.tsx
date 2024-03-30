import { MakeTransaction } from '../../../../../public/assets';
import ExpenseTransactionForm from '@/components/dashboard/transactions/expenseTransactionForm';
import Image from 'next/image';

export default function ExpenseTransaction() {
  return (
    <div className='relative w-full overflow-x-auto sm:rounded-lg'>
      <h2 className='my-5 text-xl font-semibold text-blue'>Expense Transaction</h2>
      <p className='mb-10 text-sm text-light'>Please complete the following forms to make an EXPENSE transaction</p>
      <div className='flex h-full w-full items-center justify-between text-white'>
        <ExpenseTransactionForm />
        <div className='flex h-full w-2/4 items-center justify-center text-center'>
          <Image src={MakeTransaction} width={1000} height={1000} alt='New transaction' />
        </div>
      </div>
    </div>
  );
}
