import { TAccount } from '@/lib/types';

const API_BASE_URL: string = 'http://localhost:8080/account';

const handleAPIResponse = async (response: Response) => {
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Failed to fetch data');
  }
};

export const fetchAccounts = async (): Promise<TAccount[]> => {
  try {
    const response: Response = await fetch(`${API_BASE_URL}`, {
      method: 'GET',
    });
    return await handleAPIResponse(response);
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
    return await handleAPIResponse(response);
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

export const fetchTransactionsByIdAccount = async (idAccount: string | null) => {
  try {
    const response: Response = await fetch(`${API_BASE_URL}/${idAccount}/transaction`, {
      method: 'GET',
    });
    return await handleAPIResponse(response);
  } catch (error) {
    console.error('Failed to retrieve transaction by idAccount', error);
  }
};
