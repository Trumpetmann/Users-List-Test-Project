import { render, screen } from '@testing-library/react'

import AppHeader from './app-header'

const getData = jest.fn()
const debounce = jest.fn()

describe('AppHeader component', () => {
  it('renders AppHeader component', () => {
    render(<AppHeader getData={getData} debounce={debounce} />)

    expect(screen.getByText('Список пользователей')).toBeInTheDocument()
  })
})
