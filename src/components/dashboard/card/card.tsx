import { MdSupervisedUserCircle } from 'react-icons/md';

export default function Card() {
  return (
    <div className="container">
      <MdSupervisedUserCircle size={24} />
      <div className="text">
        <span className="title">Title</span>
        <span className="number">Number</span>
        <span className="details">
          <span className="">
            69%
          </span>{' '}
          More than previous week
        </span>
      </div>
    </div>
  );
}