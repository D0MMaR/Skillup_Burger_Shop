import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All rights received @burgershop</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://youtube.com/xyz" target="_blank" rel="noopener noreferrer">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/xyz" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
