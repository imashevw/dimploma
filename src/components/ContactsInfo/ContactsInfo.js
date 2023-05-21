import React from 'react';
import './ContactsInfo.css';
import instagram from "../../assets/instagram_icon.webp"
import whatsapp from "../../assets/whatsapp_icon.png"
import telegram from "../../assets/telegram_icon.webp"

export default function ContactsInfo() {
  return (
    <div className="Contacts">
      <h2>Contact Us</h2>
      <p>For any inquiries or assistance, please feel free to reach out to us:</p>
      <ul>
        <li>
          Email: <a href="https://imashevbekzat77@gmail.com">clothesShopping.com</a>
        </li>
        <li>
          Phone: <a href="tel:+996708851122">+996708851122</a>
        </li>
        <li>
          Address: <a href="https://www.google.com/maps/place/%D0%9D%D0%B8%D0%B3%D0%B5%D1%80/@17.3313013,-2.6047441,5z/data=!3m1!4b1!4m6!3m5!1s0x1199ec7ac6a1af5d:0xc933920a158e24d4!8m2!3d17.607789!4d8.081666!16zL20vMDVjYzE">123 Main Street, City, Country</a>
        </li>
      </ul>
      <div className="social-icons">
        <a href="https://www.instagram.com">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://wa.me/1234567890">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a href="https://web.telegram.org">
          <img src={telegram} alt="Telegram" />
        </a>
      </div>
    </div>
  );
}
