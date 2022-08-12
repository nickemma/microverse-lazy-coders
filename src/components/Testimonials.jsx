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
          <button className="btn-testimonials">
            <IoIosArrowDropleftCircle />
          </button>
          <button className="btn-testimonials">
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
