import React from 'react'
import{Chart as ChartJS } from "chart.js/auto";
import { Bar } from 'react-chartjs-2';
import './statChart.scss';
const StatisticChart = () => {
  return (
    <div className='statistic-char-outer'>
        <div className="inner">
            <div className="title">
                <h3>Statistics</h3>
            </div>
            <div className="chart">
            <Bar
               
                data={
                    {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        datasets: [
                            {
                                label: 'Sales for 2024 (M)',
                                data: [3, 2, 2, 1, 5, 6, 7],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(255, 99, 132, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                    'rgba(255, 99, 132, 1)',
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }
            }
                
            />
            </div>
        </div>
        
    </div>
  )
}

export default StatisticChart
