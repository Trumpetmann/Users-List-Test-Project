import React from 'react'
import { SpinnerRoundFilled } from 'spinners-react'

import PersonDetails from '../person-details'
import './users-list.css'

function UsersList({ personsData, isLoading, error }) {
  if (error) return <h2>We have a problem</h2>

  let elements
  if (isLoading) {
    elements = (
      <div className="loading">
        <SpinnerRoundFilled className="spinner" />
        <h2>LOADING...</h2>
      </div>
    )
  } else if (Array.isArray(personsData)) {
    elements = personsData.map((el) => <PersonDetails props={el} key={el.id} />)
  }

  return <ul className="user-list">{elements}</ul>
}
export default UsersList
