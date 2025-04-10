import React, { useContext } from "react";
import { HEADER_LINKS } from "../../utils/configs/HeaderLinks";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../../utils/context/AuthContext";

const Header = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <ul>
          {HEADER_LINKS.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {auth ? <button onClick={logout} >Logout</button> :  <Link>login</Link> }
    </header>
  );
};

export default Header;
