import React from 'react'
import './app-header.css'

function AppHeader({ getData, debounce }) {
  getData = debounce(getData, 300)
  return (
    <header>
      <h1>Список пользователей</h1>
      <input className="new-todo" onChange={getData} placeholder="Поиск по ФИО" />
    </header>
  )
}

export default AppHeader
