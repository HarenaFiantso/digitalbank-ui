import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { lineChartData } from '@/data/data';

export default function Chart() {
  return (
    <div className='my-5 h-[450px] py-5'>
      <h2 className='my-5 text-xl font-semibold text-blue'>Weekly recapitulation ✅</h2>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={lineChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip contentStyle={{ background: '#151c2c', border: 'none' }} />
          <Legend />
          <Line type='monotone' dataKey='visit' stroke='#8884d8' strokeDasharray='5 5' />
          <Line type='monotone' dataKey='click' stroke='#82ca9d' strokeDasharray='3 4 5 2' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
