import "./Footer.css"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__column">
          <h3 className="Footer__column-header">About Us</h3>
          <ul className="Footer__column-list">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="Footer__column">
          <h3 className="Footer__column-header">For Customers</h3>
          <ul className="Footer__column-list">
            <li><a href="#">Shipping &amp; Delivery</a></li>
            <li><a href="#">Returns &amp; Exchanges</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="Footer__column">
          <h3 className="Footer__column-header">Shop</h3>
          <ul className="Footer__column-list">
            <li><a href="#">Women's Clothing</a></li>
            <li><a href="#">Men's Clothing</a></li>
            <li><a href="#">Kids' Clothing</a></li>
          </ul>
        </div>
        <div className="Footer__column">
          <h3 className="Footer__column-header">Follow Us</h3>
          <ul className="Footer__column-list">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="Footer__bottom">
        <p>© 2023 YourOnlineStore. All rights reserved.</p>
      </div>
    </div>
  );
}
