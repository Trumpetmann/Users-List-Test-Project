import { render } from '@testing-library/react'

import DoneCount from './done-count'

const doneCount = jest.fn
const isLoading = false
const error = false

describe('DoneCount component', () => {
  it('DoneCount snapshot', () => {
    const view = render(<DoneCount doneCount={doneCount} isLoading={isLoading} error={error} />)

    expect(view).toMatchSnapshot()
  })
})
