import { useState } from 'react'

const employees = [
  { name: 'Guy Hawkins', age: 30, email: 'guy@example.com', role: 'UI Designer', phone: '(405) 555-0128', salary: '$240.41' },
  { name: 'Annette Black', age: 23, email: 'annette@example.com', role: 'UX Designer', phone: '(316) 555-0116', salary: '$200.34' },
  { name: 'Ronald Richards', age: 25, email: 'ronald@example.com', role: 'Graphic Designer', phone: '(217) 555-0113', salary: '$184.22' },
  { name: 'Kathryn Murphy', age: 28, email: 'kathryn@example.com', role: 'Product Designer', phone: '(505) 555-0114', salary: '$198.14' },
  { name: 'Cody Fisher', age: 35, email: 'cody@example.com', role: 'Developer', phone: '(320) 555-0125', salary: '$220.00' },
  { name: 'Leslie Alexander', age: 31, email: 'leslie@example.com', role: 'Backend Dev', phone: '(305) 555-0143', salary: '$212.99' },
  { name: 'Devon Lane', age: 29, email: 'devon@example.com', role: 'QA Engineer', phone: '(401) 555-0172', salary: '$190.52' },
  // ➕ Add more if needed
]

const ITEMS_PER_PAGE = 4

const PayrollTable = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // 1. Filter by search
  const filtered = employees.filter(emp =>
    [emp.name, emp.email, emp.role].some(field =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  // 2. Pagination logic
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
  const currentData = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE)

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // reset to first page on new search
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow mt-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search employees..."
          className="border rounded px-3 py-2 w-64 text-sm"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">+ Add Employee</button>
      </div>

      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left border-b text-gray-600">
            <th className="py-2">Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Phone</th>
            <th className="text-green-600">Salary</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((emp, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="py-2">{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.email}</td>
              <td>{emp.role}</td>
              <td>{emp.phone}</td>
              <td className="text-green-600 font-medium">{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          Showing {startIdx + 1} to {Math.min(startIdx + ITEMS_PER_PAGE, filtered.length)} of {filtered.length} results
        </div>

        <div className="flex gap-1">
          <button
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border text-sm disabled:opacity-50"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-3 py-1 rounded border text-sm ${
                currentPage === idx + 1 ? 'bg-blue-600 text-white' : ''
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border text-sm disabled:opacity-50"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default PayrollTable