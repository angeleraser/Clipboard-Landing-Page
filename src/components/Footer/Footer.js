/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../css/Footer/Footer.css";
import { socialNetworks } from "../../data";
const Footer = () => {
  return (
    <footer className="w-full footer">
      <nav className="w-full">
        <ul className="w-full grid">
          <li>
            <a
              className="app-logo bg-cover inline-block bg-no-repeat bg-center"
              href="#">
              {""}
            </a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Press Kit</a>
          </li>
          <li>
            <a href="#">Install Guide</a>
          </li>
          <li className="social-networks flex w-full justify-center">
            {socialNetworks.map((network) => (
              <a href="#">{network.logo}</a>
            ))}
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
