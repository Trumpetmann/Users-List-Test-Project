import { render } from '@testing-library/react'

import PersonDetails from './person-details'

const props = {
  id: 1,
  name: 'name',
  email: 'email',
  address: 'address',
  phone: 'phone',
  company: 'company',
}

describe('DoneCount component', () => {
  it('DoneCount snapshot', () => {
    const view = render(<PersonDetails props={props} />)

    expect(view).toMatchSnapshot()
  })
})
