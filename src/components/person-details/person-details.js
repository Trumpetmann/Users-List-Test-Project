import React from 'react'
import './person-details.css'

function PersonDetails({ props }) {
  const { name, email, address, phone, company } = props
  const linkEmail = `mailto:${email}`
  return (
    <li className="person-details">
      <span>{name}</span>
      <span>
        <a href={linkEmail}>{email}</a>
      </span>
      <span>{address}</span>
      <span>{phone}</span>
      <span>{company}</span>
    </li>
  )
}

export default PersonDetails
