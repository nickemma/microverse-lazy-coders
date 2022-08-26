/* eslint-disable */
import React, { useEffect } from 'react';
import { GiCutDiamond } from 'react-icons/gi';
import Image from '../images/values1.png';
import SectionTitle from './SectionTitle';
import AOS from 'aos';
import { values } from '../data';
import Card from '../UI/Card';
import 'aos/dist/aos.css';

function Values() {
  useEffect(() => {
    AOS.init({ duration: 2500, easing: 'linear' });
    AOS.refresh();
  }, []);
  return (
    <section className="values">
      <div className="container value-content">
        <div className="value-left" data-aos="fade-left">
          <div className="value-image">
            <img src={Image} alt="values design" />
          </div>
        </div>
        <div className="value-right" data-aos="flip-down">
          <SectionTitle icon={<GiCutDiamond />} title="values" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            sit rerum sint eveniet vero, corporis eligendi ipsam molestias
            nesciunt exercitationem?
          </p>
          <div className="values-wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values-items" key={id}>
                  <span>{icon}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
