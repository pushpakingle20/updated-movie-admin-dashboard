import { useState, useEffect } from "react";

function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="bg-white dark:bg-gray-900 p-4 shadow flex justify-between transition-colors duration-300">
      <h1 className="text-lg font-semibold dark:text-white">
        Admin Dashboard
      </h1>

      <button
        onClick={() => setDark(!dark)}
        className="border px-3 py-1 rounded dark:text-white"
      >
        {dark ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default Header;
