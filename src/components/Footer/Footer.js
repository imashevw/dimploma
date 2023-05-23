import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__column">
          <h3 className="Footer__column-header">About Us</h3>
          <ul className="Footer__column-list">
            <li><NavLink href="#">Our Story</NavLink></li>
            <li><NavLink href="#">Our Team</NavLink></li>
            <li><NavLink href="#">Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="Footer__column">
          <h3 className="Footer__column-header">For Customers</h3>
          <ul className="Footer__column-list">
            <li><NavLink href="#">Shipping &amp; Delivery</NavLink></li>
            <li><NavLink href="#">Returns &amp; Exchanges</NavLink></li>
            <li><NavLink href="#">Privacy Policy</NavLink></li>
          </ul>
        </div>
        <div className="Footer__column">
          <h3 className="Footer__column-header">Shop</h3>
          <ul className="Footer__column-list">
            <li><NavLink href="#">Classic style</NavLink></li>
            <li><NavLink href="#">Trousers</NavLink></li>
            <li><NavLink href="#">Hoodie, zips, windbreakers</NavLink></li>
          </ul>
        </div>
        <div className="Footer__column">
          <h3 className="Footer__column-header">Follow Us</h3>
          <ul className="Footer__column-list">
            <li><NavLink href="#">Facebook</NavLink></li>
            <li><NavLink href="#">Instagram</NavLink></li>
            <li><NavLink href="#">Twitter</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="Footer__bottom">
        <p>© 2023 YourOnlineStore. All rights reserved.</p>
      </div>
    </div>
  );
}
