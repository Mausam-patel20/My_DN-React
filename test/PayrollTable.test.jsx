// __tests__/PayrollTable.test.jsx
import { render, screen } from '@testing-library/react'
import PayrollTable from '../components/PayrollTable'

describe('PayrollTable', () => {
  it('renders employee names', () => {
    render(<PayrollTable />)
    expect(screen.getByText('Guy Hawkins')).toBeInTheDocument()
    expect(screen.getByText('Annette Black')).toBeInTheDocument()
  })

  it('shows correct salary', () => {
    render(<PayrollTable />)
    expect(screen.getByText('$240.41')).toBeInTheDocument()
  })
})