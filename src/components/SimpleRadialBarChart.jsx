import React from 'react'
import { data } from '../data';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
  };
  
const SimpleRadialBarChart = () => {
  return (
    <RadialBarChart 
        width={500} 
        height={300} 
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
    >
      <RadialBar 
        minAngle={15}
        label={{ position: 'insideStart', fill: '#000', fontSize: "15px" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend 
        iconSize={10}
        width={120}
        height={140}
        layout='vertical'
        verticalAlign='middle'
        wrapperStyle={style}
      />
    </RadialBarChart>
  )
}

export default SimpleRadialBarChart;
