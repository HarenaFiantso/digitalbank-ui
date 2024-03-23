import { accountSchema } from '@/lib/validations/accountSchema';
import { ReactElement, ReactNode } from 'react';
import { z } from 'zod';

export type TAccount = {
  idAccount: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  monthlySalary: DoubleRange;
  overDrafted: boolean;
};

export type TCard = {
  id: number;
  title: string;
  number: string;
  change: number;
};

export type TCardProps = {
  item: TCard;
};

export type TPageItem = {
  title: string;
  path: string;
  icon: ReactElement;
};

export type TPageCategory = {
  title: string;
  list: TPageItem[];
};

export type TTransaction = {
  id: number;
  name: string;
  reason: string;
  type: string;
  date: string;
  amount: string;
};

export type TAccountSchema = z.infer<typeof accountSchema>;
