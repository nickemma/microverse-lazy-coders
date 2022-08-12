import { useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { AiFillCaretLeft } from 'react-icons/ai';

function FAQ({ question, answer }) {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  const showAnswer = () => {
    setIsAnswerShowing((prev) => !prev);
  };

  return (
    <div className="faq" onClick={showAnswer}>
      <div className="faq-info">
        <h3>{question}</h3>
        <button type="button" className="faq-icon">
          {isAnswerShowing ? <AiFillCaretLeft /> : <AiFillCaretRight />}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </div>
  );
}

export default FAQ;
