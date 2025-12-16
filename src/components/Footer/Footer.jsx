import React from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-col">
          <h4>MMScripts</h4>
          <p style={{color: 'var(--text-muted)', lineHeight: '1.6'}}>
            Connecting readers with extraordinary content. 
            [cite_start]Mobile-friendly, modern, and professional[cite: 38, 39].
          </p>
        </div>

        <div className="footer-col">
          [cite_start]<h4>Contact Us [cite: 6]</h4>
          <div className="contact-item">
            <Mail size={18} color="var(--accent-primary)" />
            [cite_start]<span>email@mmscripts.com [cite: 8]</span>
          </div>
          <div className="contact-item">
            <Phone size={18} color="var(--accent-primary)" />
            [cite_start]<span>+91 98765 43210 [cite: 9]</span>
          </div>
          <div className="contact-item">
            <MapPin size={18} color="var(--accent-primary)" />
            [cite_start]<span>123 Publishing St, Book City [cite: 10]</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <a href="#" style={{color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}>
            [cite_start]<Instagram size={20} /> @mmscripts [cite: 7]
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;