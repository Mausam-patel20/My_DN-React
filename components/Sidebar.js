const Sidebar = () => {
    return (
      <aside className="w-64 bg-white h-screen shadow-md p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-8">HRDesk</h1>
          <nav className="space-y-2">
            {['Dashboard', 'Payroll', 'Recruitment', 'Calendar', 'Document', 'People'].map(item => (
              <div
                key={item}
                className={`p-2 rounded-lg cursor-pointer ${
                  item === 'Payroll' ? 'bg-blue-100 text-blue-600 font-semibold' : 'hover:bg-gray-100'
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
          <div className="mt-6 text-sm text-gray-500">Tools</div>
          <div className="mt-2 space-y-2">
            <div className="p-2 hover:bg-gray-100 rounded">Support</div>
            <div className="p-2 hover:bg-gray-100 rounded">Settings</div>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-6">
          <img
            src="/profile-pic.jpg"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-sm">Mausam Patel</div>
            <div className="text-xs text-gray-500">admin@mausam.top</div>
          </div>
        </div>
      </aside>
    );
  };
  
  export default Sidebar;  