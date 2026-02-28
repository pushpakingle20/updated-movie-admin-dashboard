import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded transition-colors duration-300 ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    }`;

  return (
    <div className="w-60 bg-white dark:bg-gray-800 h-screen p-5 shadow transition-colors duration-300">
      
      <h2 className="text-xl font-bold mb-6 dark:text-white">
        Movie Admin
      </h2>

      <div className="space-y-2">
        <Link to="/" className={linkClass("/")}>
          Dashboard
        </Link>

        <Link to="/calendar" className={linkClass("/calendar")}>
          Calendar
        </Link>

        <Link to="/analytics" className={linkClass("/analytics")}>
          Analytics
        </Link>

        <Link to="/movies" className={linkClass("/movies")}>
          Movies
        </Link>
      </div>

    </div>
  );
}

export default Sidebar;
