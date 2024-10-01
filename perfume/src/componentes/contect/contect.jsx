import React, { forwardRef } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa'; // Using react-icons for social media icons
import './contect.css'; // Assuming the CSS is saved here

const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact" ref={ref} id="contact">
      <h3><u>Contact</u></h3>
      <h3><u>91-5485255555</u></h3>
      <h3><u>lorem@gmail.com</u></h3>

      <div className="social-media">
        <a className="social_media_icon" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook className="facebook-icon" />
        </a>
        <a className="social_media_icon" href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="twitter-icon" />
        </a>
        <a className="social_media_icon" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <span className="instagram-icon-wrapper">
            <FaInstagram className="instagram-icon" />
          </span>
        </a>
        <a className="social_media_icon" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="linkedin-icon" />
        </a>
        <a className="social_media_icon" href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegram className="telegram-icon" />
        </a>
        <a className="social_media_icon" href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>

      <p style={{ padding: '50px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab omnis vitae inventore mollitia odio, velit et?
        Nobis cumque, esse ad voluptatem at quaerat dignissimos fugiat quasi quidem blanditiis inventore repellendus
        pariatur quis placeat. Minus velit necessitatibus libero fugit itaque maxime similique. Iusto molestias tempore
        corporis nam voluptatem omnis in, sequi similique consequatur temporibus ab expedita, repellat facilis adipisci
        provident autem?
      </p>
    </div>
  );
});

export default Contact;
