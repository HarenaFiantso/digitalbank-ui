export interface CardItem {
  id: number;
  title: string;
  number: string;
  change: number;
}

export interface CardProps {
  item: {
    id: number;
    title: string;
    number: string;
    change: number;
  };
}
