import Hero from '../../components/Hero';
import Image from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './About.css';

function About() {
  return (
    <>
      <Hero title="About Us" image={Image}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia tempora
        quas delectus omnis maxime vero enim laboriosam voluptatum corrupti rem.
      </Hero>
      <section className="about-story">
        <div className="container about-content">
          <div className="about-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about-content-info">
            <h2>Our Story</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur amet deserunt tenetur minus animi dicta beatae eos at,
              maxime autem et accusantium pariatur molestias sint, praesentium
              ut dignissimos ea veritatis asperiores doloremque reprehenderit
              labore! Laboriosam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur amet deserunt tenetur minus animi dicta beatae eos at,
              maxime autem et accusantium pariatur molestias sint, praesentium
              ut dignissimos ea veritatis asperiores doloremque reprehenderit
              labore! Laboriosam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est iste
              excepturi quam nisi doloribus explicabo. Tempore est laboriosam
              sed veniam.
            </p>
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="container vision-content">
          <div className="about-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
          <div className="about-content-info">
            <h2>Our Vision</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur amet deserunt tenetur minus animi dicta beatae eos at,
              maxime autem et accusantium pariatur molestias sint, praesentium
              ut dignissimos ea veritatis asperiores doloremque reprehenderit
              labore! Laboriosam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur amet deserunt tenetur minus animi dicta beatae eos at,
              maxime autem et accusantium pariatur molestias sint, praesentium
              ut dignissimos ea veritatis asperiores doloremque reprehenderit
              labore! Laboriosam.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container mission-content">
          <div className="about-content-info">
            <h2>Our Mission</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur amet deserunt tenetur minus animi dicta beatae eos at,
              maxime autem et accusantium pariatur molestias sint, praesentium
              ut dignissimos ea veritatis asperiores doloremque reprehenderit
              labore! Laboriosam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur amet deserunt tenetur minus animi dicta beatae eos at,
              maxime autem et accusantium pariatur molestias sint, praesentium
              ut dignissimos ea veritatis asperiores doloremque reprehenderit
              labore! Laboriosam.
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
