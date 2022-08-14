import { FaQuestion } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { faqs } from '../data';
import FAQ from './FAQ';

function FAQs() {
  return (
    <section className="faqs">
      <div className="container faqs-content">
        <SectionTitle icon={<FaQuestion />} title="FAQs" />
        <div className="faqs-wrapper">
          {faqs.map(({ id, question, answer }) => {
            return <FAQ key={id} question={question} answer={answer} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
