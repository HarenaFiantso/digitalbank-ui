const API_BASE_URL: string = 'http://localhost:8080/transaction';

export const fetchTransactions = async () => {
  try {
    const response: Response = await fetch(`${API_BASE_URL}`, {
      method: 'GET',
    });
    if (response.ok) {
      return await response.json();
    } else {
      console.error('Failed to fetch transactions');
      return [];
    }
  } catch (error) {
    console.error('Error fetching transactions', error);
    return [];
  }
};