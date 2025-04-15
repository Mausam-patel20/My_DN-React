const employees = [
    { name: 'Guy Hawkins', age: 30, email: 'guy@example.com', role: 'UI Designer', phone: '(405) 555-0128', salary: '$240.41' },
    { name: 'Annette Black', age: 23, email: 'annette@example.com', role: 'UX Designer', phone: '(316) 555-0116', salary: '$200.34' },
    { name: 'Ronald Richards', age: 25, email: 'ronald@example.com', role: 'Graphic Designer', phone: '(217) 555-0113', salary: '$184.22' },
    // Add more mock data as needed
  ];
  
  const PayrollTable = () => {
    return (
      <div className="bg-white rounded-lg p-4 shadow mt-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">Here’s your report on Juni</div>
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
            {employees.map((emp, i) => (
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
      </div>
    );
  };
  
  export default PayrollTable;  