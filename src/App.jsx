import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Movies from "./pages/Movies";
import CalendarPage from "./pages/CalendarPage";
import Analytics from "./pages/Analytics";
import Kanban from "./pages/Kanban";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const linkStyle =
    "px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-100 dark:hover:bg-gray-700";

  const activeStyle =
    "bg-blue-500 text-white dark:bg-blue-600";

  return (
    <BrowserRouter>
      <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 dark:text-white">

        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-xl p-6 flex flex-col">

          {/* Styled Heading */}
          <h1 className="text-3xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent tracking-wide">
            🎬 Movie Admin
          </h1>

          {/* Navigation */}
          <nav className="flex flex-col gap-3 flex-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Movies
            </NavLink>

            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Calendar
            </NavLink>

            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Analytics
            </NavLink>

            <NavLink
              to="/kanban"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              Kanban
            </NavLink>
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg shadow-md hover:scale-105 transition"
          >
            Toggle Theme
          </button>
        </aside>

        {/* Main Section */}
        <div className="flex-1 flex flex-col">

          {/* Top Header */}
          <header className="bg-white dark:bg-gray-800 shadow-md px-8 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-wide">
              Admin Dashboard
            </h2>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </main>

        </div>
      </div>
    </BrowserRouter>
  );
}
