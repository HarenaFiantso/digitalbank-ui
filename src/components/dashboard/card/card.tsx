import { MdSupervisedUserCircle } from 'react-icons/md';

/* TODO: Should add an explicit type for item */
export default function Card({ item }) {
  return (
    <div className="bg-main-soft h-max p-5 rounded-xl flex gap-5 cursor-pointer w-max hover:bg-hover transition-all">
      <MdSupervisedUserCircle size={24} className="text-blue" />
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-blue mb-2">{item.title}</span>
        <span className="text-2xl">{item.number}</span>
        <span className="text-sm text-color">
          <span className={item.change > 0 ? "text-lime-500" : "text-red-500"}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
}