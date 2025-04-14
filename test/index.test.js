import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home Page', () => {
  it('renders heading', () => {
    render(<Home />)
    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })
})
