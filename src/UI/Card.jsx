import { PropTypes } from 'prop-types';

function Card(props) {
  const { className, children } = props;
  return <div className={` card ${className}`}>{children}</div>;
}

Card.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Card;
