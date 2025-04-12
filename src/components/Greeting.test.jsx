import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Greeting from './Greeting'

describe('Greeting Component', () => {
  it('renders with a name', () => {
    render(<Greeting name="Alice" />)
    expect(screen.getByText('Hello, Alice!')).toBeInTheDocument()
  })
})