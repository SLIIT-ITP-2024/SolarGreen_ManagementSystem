import React from 'react'
import './StatusCard.scss'
const StatusCard = (props) => {
  return (
    <div className='statusCard-outer'>
        <div className="inner">
            <div className="title">
                <h3>{props.title}</h3>
            </div>
            <div className="count">
                <h3>{props.count}</h3>
            </div>

            
            <div className="bottom">
                
            </div>
        </div>
      
    </div>
  )
}

export default StatusCard
