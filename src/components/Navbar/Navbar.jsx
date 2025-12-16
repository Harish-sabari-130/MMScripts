import React from 'react';
import { BookOpen } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <BookOpen color="var(--accent-primary)" size={24} />
        <span>MMScripts</span>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#books">Books</a>
        <a href="#testimonials">Testimonials</a>
      </div>
      <button className="nav-btn" onClick={() => document.getElementById('contact').scrollIntoView()}>
        Contact
      </button>
    </nav>
  );
};

export default Navbar;