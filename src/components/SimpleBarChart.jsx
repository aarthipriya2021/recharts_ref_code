import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';
import { data } from '../data';

const SimpleBarChart = () => {
  return (
    <BarChart 
        width={500}
        height={300}
        data={data}
        margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
    }}>
        <CartesianGrid  />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill='#8884d8' activeBar={<Rectangle fill="pink" stroke="blue" /> } />
        <Bar dataKey="pv" fill='#82ca9d' activeBar={<Rectangle fill="gold" stroke="purple" /> } />
    </BarChart>
  )
}

export default SimpleBarChart
