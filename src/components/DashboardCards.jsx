export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h3>Total Users</h3>
        <p className="text-2xl font-bold">1200</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h3>Total Tickets</h3>
        <p className="text-2xl font-bold">3400</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h3>Revenue</h3>
        <p className="text-2xl font-bold">₹2,40,000</p>
      </div>
    </div>
  );
}
