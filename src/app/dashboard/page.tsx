import { BsCurrencyDollar } from 'react-icons/bs';
import Button from '@/components/common/Button';
import { BiDownload } from 'react-icons/bi';

export default function Dashboard() {
  return (
    <div className='mt-5'>
      <div className='flex flex-wrap justify-between'>
        <div
          className="bg-main-soft h-44 rounded-xl w-max p-8 pt-9">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Hello</p>
              <p className="text-2xl">Fiantso Harena</p>
            </div>
            {/* Image */}

          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="main-soft"
              text="Download"
              bgHoverColor="hover"
              icon={<BiDownload />}
              size="md"
              width="max"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
