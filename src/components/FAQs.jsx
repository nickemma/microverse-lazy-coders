/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */

import React, { useEffect } from 'react';
import { FaQuestion } from 'react-icons/fa';
import AOS from 'aos';
import SectionTitle from './SectionTitle';
import { faqs } from '../data';
import FAQ from './FAQ';
import 'aos/dist/aos.css';

function FAQs() {
  useEffect(() => {
    AOS.init({ duration: 3000, easing: 'linear' });
    AOS.refresh();
  }, []);
  return (
    <section className="faqs">
      <div className="container faqs-content">
        <SectionTitle icon={<FaQuestion />} title="FAQs" />
        <div className="faqs-wrapper" data-aos="fade-right">
          {faqs.map(({ id, question, answer }) => {
            return <FAQ key={id} question={question} answer={answer} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
