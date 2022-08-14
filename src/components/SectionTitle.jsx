import { PropTypes } from 'prop-types';

function SectionTitle({ icon, title, className }) {
  return (
    <div className={`programs-title ${className}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
}

SectionTitle.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default SectionTitle;
