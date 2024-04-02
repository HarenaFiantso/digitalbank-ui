'use client';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useState } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type TTransactionByCategory = {
  category: string;
  amount: number;
};

export default function TransactionByCategoryChart() {
  const getStartDate = (endDate: string) => {
    const endDateObj = new Date(endDate);
    endDateObj.setDate(endDateObj.getDate() - 30);
    return endDateObj.toISOString().split('T')[0];
  };

  const idAccount: string | null = localStorage.getItem('idAccount');
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [startDate, setStartDate] = useState(getStartDate(endDate));
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        data: [] as number[],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(53, 162, 235)'],
        borderColor: ['transparent'],
      },
    ],
  });

  const fetchTransactionByCategoryInADateRange = async () => {
    try {
      const response: Response = await fetch(
        `http://localhost:8080/account/${idAccount}/transaction/by-category?startDate=${startDate}&endDate=${endDate}`,
        {
          method: 'GET',
        }
      );

      const data: TTransactionByCategory[] = await response.json();
      setChartData({
        ...chartData,
        labels: data.map((d: TTransactionByCategory) => d.category),
        datasets: [
          {
            ...chartData.datasets[0],
            data: data.map((d) => d.amount),
          },
        ],
      });
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };

  return (
    <div className='relative w-full overflow-x-auto sm:rounded-lg'>
      <h2 className='my-5 text-xl font-semibold text-blue'>Transaction by category</h2>
      <p className='mb-10 text-sm text-light'>See an analytics view of made your made transaction in a date range</p>
      <div className='flex flex-row gap-5'>
        <div style={{ flex: 1 }} className='flex flex-col gap-5'>
          <label className='block text-sm font-medium text-white' htmlFor='startDate'>
            Start Date:
          </label>
          <input
            type='date'
            id='startDate'
            value={startDate}
            className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
            onChange={(e) => setStartDate(e.target.value)}
          />

          <label className='block text-sm font-medium text-white' htmlFor='endDate'>
            End Date:
          </label>
          <input
            type='date'
            id='endDate'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className='mt-1 w-full rounded-md bg-hover p-2 outline-none '
          />

          <button
            className='w-full rounded-md bg-blue p-2 text-white transition-colors duration-300 hover:bg-gray-800'
            onClick={fetchTransactionByCategoryInADateRange}
          >
            Query
          </button>
        </div>
        <div style={{ flex: 2, alignItems: 'center', justifyItems: 'center' }}>
          <div className='h-[60vh] flex-col items-center justify-center overflow-hidden text-center text-blue'>
            A chart will be appear below if you have chosen a date
            <div className='flex h-full items-center justify-center py-10'>
              <Pie data={chartData} height='full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
