import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import googlePlay from "./images/googleplay.png";
import appStore from "./images/appstore.png";
import "./Footer.css";

 const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <p>Get 10% off your first order</p>
          <div className="subscribe">
            <InputText placeholder="Enter your email" className="email-input" />
            <Button icon="pi pi-send" className="send-btn" />
          </div>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="footer-section">
          <h4>Account</h4>
          <p><a href="#">My Account</a></p>
          <p><a href="#">Login / Register</a></p>
          <p><a href="#">Cart</a></p>
          <p><a href="#">Wishlist</a></p>
          <p><a href="#">Shop</a></p>
        </div>
        <div className="footer-section">
          <h4>Quick Link</h4>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Terms Of Use</a></p>
          <p><a href="#">FAQ</a></p>
          <p><a href="#">Contact</a></p>
        </div>
        <div className="footer-section">
          <h4>Download App</h4>
          <p className="final-section">Save $3 with App New User Only</p>
          <div className="app-download">
            <img src={googlePlay} alt="Google Play" />
            <img src={appStore} alt="App Store" />
          </div>
          <div className="social-icons">
            <i className="pi pi-facebook" />
            <i className="pi pi-twitter" />
            <i className="pi pi-instagram" />
            <i className="pi pi-linkedin" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
