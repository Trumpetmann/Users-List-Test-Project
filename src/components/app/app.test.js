import { render, screen } from '@testing-library/react'

import App from './app'

describe('App component', () => {
  it('App renders', () => {
    render(<App />)

    expect(screen.getByRole('list')).toBeInTheDocument()
  })
})
