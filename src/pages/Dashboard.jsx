export default function Dashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Dashboard Overview</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-300">
            Users
          </h3>
          <p className="text-3xl mt-3 font-bold text-blue-600">1,245</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-300">
            Tickets
          </h3>
          <p className="text-3xl mt-3 font-bold text-green-600">3,420</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-300">
            Revenue
          </h3>
          <p className="text-3xl mt-3 font-bold text-purple-600">₹9,40,000</p>
        </div>
      </div>
    </div>
  );
}
