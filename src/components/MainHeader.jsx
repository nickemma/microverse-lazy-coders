import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Image from '../images/course-2-1.jpg';
import 'aos/dist/aos.css';

function MainHeader() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'linear' });
    AOS.refresh();
  }, []);

  return (
    <header className="main">
      <div className="container main-header">
        <div className="header-left" data-aos="zoom-in-up">
          <h3>#100DaysOfCode</h3>
          <h1>Join the legends of the programming world</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae minima quaerat cum alias voluptate? Alias Repudiandae
            minima quaerat cum alias voluptate? Alias.
          </p>
          <Link to="/trainers" className="btn">
            get started
          </Link>
        </div>
        <div className="image" data-aos="fade-left">
          <img src={Image} alt="" />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
