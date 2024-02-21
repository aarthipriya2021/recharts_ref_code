import React from 'react'
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { data } from "../data";


const SimpleAreaChart = () => {
  return (
    <AreaChart
        width={800}
        height={400}
        data={data}
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />

    </AreaChart>
  )
}

export default SimpleAreaChart
