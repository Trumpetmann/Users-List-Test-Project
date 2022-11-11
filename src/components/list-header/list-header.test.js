import { render, screen } from '@testing-library/react'

import ListHeader from './list-header'

describe('AppHeader component', () => {
  it('renders AppHeader component', () => {
    render(<ListHeader />)

    expect(screen.getByText('ФИО', 'E-mail', 'Адрес', 'Телефон', 'Компания')).toBeInTheDocument()
  })
})
