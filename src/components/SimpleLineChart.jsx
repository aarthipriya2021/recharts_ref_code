import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { data } from "../data"

const SimpleLineChart = () => {
  return (
    <LineChart
        width={800}
        height={400}
        data={data}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type={'monotone'} dataKey="pv" stroke='#8884d8' activeDot={{ r : 8 }} />
        <Line type={'monotone'} dataKey="uv" stroke='#82ca9d' activeDot={{ r : 8 }} />
    </LineChart>
  )
}

export default SimpleLineChart
