import { PropTypes } from 'prop-types';

function Hero(props) {
  const { title, image, children } = props;
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-bg">
          <img src={image} alt="header background " />
        </div>
        <div className="header-content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Hero;
