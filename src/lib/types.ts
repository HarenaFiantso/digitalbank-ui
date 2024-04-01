import { accountSchema } from '@/lib/validations/accountSchema';
import { ReactElement } from 'react';
import { z } from 'zod';

export type TAccount = {
  idAccount: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  monthlySalary: number;
  overDrafted: boolean;
  balance: TBalance;
  transactions: TTransaction[];
  debt: TDebt | null;
};

export type TDebt = {
  idDebt: string;
  amount: number;
  debtDatetime: Date;
  account: TAccount;
  interestRate: TInterestRate;
};

export type TInterestRate = {
  idInterestRate: string;
  value: number;
};

export type TBalance = {
  idBalance: string;
  idAccount: string;
  balanceDatetime: string;
  amount: number;
};

export type TTransactionCategory = {
  idTransactionCategory: string;
  name: string;
  description: string;
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
