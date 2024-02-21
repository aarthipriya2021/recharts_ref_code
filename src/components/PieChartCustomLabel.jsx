import React from 'react';
import { pieData_01 } from '../data';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8E7AB5"];

const RADIAN = Math.PI / 180; 

const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text
            x={x} y= {y} 
            textAnchor={x > cx ? "start" : "end"} 
            fill="#fff" 
            dominantBaseline="central"
        >
            {`${(percent *  100).toFixed(0)}%`}
        </text>
    )
}

const PieChartCustom = () => {
  return (
    <PieChart width={400} height={400}>
        <Pie
            data={pieData_01}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            datakey="value"
        
        >
        {pieData_01.map((entry, index) => (
            <Cell key ={`cell-${index}`}  fill={COLORS[index % COLORS.length]}   />
        ))}
        </Pie>
    </PieChart>
  )
}

export default PieChartCustom;
