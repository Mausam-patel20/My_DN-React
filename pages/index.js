import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import PayrollTable from '../components/PayrollTable';

export default function Home() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <Topbar />
        <PayrollTable />
      </main>
    </div>
  );
}