import React from 'react'

const Visitors = ({ visitors }) => {
  return (
    <div className="w-[100%] text-center py-1">
      <p>Total Visits : {visitors}</p>
    </div>
  )
}

export default Visitors