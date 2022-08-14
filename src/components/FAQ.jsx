import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function FAQ(props) {
  const { question, answer } = props;
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  const showAnswer = () => {
    setIsAnswerShowing((prev) => !prev);
  };

  return (
    <div className="faq">
      <div className="faq-info">
        <h3>{question}</h3>
        <button type="button" className="faq-icon" onClick={showAnswer}>
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </div>
  );
}

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
export default FAQ;
