import { Link } from 'react-router-dom';
import Image from '../images/course-2-1.jpg';

function MainHeader() {
  return (
    <header className="main">
      <div className="container main-header">
        <div className="header-left">
          <h3>#100DaysOfCodes</h3>
          <h1>Join the legends of the programming world</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae minima quaerat cum alias voluptate? Alias Repudiandae
            minima quaerat cum alias voluptate? Alias.
          </p>
          <Link to="/trainers" className="btn">
            get started
          </Link>
        </div>
        <div className="image">
          <img src={Image} alt="" />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
