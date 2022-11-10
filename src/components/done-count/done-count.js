import React from 'react'
import './done-count.css'

function DoneCount({ doneCount, isLoading }) {
  const count = isLoading ? null : <span className="done-count">Итого {doneCount()}</span>
  return <div>{count}</div>
}

export default DoneCount
