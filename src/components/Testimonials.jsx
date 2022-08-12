import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { ImQuotesLeft } from 'react-icons/im';
import Card from '../UI/Card';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import { testimonials } from '../data';

function Testimonials() {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const prevImage = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };
  const nextImage = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };
  return (
    <section className="testimonials">
      <div className="container testimonial-content">
        <SectionTitle
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonial-title"
        />
        <Card className="testimonial">
          <div className="testimonial-image">
            <img src={avatar} alt="avatar" />
          </div>
          <p className="quote">(`"${quote}"`)</p>
          <h4>{name}</h4>
          <small className="job">{job}</small>
        </Card>
        <div className="btn-container">
          <button className="btn-testimonials" onClick={prevImage}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className="btn-testimonials" onClick={nextImage}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
