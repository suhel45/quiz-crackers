import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsChart from './StatisticsChart';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const loadData = useLoaderData().data;
    let total = [];
    loadData.map(datas =>total.push({name:datas.name,total:datas.total}));
    console.log(total)
    const data = [{name: 'Page A', uv: total, pv: 2400, amt: 2400}];

    return (
        <div>
        <BarChart
        width={500}
        height={400}
        data={total}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="total" />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </div> 
    );
};

export default Statistics;