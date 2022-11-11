import { render, screen } from '@testing-library/react'

import UsersList from './users-list'

const data = [
  {
    id: 1,
    name: 'name',
    email: 'email',
    address: 'address',
    phone: 'phone',
    company: 'company',
  },
  {
    id: 2,
    name: 'name2',
    email: 'email2',
    address: 'address2',
    phone: 'phone2',
    company: 'company2',
  },
]

describe('UserList component', () => {
  it('UserList renders', () => {
    render(<UsersList personsData={data} />)

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(
      screen.getByText(
        'name',
        'email',
        'address',
        'phone',
        'company',
        'name2',
        'email2',
        'address2',
        'phone2',
        'company2'
      )
    ).toBeInTheDocument()
  })
  it('UserList renders without data', () => {
    render(<UsersList />)

    expect(screen.getByRole('list')).toBeInTheDocument()
  })
  it('UsersList snapshot', () => {
    const view = render(<UsersList personsData={data} />)

    expect(view).toMatchSnapshot()
  })
  it('UsersList empty snapshot', () => {
    const view = render(<UsersList />)

    expect(view).toMatchSnapshot()
  })
})
