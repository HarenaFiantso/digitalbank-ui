'use client';

import { TAccountSchema } from '@/lib/types';
import { accountSchema } from '@/lib/validations/accountSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function AddAccountForm() {
  const router: AppRouterInstance = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAccountSchema>({
    resolver: zodResolver(accountSchema),
  });

  const onSubmit = async (data: TAccountSchema) => {
    try {
      const response: Response = await fetch('http://localhost:8080/account', {
        method: 'PUT',
        body: JSON.stringify([data]),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
      } else {
        router.push('/chooseAccount');
      }
      const result = await response.json();
      console.log('Success:', result);
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <label htmlFor='firstName' className='block text-sm font-medium text-white'>
        First name
      </label>
      <input
        {...register('firstName')}
        id='firstName'
        type='text'
        className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
      />
      {errors.firstName?.message && <span className='text-xs text-red-500'>{errors.firstName?.message}</span>}

      <label htmlFor='lastName' className='block text-sm font-medium text-white'>
        Last Name
      </label>
      <input
        {...register('lastName')}
        id='lastName'
        type='text'
        className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
      />
      {errors.lastName?.message && <span className='text-xs text-red-500'>{errors.lastName?.message}</span>}

      <label htmlFor='birthDate' className='block text-sm font-medium text-white'>
        Birth Date
      </label>
      <input {...register('birthDate')} type='date' className='mt-1 w-full rounded-md bg-hover p-2 outline-none ' />
      {errors.birthDate?.message && <span className='text-xs text-red-500'>{errors.birthDate?.message}</span>}

      <label htmlFor='monthlySalary' className='block text-sm font-medium text-white'>
        Monthly Salary
      </label>
      <input
        {...register('monthlySalary')}
        id='monthlySalary'
        type='number'
        className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
      />
      {errors.monthlySalary?.message && <span className='text-xs text-red-500'>{errors.monthlySalary?.message}</span>}

      <label htmlFor='overDrafted' className='block text-sm font-medium text-white'>
        Over Drafted <span className='text-xs text-gray-500 '>(True or False)</span>{' '}
      </label>
      <select
        {...register('overDrafted')}
        id='overDrafted'
        className='mt-1 w-full rounded-md bg-hover p-2 outline-none'
      >
        <option value='true'>True</option>
        <option value='false'>False</option>
      </select>
      {errors.overDrafted?.message && <span className='text-xs text-red-500'>{errors.overDrafted?.message}</span>}

      <button
        disabled={isSubmitting}
        type='submit'
        className='w-full rounded-md bg-blue p-2 text-white transition-colors duration-300 hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
      >
        Create account
      </button>
    </form>
  );
}
