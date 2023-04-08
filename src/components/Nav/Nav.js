import { NavLink } from "react-router-dom";
import "./Nav.css";
export default function Nav(props) {
  return (
    <nav className="Nav">
      <div className="logo">
        <NavLink to="/">
            {props.children}
        </NavLink>
      </div>
      <ul>
        <li className="NavItem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
      </ul>
    </nav>
  );
}
