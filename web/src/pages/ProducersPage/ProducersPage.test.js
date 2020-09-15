import { render } from '@redwoodjs/testing'

import ProducersPage from './ProducersPage'

describe('ProducersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProducersPage />)
    }).not.toThrow()
  })
})
