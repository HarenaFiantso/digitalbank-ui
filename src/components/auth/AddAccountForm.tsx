'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const today: Date = new Date();
const date21YearsAgo: Date = new Date(today.getFullYear() - 21, today.getMonth(), today.getDate());

const addAccountSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  birthDate: z.date().refine((date: Date) => date <= date21YearsAgo, {
    message: 'You should have at least 21 years old',
  }),
  monthlySalary: z.number(),
  overDrafted: z.boolean(),
});

type TAddAccountSchema = z.infer<typeof addAccountSchema>;

export default function AddAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAddAccountSchema>({
    resolver: zodResolver(addAccountSchema),
  });

  const onSubmit = async (data: TAddAccountSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div>
        <label htmlFor='firstName' className='block text-sm font-medium text-white'>
          First name
        </label>
        <input {...register('firstName')} type='text' className='mt-1 w-full rounded-md bg-hover p-2 outline-none ' />
        {errors.firstName && <p className='text-xs text-red-500'>{`${errors.firstName.message}`}</p>}
      </div>
      <div>
        <label htmlFor='lastName' className='block text-sm font-medium text-white'>
          Last Name
        </label>
        <input {...register('lastName')} type='text' className='mt-1 w-full rounded-md bg-hover p-2 outline-none ' />
        {errors.lastName && <p className='text-xs text-red-500'>{`${errors.lastName.message}`}</p>}
      </div>
      <div>
        <label htmlFor='birthDate' className='block text-sm font-medium text-white'>
          Birth Date
        </label>
        <input {...register('birthDate')} type='date' className='mt-1 w-full rounded-md bg-hover p-2 outline-none ' />
        {errors.birthDate && <p className='text-xs text-red-500'>{`${errors.birthDate.message}`}</p>}
      </div>
      <div>
        <label htmlFor='monthlySalary' className='block text-sm font-medium text-white'>
          Monthly Salary
        </label>
        <input
          {...register('monthlySalary')}
          type='number'
          className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
        />
        {errors.monthlySalary && <p className='text-xs text-red-500'>{`${errors.monthlySalary.message}`}</p>}
      </div>
      <div>
        <label htmlFor='overDrafted' className='block text-sm font-medium text-white'>
          Over Drafted <span className='text-xs text-gray-500 '>(True or False)</span>{' '}
        </label>
        <input {...register('overDrafted')} type='text' className='mt-1 w-full rounded-md bg-hover p-2 outline-none ' />
        {errors.overDrafted && <p className='text-xs text-red-500'>{`${errors.overDrafted.message}`}</p>}
      </div>
      <div>
        <button
          disabled={isSubmitting}
          type='submit'
          className='w-full rounded-md bg-blue p-2 text-white transition-colors duration-300 hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
        >
          Create account
        </button>
      </div>
    </form>
  );
}
