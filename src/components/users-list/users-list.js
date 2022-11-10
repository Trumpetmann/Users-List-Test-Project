import React from 'react'

import PersonDetails from '../person-details'
import './users-list.css'

function UsersList({ personsData, isLoading, onError }) {
  if (onError) return <h2>We have a problem</h2>

  let elements
  if (isLoading) {
    elements = <h2>LOADING...</h2>
  } else {
    elements = personsData.map((el) => <PersonDetails props={el} key={el.id} />)
  }

  return <ul className="user-list">{elements}</ul>
}
export default UsersList
