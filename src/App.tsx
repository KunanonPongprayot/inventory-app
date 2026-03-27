import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <h3 className="font-bold text-lg">Inventory App</h3>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold no-underline"
                : "text-white hover:text-gray-300 no-underline"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold no-underline"
                : "text-white hover:text-gray-300 no-underline"
            }
          >
            Products
          </NavLink>
        </div>
      </nav>

      {/* Pages */}
      <div className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App