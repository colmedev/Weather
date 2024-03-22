import '../stylesheets/layout.css'

import { NavLink } from 'react-router-dom'
function Layout () {
  return (
  // Here goes the Logo
    <>
      <div className="layout">
        <h1>Weather</h1>
        <header>
          <nav>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'pending'}to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'pending'}to='/clock'>Clock</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'pending'}to='/timer'>Timer</NavLink>
          </nav>
        </header>
      </div>
    </>
  )
}
export default Layout
