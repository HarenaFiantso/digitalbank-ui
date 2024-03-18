import { CardProps } from '@/types/Card';
import { MdSupervisedUserCircle } from 'react-icons/md';

export default function Card({ item }: CardProps) {
  return (
    <div className='flex h-max w-max cursor-pointer gap-5 rounded-xl bg-main-soft p-5 transition-all hover:bg-hover'>
      <MdSupervisedUserCircle size={24} className='text-blue' />
      <div className='flex flex-col gap-2'>
        <span className='mb-2 font-semibold text-blue'>{item.title}</span>
        <span className='text-2xl'>{item.number}</span>
        <span className='text-sm text-color'>
          <span className={item.change > 0 ? 'text-lime-500' : 'text-red-500'}>{item.change}%</span>{' '}
          {item.change > 0 ? 'more' : 'less'} than previous week
        </span>
      </div>
    </div>
  );
}
