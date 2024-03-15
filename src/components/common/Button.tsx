import { ReactNode } from 'react';

interface ButtonProps {
  icon: ReactNode;
  bgColor: string;
  color: string;
  bgHoverColor: string;
  size: string;
  text: string;
  width: string;
}

export default function Button({
                                 icon,
                                 bgColor,
                                 color,
                                 bgHoverColor,
                                 size,
                                 text,
                                 width,
                               }: ButtonProps): ReactNode {

  return (
    <button
      type="button"
      className={`text-${size} p-3 w-${width} bg-${bgColor} rounded-[10px] text-${color} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
}