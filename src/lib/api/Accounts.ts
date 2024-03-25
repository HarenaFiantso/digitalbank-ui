import { TAccount } from '@/lib/types';

export const fetchAccounts = async (): Promise<TAccount[]> => {
  const response: Response = await fetch('http://localhost:8080/account', {
    method: 'GET',
  });
  return await response.json();
};

export const fetchAccount = async (idAccount: string) => {
  const response: Response = await fetch(`http://localhost:8080/account/${idAccount}`, {
    method: 'GET',
  });
  return await response.json();
};

export const deleteAccount = async (idAccount: string) => {
  try {
    const response: Response = await fetch(`http://localhost:8080/account/${idAccount}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      console.log('Account deleted successfully');
    } else {
      console.error('Failed to delete account');
    }
  } catch (error) {
    console.error('Failed to delete account', error);
  }
};
