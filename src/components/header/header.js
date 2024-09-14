import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setShowCategories(!showCategories);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowCategories(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const categories = [
    "Saúde",
    "Educação",
    "Meio Ambiente",
    "Direitos Humanos",
    "Assistência Social",
    "Proteção Animal",
    "Pets",
  ];

  return (
    <header className="header">
      <Link  to="/" onClick={() => setMenuOpen(false)} className="logo">
         LinkedOngs
      </Link>
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <nav className={`nav-menu ${menuOpen ? "mobile" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Feed
            </Link>
          </li>
          <li className="dropdown" ref={dropdownRef}>
            <button className="dropbtn" onClick={handleClick}>
              Categorias
              {showCategories ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </button>
            {showCategories && (
              <div className="dropdown-content">
                {categories.map((category, index) => (
                  <React.Fragment key={index}>
                    <Link
                      to={`/categories/${category}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {category}
                    </Link>
                    {index !== categories.length - 1 && (
                      <hr className="division" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              Sobre nós
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
