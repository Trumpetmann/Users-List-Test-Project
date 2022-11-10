import React from 'react'
import './done-count.css'

function DoneCount({ doneCount }) {
  return <span className="done-count">Итого {doneCount()}</span>
}

export default DoneCount
