import { BiCheck } from 'react-icons/bi';

export default function TransactionForm() {
  return (
    <form style={{ flex: 2 }} className='space-y-4'>
      <label htmlFor='transactionType' className='block text-sm font-medium text-white'>
        Transaction type <span className='text-xs text-gray-500 '>(Expense or Income)</span>{' '}
      </label>
      <select id='transactionType' className='mt-1 w-full rounded-md bg-hover p-2 outline-none'>
        <option value='expense'>Expense</option>
        <option value='income'>Income</option>
      </select>

      <label htmlFor='amount' className='block text-sm font-medium text-white'>
        Amount
      </label>
      <input id='amount' type='number' className='mt-1 w-full rounded-md bg-hover p-2 outline-none ' />

      <label htmlFor='transactionDatetime' className='block text-sm font-medium text-white'>
        Choose a date
      </label>
      <input type='date' className='mt-1 w-full rounded-md bg-hover p-2 outline-none ' />

      <label htmlFor='reason' className='block text-sm font-medium text-white'>
        Reason
      </label>
      <textarea id='reason' className='mt-1 w-full resize-none rounded-md bg-hover p-2 outline-none ' />

      <label htmlFor='category' className='block text-sm font-medium text-white'>
        Category
      </label>
      <select id='category' className='mt-1 w-full rounded-md bg-hover p-2 outline-none'>
        <option value='travel'>Travel</option>
        <option value='others'>Others</option>
      </select>

      <button
        type='submit'
        className='flex w-full items-center justify-center gap-2 rounded-md bg-blue p-2 text-white transition-colors duration-300 hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
      >
        Make transaction <BiCheck size={20} className='text-lime-500' />
      </button>
    </form>
  );
}
