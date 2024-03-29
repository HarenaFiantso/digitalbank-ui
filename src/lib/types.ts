import { accountSchema } from '@/lib/validations/accountSchema';
import { ReactElement, ReactNode } from 'react';
import { z } from 'zod';

export type TAccount = {
  idAccount: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  monthlySalary: number;
  overDrafted: boolean;
};

export type TBalance = {
  idBalance: string;
  idAccount: string;
  currentBalance: number;
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
  idTransaction: string;
  account: TAccount;
  category: TCategory;
  reason: string;
  type: string;
  transactionDatetime: Date;
  transactionType: string;
  amount: string;
  transfer: null;
};

export type TCategory = {
  idTransactionCategory: string;
  name: string;
  description: string;
};

export type TAccountSchema = z.infer<typeof accountSchema>;
