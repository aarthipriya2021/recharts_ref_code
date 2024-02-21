import React from 'react'
import { Pie, PieChart } from 'recharts';
import { pieData_01, pieData_02 } from '../data';

const SimplePieChart = () => {
  return (
    <PieChart width={500} height={300}>
        {/* Inner pie chart */}
        <Pie
            data={pieData_01}
            dataKey="value"
            cx="200"
            cy="200"
            outerRadius={60}
            fill='#8884d8'
        />
        <Pie
            data={pieData_02}
            dataKey="value"
            cx="200"
            cy="200"
            innerRadius={70}
            outerRadius={90}
            fill='#82ca9d'
            label
        />
    </PieChart>
  )
}

export default SimplePieChart
