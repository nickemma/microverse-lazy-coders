import { PropTypes } from 'prop-types';
import Card from '../UI/Card';

function Trainer(props) {
  const { image, name, job, socials } = props;
  return (
    <Card className="trainer">
      <div className="trainer-image">
        <img src={image} alt="" />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer-socials">
        {socials.map(({ icon, link }, index) => {
          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {icon}
            </a>
          );
        })}
      </div>
    </Card>
  );
}

Trainer.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  socials: PropTypes.string.isRequired,
};

export default Trainer;
