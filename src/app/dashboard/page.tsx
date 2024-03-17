import { BiDownload } from 'react-icons/bi';
import Image from 'next/image';
import { Money } from '../../../public/assets';
import Card from '@/components/dashboard/card/card';

export default function Dashboard() {
  return (
    <div className='mt-5'>
      <div className='flex flex-wrap justify-between'>
        {/* OnBoarding cards */}
        <div
          className="bg-main-soft rounded-xl w-max p-8 pt-9">
          <div className="flex gap-5 justify-between items-center">
            <div>
              <p className="font-bold text-blue">Welcome back,</p>
              <p className="text-2xl mb-5">Fiantso Harena</p>
              <p className="text-sm text-light">Download your latest statement</p>
            </div>
            <Image src={Money} width={100} height={100} alt="money" />
          </div>
          <div className="mt-6">
            <button className="bg-blue w-full rounded hover:bg-blueSoft transition-all flex items-center justify-center gap-2 p-2">
              <BiDownload size={20} /> Download
            </button>
          </div>
        </div>

        {/* Overview cards */}
        <div className='cards'>
          <Card />
        </div>
      </div>
    </div>
  );
}
