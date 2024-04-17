

import { NavLink } from "react-router-dom";


const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between fixed z-10 w-fill">
      <ul className="flex items-center gap-2">
        <li className="font-semibold">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myprojects"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Tutorials"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Tutorials
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;