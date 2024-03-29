import { TAccount } from '@/lib/types';

const API_BASE_URL: string = 'http://localhost:8080/account';

export const fetchAccounts = async (): Promise<TAccount[]> => {
  try {
    const response: Response = await fetch(`${API_BASE_URL}`, {
      method: 'GET',
    });
    if (response.ok) {
      return await response.json();
    } else {
      console.error('Failed to fetch accounts');
      return [];
    }
  } catch (error) {
    console.error('Error fetching accounts', error);
    return [];
  }
};

export const fetchAccount = async (idAccount: string | null) => {
  try {
    const response: Response = await fetch(`${API_BASE_URL}/${idAccount}`, {
      method: 'GET',
    });
    if (response.ok) {
      return await response.json();
    } else {
      console.error(`Failed to fetch account with ID ${idAccount}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching account with ID ${idAccount}`, error);
    return null;
  }
};

export const deleteAccount = async (idAccount: string) => {
  try {
    const response: Response = await fetch(`${API_BASE_URL}/${idAccount}`, {
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

export const fetchTransactionsByIdAccount = async (idAccount: string) => {
  try {
    const response: Response = await fetch(`${API_BASE_URL}/${idAccount}/transaction`, {
      method: 'GET',
    });
    if (response.ok) {
      console.log('Transaction by idAccount retrieved successfully');
    } else {
      console.error('Failed to retrieve transaction by idAccount');
    }
  } catch (error) {
    console.error('Failed to retrieve transaction by idAccount', error);
  }
};
