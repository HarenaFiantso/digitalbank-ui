export const fetchAccounts = async (): Promise<Account[]> => {
  const response: Response = await fetch('http://localhost:8080/account', {
    method: 'GET'
  });
  return await response.json();
}