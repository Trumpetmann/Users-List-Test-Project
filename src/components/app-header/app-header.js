import React from 'react'
import './app-header.css'

function AppHeader({ getData }) {
  return (
    <header>
      <h1>Список пользователей</h1>
      <input className="new-todo" onChange={(e) => getData(e.target.value)} placeholder="Поиск по ФИО" />
    </header>
  )
}

export default AppHeader

// value={'Поиск по ФИО'}
