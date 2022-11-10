import React from 'react'
import './list-header.css'

function ListHeader({ nameSort }) {
  return (
    <div className="list-header">
      <span>
        <button type="button" onClick={() => nameSort()}>
          ФИО
        </button>
      </span>
      <span>E-mail</span>
      <span>Адрес</span>
      <span>Телефон</span>
      <span>Компания</span>
    </div>
  )
}

export default ListHeader
