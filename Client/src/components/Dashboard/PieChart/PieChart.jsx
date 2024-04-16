import React from 'react'
import { Pie } from 'react-chartjs-2';
import './PieChart.scss'
const PieChart = () => {
  return (
    <div className='pieChart-outer'>
        <div className="inner">
            <div className="title">
                <h3>Payments</h3>
            </div>
            <div className="chart">
            <Pie
                data={
                    {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [
                            {
                                label: 'Sales for 2024 (M)',
                                data: [3, 2, 2, 1, 5, 6],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                   
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                    
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }
            } />
            </div>
        </div>
    </div>
  )
}

export default PieChart