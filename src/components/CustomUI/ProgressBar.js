import React from 'react'

const ProgressBar = ({ percent }) => {
  const style = {
    width: `${percent}%`
  }

  return (
    <div>
      <div className="w-[100%] bg-blackOlive h-6">
        <div style={style} className="h-[100%] bg-blue" />
      </div>
    </div>
  )
}

export default ProgressBar