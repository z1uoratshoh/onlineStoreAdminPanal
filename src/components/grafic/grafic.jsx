import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', orders: 20 },
  { name: 'Feb', orders: 30 },
  { name: 'Mar', orders: 50 },
  { name: 'Apr', orders: 70 },
  { name: 'May', orders: 80 },
  { name: 'Jun', orders: 60 },
  { name: 'Jul', orders: 50 },
  { name: 'Aug', orders: 90 },
  { name: 'Sep', orders: 80 },
  { name: 'Oct', orders: 70 },
  { name: 'Nov', orders: 50 },
  { name: 'Dec', orders: 60 },
];

const MyLineChart = () => {
  return (
    <ResponsiveContainer  height={350} className="xs:w-[400px]">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="4 " />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="orders" stroke="#1E5EFF"  activeDot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MyLineChart;
