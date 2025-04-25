// __tests__/Sidebar.test.jsx
import { render, screen } from '@testing-library/react'
import Sidebar from '../components/Sidebar'

describe('Sidebar', () => {
  it('renders HRDesk heading', () => {
    render(<Sidebar />)
    expect(screen.getByText('HRDesk')).toBeInTheDocument()
  })

  it('highlights Payroll nav item', () => {
    render(<Sidebar />)
    const payroll = screen.getByText('Payroll')
    expect(payroll).toHaveClass('bg-blue-100')
  })
})