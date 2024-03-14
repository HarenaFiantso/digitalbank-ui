import { NoAvatar } from '../../../../public/assets';
import MenuLink from '@/components/dashboard/sidebar/menuLink';
import { menuItems } from '@/data/menuItems';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className='sticky top-0 h-full p-5'>
      <div className='mb-5 flex items-center gap-5'>
        <Image className='rounded-full' src={NoAvatar} alt='Avatar' width='50' height='50' />
        <div className='flex flex-col gap-2'>
          <span className='text-lg font-semibold'>Fiantso Harena</span>
          <span className='text-sm font-medium text-[#b7bac1]'>Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map(category => (
          <li key={category.title}>
            <span className='mb-4 text-2 font-semibold text-[#b7bac1]'>{category.title}</span>
            {category.list.map(item => (
              <MenuLink key={item.path} item={item} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}