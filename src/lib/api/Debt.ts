export const fetchDebt = async () => {
  const response: Response = await fetch('http://localhost:8080/debt', {
    method: 'GET',
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Failed to fetch data');
  }
};
