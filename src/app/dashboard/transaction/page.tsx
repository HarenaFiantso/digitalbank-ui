'use client'

import { useEffect, useState } from 'react';
import { fetchTransactions } from '@/lib/api/Transactions';

export default function TransactionList() {
  const [transaction, setTransaction] = useState();

  useEffect(() => {
    fetchTransactions().then(setTransaction)
  }, []);

  console.log(transaction)
  return <>Transaction List</>;
}
