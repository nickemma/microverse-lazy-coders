import React, { useEffect } from 'react';
import AOS from 'aos';
import Hero from '../../components/Hero';
import Image from '../../images/meeting-2.jpg';
import StoryImage from '../../images/image3.png';
import VisionImage from '../../images/image4.png';
import MissionImage from '../../images/image5.png';
import './About.css';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'linear' });
    AOS.refresh();
  }, []);
  return (
    <>
      <Hero title="About Us" image={Image}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia tempora
        quas delectus omnis maxime vero enim laboriosam voluptatum corrupti rem.
      </Hero>
      <section className="about-story">
        <div className="container about-content">
          <div className="about-image" data-aos="fade-right">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about-content-info" data-aos="fade-left">
            <h2>Our Story</h2>
            <p>
              Our story began when a group of individuals recognized the value
              of mentorship and the impact it can have on individuals and
              communities. We saw firsthand how powerful it can be to have
              someone to turn to for advice, guidance, and support, and we
              wanted to create a platform that would make it easier for people
              to connect with mentors and access the benefits of mentorship.
            </p>
            <p>
              As we started to build our platform, we knew that we wanted to
              create a user-friendly and accessible experience that would allow
              anyone to easily find and book sessions with a mentor. We also
              wanted to make sure that our platform was inclusive and diverse,
              so that anyone could find a mentor who resonated with them and
              their needs.
            </p>
            <p>
              Today, our platform is helping people all around the world connect
              with mentors and access the support and guidance they need to
              succeed. We&apos;re proud of the impact we&apos;ve had and are
              excited to continue supporting mentorship and personal growth
              through our platform.
            </p>
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="container vision-content">
          <div className="about-image" data-aos="fade-left">
            <img src={VisionImage} alt="Our Vision" />
          </div>
          <div className="about-content-info" data-aos="fade-left">
            <h2>Our Vision</h2>
            <p>
              Our vision is to create a world where mentorship is accessible and
              impactful for everyone. We envision a future where individuals
              have the support and guidance they need to achieve their goals and
              reach their full potential.
            </p>
            <p>
              To achieve this vision, we are committed to building a platform
              that is user-friendly, inclusive, and diverse. We want to make it
              easy for anyone to find and book sessions with a mentor,
              regardless of their location or background. We also want to offer
              a wide range of mentors, each with their own unique areas of
              expertise and experience, so that anyone can find a mentor who
              resonates with their needs and goals.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container mission-content">
          <div className="about-content-info">
            <h2>Our Mission</h2>
            <p>
              Our mission is to make mentorship accessible and impactful for
              everyone. We believe that everyone has the potential to grow and
              achieve their goals, and we want to provide a platform that makes
              it easy for people to connect with mentors and access the support
              and guidance they need to succeed.
            </p>
            <p>
              We are committed to creating a user-friendly and inclusive
              platform that allows anyone to easily find and book sessions with
              a mentor. We strive to offer a diverse range of mentors, each with
              their own unique areas of expertise and background, so that anyone
              can find a mentor who resonates with their needs and goals.
            </p>
          </div>
          <div className="about-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
