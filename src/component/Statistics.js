import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsChart from './StatisticsChart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const loadData = useLoaderData().data;
    let total = [];
    loadData.map(datas =>total.push(datas.total));
    console.log(total)
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

    return (
        <div>
            <LineChart width={400} height={300} data={data}></LineChart>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </div>
    );
};

export default Statistics;