export const fetchCategories = async () => {
  try {
    const response: Response = await fetch('http://localhost:8080/transaction-category', {
      method: 'GET',
    });
    if (response.ok) {
      return await response.json();
    } else {
      console.error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error while fetching transaction categories', error);
  }
};
