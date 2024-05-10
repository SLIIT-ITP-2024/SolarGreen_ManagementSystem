import React from 'react'
import './LineChart.scss';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const data1 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Sales',
          data: [3, 2, 2, 1, 5, 6, 7],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          fill: false
        }]
      };
    
      // Data for the second line
      const data2 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Expenses',
          data: [2, 3, 4, 2, 5, 3, 6],
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          fill: false
        }]
      };


  return (
    <div className='linechar-outer'>
        <div className="inner">
            <div className="titile">
                <h3>Inventory</h3>
            </div>
            <div className="chart">
                <Line data={data1} />
                
                    
              
            </div>
        </div>
      
    </div>
  )
}

export default LineChart
