const Topbar = () => {
    return (
      <div className="flex justify-between items-center py-4 px-6 bg-white border-b">
        <h2 className="text-xl font-bold">Payroll Details</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-3 py-1 text-sm w-64"
          />
          <div className="w-5 h-5 bg-gray-200 rounded-full" />
        </div>
      </div>
    );
  };
  
  export default Topbar;  