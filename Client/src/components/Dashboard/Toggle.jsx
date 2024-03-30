import React from 'react'

const Toggle = ({handleChange}) => {
  return (
    <div>
      <button className="ml-[500px] bg-green-600 py-5 px-10 mb-10" onClick={handleChange}>
        Toggle
      </button>
    </div>
  )
}

export default Toggle
