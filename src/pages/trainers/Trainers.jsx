/* eslint-disable */
import { BsInstagram, BsGithub } from 'react-icons/bs';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Image from '../../images/image1.png';
import { trainers } from '../../data';
import Hero from '../../components/Hero';
import Trainer from '../../components/Trainer';
import './Trainers.css';
import 'aos/dist/aos.css';

function Trainers() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'linear' });
    AOS.refresh();
  }, []);
  return (
    <>
      <Hero title="Get In Touch" image={Image}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quisquam
          incidunt corporis sapiente veritatis eligendi hic minus ut voluptas
          obcaecati.
        </p>
      </Hero>
      <section className="trainers">
        <div className="container trainers-container" data-aos="fade-down">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <BsGithub />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Trainers;
