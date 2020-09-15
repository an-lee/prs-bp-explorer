import { render } from '@redwoodjs/testing'

import ProducerPage from './ProducerPage'

describe('ProducerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProducerPage />)
    }).not.toThrow()
  })
})
