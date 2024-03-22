import { TAccount } from '@/lib/types';

export const fetchAccounts = async (): Promise<TAccount[]> => {
  const response: Response = await fetch('http://localhost:8080/account', {
    method: 'GET',
  });
  return await response.json();
};
