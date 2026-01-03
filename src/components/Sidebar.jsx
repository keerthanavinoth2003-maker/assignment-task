import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6 text-xl font-bold border-b border-gray-700">
        Cliniva
      </div>

      <div className="p-6 text-center">
        <img
          src="https://i.pravatar.cc/100"
          className="w-20 h-20 rounded-full mx-auto mb-2"
        />
        <p className="font-semibold">Ashton Cox</p>
        <p className="text-sm text-gray-400">Doctor</p>
      </div>

      <nav className="px-4 space-y-2">
        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive ? "bg-gray-800" : "hover:bg-gray-800"
            }`
          }
        >
          Appointments
        </NavLink>
      </nav>
    </aside>
  );
}
