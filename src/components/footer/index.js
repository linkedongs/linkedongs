import React, { useState, useEffect, useRef } from "react";
import './footer.css';

function Footer() {

  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-item">Contato</li>
        <li className="footer-item">Quem somos?</li>
        <li className="footer-item">Objetivo</li>
      </ul>
      <div className="copyright">© 2024 LinkedOngs</div>
    </div>
  );
}

export default Footer;
