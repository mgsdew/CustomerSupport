
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <div className="navbar-container">
        <div className="navbar-title-wrap">
          <span className="navbar-title">CS — Ticket System</span>
        </div>
        <div className="navbar-links-wrap">
          <a className="btn btn-ghost btn-sm" href="#">Home</a>
          <a className="btn btn-ghost btn-sm" href="#">FAQ</a>
          <a className="btn btn-ghost btn-sm" href="#">Changelog</a>
          <a className="btn btn-ghost btn-sm" href="#">Blog</a>
          <a className="btn btn-ghost btn-sm" href="#">Download</a>
          <a className="btn btn-ghost btn-sm" href="#">Contact</a>
          <button className="btn btn-sm navbar-ticket-btn">+ New Ticket</button>
        </div>
      </div>
    );
};

export default Navbar;