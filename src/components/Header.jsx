import  {NavLink } from "react-router-dom"
const Header = () => {
  return (
    <>
      <ul className="p-3 m-5 rounded-lg bg-blue-500 text-white flex items-center justify-center gap-20">
        <li className="hover:scale-105 active:scale-100">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "underline decoration-white" : "none"}`
            }>
            Home
          </NavLink>
        </li>
        <li className="hover:scale-105 active:scale-100 ">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              ` ${isActive ? "underline decoration-white" : "none"}`
            }>
            About
          </NavLink>
        </li>
        <li className="hover:scale-105 active:scale-100 ">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` ${isActive ? "underline decoration-white" : "none"}`
            }>
            Contact Us
          </NavLink>
        </li>
        <li className="hover:scale-105 active:scale-100 ">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              ` ${isActive ? "underline decoration-white" : "none"}`
            }>
            Profile
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Header