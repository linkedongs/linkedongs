import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

const Banner = ({ image, link }) => {
  return (
    <Link to={link} className="banner">
      <img src={image} alt="Banner" />
    </Link>
  );
};

export default Banner;
