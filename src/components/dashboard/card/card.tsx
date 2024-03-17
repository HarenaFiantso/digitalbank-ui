import { MdSupervisedUserCircle } from 'react-icons/md';

export default function Card() {
  return (
    <div className="bg-main-soft h-max p-5 rounded-xl flex gap-5 cursor-pointer w-max hover:bg-hover transition-all">
      <MdSupervisedUserCircle size={24} className="text-blue" />
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-blue mb-2">Total accounts</span>
        <span className="text-2xl">69</span>
        <span className="text-sm text-color">
          <span className="text-lime-500">
            69%
          </span>{" "}
          More than previous week
        </span>
      </div>
    </div>
  );
}