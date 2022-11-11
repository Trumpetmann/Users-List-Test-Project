import React from 'react'
import './done-count.css'

function DoneCount({ doneCount, isLoading, error }) {
  let count = <span className="done-count">Итого {doneCount()}</span>
  if (isLoading || error) {
    count = null
  }
  return <div>{count}</div>
}

export default DoneCount
